import { useEffect, useState } from 'react'
import Thumb from '@view/thumb/Thumb.jsx'
import TitleBg from '@view/titleBg/TitleBg.jsx'
import './ContentAcueil.sass'

function ContentAcueil({ pageAcueil }) {
  const { titlebg, getLogements } = pageAcueil
  const [logements, setLogements] = useState([])

  useEffect(() => {
    async function fetching() {
      try {
        const res = await getLogements()
        setLogements(await res)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetching()
  }, [])

  return (
    <div className='content-acueil'>
      <TitleBg titlebg={titlebg} />
      <div className='content-acueil-list'>
        {logements.map(({ id, title, cover, description }) =>
          <Thumb key={id} dataId={id} href={`/logements/${id}`} src={cover} alt={description} title={title} />
        )}
      </div>
    </div>
  )
}

export default ContentAcueil
