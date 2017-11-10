import ReactDisqusComments from 'react-disqus-comments'

import syntaxHighlighting from '../styles/syntax-highlighting'
import styles from '../styles/components/post'
import fadeIn from '../styles/fade-in'

const PostTitle = ({ title }) => (
  <h1 className='post-title' itemProp='name'>
    { title }
  </h1>
)

export default ({ title, body, description, date, formattedDate, slug, tags }) => (
  <section>
    <svg xmlns="http://www.w3.org/2000/svg" display="none" version="1.1"><defs><symbol id="icon-menu" viewBox="0 0 1024 1024"><path class="path1" d="M128 213.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 725.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5zM128 469.333h768q17.667 0 30.167 12.5t12.5 30.167-12.5 30.167-30.167 12.5h-768q-17.667 0-30.167-12.5t-12.5-30.167 12.5-30.167 30.167-12.5z"></path></symbol><symbol id="icon-search" viewBox="0 0 951 1024"><path class="path1" d="M658.286 475.429q0-105.714-75.143-180.857t-180.857-75.143-180.857 75.143-75.143 180.857 75.143 180.857 180.857 75.143 180.857-75.143 75.143-180.857zM950.857 950.857q0 29.714-21.714 51.429t-51.429 21.714q-30.857 0-51.429-21.714l-196-195.429q-102.286 70.857-228 70.857-81.714 0-156.286-31.714t-128.571-85.714-85.714-128.571-31.714-156.286 31.714-156.286 85.714-128.571 128.571-85.714 156.286-31.714 156.286 31.714 128.571 85.714 85.714 128.571 31.714 156.286q0 125.714-70.857 228l196 196q21.143 21.143 21.143 51.429z"></path></symbol><symbol id="icon-close" viewBox="0 0 805 1024"><path class="path1" d="M741.714 755.429q0 22.857-16 38.857l-77.714 77.714q-16 16-38.857 16t-38.857-16l-168-168-168 168q-16 16-38.857 16t-38.857-16l-77.714-77.714q-16-16-16-38.857t16-38.857l168-168-168-168q-16-16-16-38.857t16-38.857l77.714-77.714q16-16 38.857-16t38.857 16l168 168 168-168q16-16 38.857-16t38.857 16l77.714 77.714q16 16 16 38.857t-16 38.857l-168 168 168 168q16 16 16 38.857z"></path></symbol><symbol id="icon-twitter" viewBox="0 0 951 1024"><path class="path1" d="M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z"></path></symbol><symbol id="icon-facebook" viewBox="0 0 585 1024"><path class="path1" d="M548 6.857v150.857h-89.714q-49.143 0-66.286 20.571t-17.143 61.714v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571q0-106.286 59.429-164.857t158.286-58.571q84 0 130.286 6.857z"></path></symbol><symbol id="icon-google-plus" viewBox="0 0 951 1024"><path class="path1" d="M420 454.857q0 20.571 18.286 40.286t44.286 38.857 51.714 42 44 59.429 18.286 81.143q0 51.429-27.429 98.857-41.143 69.714-120.571 102.571t-170.286 32.857q-75.429 0-140.857-23.714t-98-78.571q-21.143-34.286-21.143-74.857 0-46.286 25.429-85.714t67.714-65.714q74.857-46.857 230.857-57.143-18.286-24-27.143-42.286t-8.857-41.714q0-20.571 12-48.571-26.286 2.286-38.857 2.286-84.571 0-142.571-55.143t-58-139.714q0-46.857 20.571-90.857t56.571-74.857q44-37.714 104.286-56t124.286-18.286h238.857l-78.857 50.286h-74.857q42.286 36 64 76t21.714 91.429q0 41.143-14 74t-33.714 53.143-39.714 37.143-34 35.143-14 37.714zM336.571 400q21.714 0 44.571-9.429t37.714-24.857q30.286-32.571 30.286-90.857 0-33.143-9.714-71.429t-27.714-74-48.286-59.143-66.857-23.429q-24 0-47.143 11.143t-37.429 30q-26.857 33.714-26.857 91.429 0 26.286 5.714 55.714t18 58.857 29.714 52.857 42.857 38.286 55.143 14.857zM337.714 898.857q33.143 0 63.714-7.429t56.571-22.286 41.714-41.714 15.714-62.286q0-14.286-4-28t-8.286-24-15.429-23.714-16.857-20-22-19.714-20.857-16.571-23.714-17.143-20.857-14.857q-9.143-1.143-27.429-1.143-30.286 0-60 4t-61.429 14.286-55.429 26.286-39.143 42.571-15.429 60.286q0 40 20 70.571t52.286 47.429 68 25.143 72.857 8.286zM800.571 398.286h121.714v61.714h-121.714v125.143h-60v-125.143h-121.143v-61.714h121.143v-124h60v124z"></path></symbol><symbol id="icon-angle-down" viewBox="0 0 658 1024"><path class="path1" d="M614.286 420.571q0 7.429-5.714 13.143l-266.286 266.286q-5.714 5.714-13.143 5.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714 13.143-5.714t13.143 5.714l224.571 224.571 224.571-224.571q5.714-5.714 13.143-5.714t13.143 5.714l28.571 28.571q5.714 5.714 5.714 13.143z"></path></symbol></defs></svg>
    <article className='post-container root' itemProp='articleBody'>
      <PostTitle title={title} />
      <p itemProp='description'>{ description || '' }</p>
      <time itemProp='datePublished' dateTime={date}>{ formattedDate }</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <style global jsx>{ styles }</style>
      <style global jsx>{ fadeIn }</style>
      <style global jsx>{ syntaxHighlighting }</style>
    </article>
    <section class="share">
      <a aria-label="Compartilhe no Twitter" href={`https://twitter.com/intent/tweet?text="${ description }" http://nipher.io/${ slug } via @nipher_jonas&hashtags=${ tags.join(',') }`} onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;" title="Compartilhe no Twitter">
        <svg class="icon icon-twitter"><use href="#icon-twitter"></use></svg>
      </a>
      <a aria-label="Compartilhe no Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=http://nipher.io/${ slug }`} onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;" title="Compartilhe no Facebook">
        <svg class="icon icon-facebook"><use href="#icon-facebook"></use></svg>
      </a>
      <a aria-label="Compartilhe no Google Plus" href={`https://plus.google.com/share?url=http://nipher.io/${ slug }`} onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;" title="Compartilhe no Google+">
        <svg class="icon icon-google-plus"><use href="#icon-google-plus"></use></svg>
      </a>
    </section>
    <ReactDisqusComments identifier={ `/${ slug }` } url={ `http://nipher.io/${ slug }` } shortname='nipher' />
  </section>
)
