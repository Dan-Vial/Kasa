import { useState } from 'react'
import './Collapse.sass'
import collapse_btn from '@assets/collapse_btn.svg'

function Collapses({ name, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className='collapse'>
      <div className='collapse-bar'>
        <div>{name}</div>
        <input
          className={visible ? 'collapse-btn collapse-btn__rot' : 'collapse-btn'}
          type="image"
          alt="Collapse button"
          src={collapse_btn}
          onClick={() => setVisible(!visible)}
          aria-expanded={visible}
          aria-controls={`collapse-${name}`}
        />
      </div>
      <div className={visible ? 'collapse-content collapse-content__anim' : 'collapse-content'}>
        <div id={`collapse-${name}`} className='collapse-content-text'>
          <div className='collapse-content-text-margin'>{text}</div>
        </div>
      </div>

    </div>

  )
}

export default Collapses
