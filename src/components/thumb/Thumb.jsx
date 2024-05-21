import { Link } from 'react-router-dom'
import './Thumb.sass'

function Thumb({ href, dataId, src, alt, title }) {
  return (
    <Link to={href} data-id={dataId} className='thumb'>
      <figure>
        <img src={src} alt={alt} />
        <figcaption><p>{title}</p></figcaption>
      </figure>
    </Link >
  )
}

export default Thumb
