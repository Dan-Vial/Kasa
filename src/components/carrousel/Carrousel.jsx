import './Carrousel.sass'
import collapse_btn from '../../assets/collapse_btn.svg'
import { useState } from 'react'

function Carrousel({ pictures }) {
  const [positionInArray, setPositionInArray] = useState(0);

  function changeLeft() {
    if (positionInArray === 0) {
      setPositionInArray(pictures.length - 1)
    } else {
      setPositionInArray(positionInArray - 1)
    }
  }

  function changeRight() {
    if (positionInArray === pictures.length - 1) {
      setPositionInArray(0)
    } else {
      setPositionInArray(positionInArray + 1)
    }
  }

  return (
    <div className='carrousel'>
      {
        pictures.length === 1 ? '' :
          <>
            <input
              className='left'
              type="image"
              alt="Left"
              src={collapse_btn}
              onClick={changeLeft}
            />

            <div className='numpicture'>{`${positionInArray + 1}/${pictures.length}`}</div>

            <input
              className='right'
              type="image"
              alt="Right"
              src={collapse_btn}
              onClick={changeRight}
            />
          </>
      }

      {
        pictures.map((picture, index) =>
          <img className={positionInArray === index ? '' : 'hidden'} key={index} src={picture} alt={(picture.split('/')).pop()} />
        )
      }

      {/* <img className='hidden' src={pictures[positionInArray]} alt={(pictures[positionInArray].split('/')).pop()} />
      <img src={pictures[positionInArray]} alt={(pictures[positionInArray].split('/')).pop()} /> */}

    </div>
  )
}

export default Carrousel
