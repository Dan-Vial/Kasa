import { useState } from 'react'
import './Collapse.sass'
import collapse_btn from '../../assets/collapse_btn.svg'

function Collapses({ name, text }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className='collapse'>
      <div className='bar'>
        <div>{name}</div>
        <input
          className={visible ? 'btn rot' : 'btn'}
          type="image"
          alt="Collapse button"
          src={collapse_btn}
          onClick={() => setVisible(!visible)}
          aria-expanded={visible}
          aria-controls={`collapse-${name}`}
        />
      </div>
      <div className={visible ? 'collapse-text anim' : 'collapse-text'}>
        <div id={`collapse-${name}`} className='text'>
          <div>{text}</div>
        </div>
      </div>

    </div>

  )
}

export default Collapses
