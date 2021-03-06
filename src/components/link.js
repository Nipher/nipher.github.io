import Router from 'next/router'

function onClickHandler(href, as, middleware, delay, sameRouteFallback) {
  return (e) => {
    e.preventDefault()
    if (Router.pathname === href) return sameRouteFallback()

    middleware()
    setTimeout(() => Router.push(href, as), delay)
  }
}

export default ({ children, href, as, middleware = () => { }, delay = 0, sameRouteFallback }) => (
  <a href={href} onClick={onClickHandler(href, as, middleware, delay, sameRouteFallback)}>
    {children}
  </a>
)
