import './Carrousel.sass'
import collapse_btn from '@assets/collapse_btn.svg'
import { useEffect, useState } from 'react'

function Carrousel({ pictures }) {
  const [positionInArray, setPositionInArray] = useState(0);
  const [debouncedValue, setDebouncedValue] = useState(true);


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

  function slide(pos) {
    if (pos === positionInArray) return 'carrousel-slide-img__selected'

    if (positionInArray === 1 && pos === 0) return 'carrousel-slide-img__left'
    if (positionInArray === pictures.length - 2 && pos === pictures.length - 1) return 'carrousel-slide-img__right carrousel-slide-img__down'

    if (positionInArray === 0 && pos === pictures.length - 1) return 'carrousel-slide-img__left'
    if (positionInArray === pictures.length - 1 && pos === 0) return 'carrousel-slide-img__right carrousel-slide-img__up'

    if (pos > positionInArray) {
      if (pos === pictures.length - 1 || pos === 0) return 'carrousel-slide-img__left carrousel-slide-img__opac'
      return 'carrousel-slide-img__right'
    }

    if (pos < positionInArray) {
      if (pos === pictures.length - 1 || pos === 0) return 'carrousel-slide-img__right carrousel-slide-img__opac'
      return 'carrousel-slide-img__left'
    }
  }

  function debounce(callback, delay = 1000) {
    let debounceInterval;
    if (debouncedValue) {
      setDebouncedValue(false)
      callback()
      debounceInterval = setInterval(() => {
        setDebouncedValue(true)
        clearInterval(debounceInterval)
      }, delay)
    }
  }

  if (pictures.length > 1) {
    useEffect(() => {
      const animInterval = setInterval(() => {
        changeRight()
      }, 5000)

      return () => {
        clearInterval(animInterval)
      };
    }, [positionInArray]);
  }

  return (
    <div className='carrousel'>
      {
        pictures.length === 1 ? '' :
          <>
            <input
              className='carrousel-input carrousel-input__left'
              type="image"
              alt="Left"
              src={collapse_btn}
              onClick={() => debounce(changeLeft)}
            />

            <div className='carrousel-numpicture'>{`${positionInArray + 1}/${pictures.length}`}</div>

            <input
              className='carrousel-input carrousel-input__right'
              type="image"
              alt="Right"
              src={collapse_btn}
              onClick={() => debounce(changeRight)}
            />
          </>
      }

      <div className='carrousel-slide' >
        {
          pictures.map((picture, index) =>
            <img className={`carrousel-slide-img ${slide(index)}`} key={index} src={picture} alt={(picture.split('/')).pop()} />
          )
        }
      </div>
    </div>
  )
}

export default Carrousel
