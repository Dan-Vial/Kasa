import { Link } from 'react-router-dom'
import './ContentError.sass'


function ErrorPage({ contentPageError, error }) {
  const { logo, text, link } = contentPageError
  // console.error(error.error)
  return (
    <div id="error-page" className="error-page">
      <img className="error-page-img"
        src={logo.src}
        alt={logo.alt}
      />
      <p className="error-page-p">{text}</p>
      {/* <p>{error.statusText}</p> */}
      <Link className="error-page-a" to={link.href}>{link.text}</Link>
    </div>
  )
}


export default ErrorPage
