const dev = process.env.NODE_ENV !== 'production'

const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const { getMarkdownFrom, getPostList, exists, sortPosts, formatDate } = require('./helpers/post')
const { getExperimentsList } = require('./helpers/experiment')

module.exports = app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/posts.json', async (req, res) => {
      const posts = await getPostList()

      const promises = posts
        .map(async post => {
          const { metaData, slug } = await getMarkdownFrom(post)

          return {
            slug,
            formattedDate: formatDate(metaData.date),
            ...metaData
          }
        })

      const postsData = await Promise.all(promises)
      res.json({ posts: sortPosts(postsData) })
    })

    server.get('/api/post/:slug', async (req, res) => {
      const { slug: fileName } = req.params
      const slug = fileName.replace('.json', '')

      if (!(await exists(slug))) return handle(req, res)

      const postData = await getMarkdownFrom(slug)
      return res.json({
        date: formatDate(postData.metaData.date),
        ...postData
      })
    })

    server.get('/:slug', async (req, res) => {
      const { slug } = req.params

      if (!(await exists(slug))) return handle(req, res)

      const actualPage = '/post'
      return app.render(req, res, actualPage, { slug })
    })

    server.get('/api/experiment/:slug', async (req, res) => {
      const { slug: fileName } = req.params
      const slug = fileName.replace('.json', '')
      const experiments = await getExperimentsList()

      const experimentData = experiments.find(experiment => experiment.slug === slug)

      if (!experimentData) return handle(req, res)

      return res.json({
        ...experimentData
      })
    })

    server.get('/api/experiments.json', async (req, res) => {
      const experimentsData = await getExperimentsList()

      res.json({ experiments: experimentsData })
    })

    server.get('/experiment/:slug', async (req, res) => {
      const { slug } = req.params

      if (!(await exists(slug))) return handle(req, res)

      const actualPage = '/experiment'
      return app.render(req, res, actualPage, { slug })
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })

    return server
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })

