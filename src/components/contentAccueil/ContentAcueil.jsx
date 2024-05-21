import Thumb from '../thumb/Thumb.jsx'
import TitleBg from '../titleBg/TitleBg.jsx'
import './ContentAcueil.sass'

function ContentAcueil({ pageAcueil }) {
  const { titlebg, logements } = pageAcueil

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
