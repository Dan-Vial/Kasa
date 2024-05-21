import './ContentLogement.sass'
import Collapse from '../collapse/Collapse.jsx'
import Carrousel from '../carrousel/Carrousel.jsx'
import Tag from '../tag/Tag.jsx'

function ContentLogement({ logement }) {
  const { pictures, host, equipments, tags } = logement
  return (
    <div className='content-logement'>
      <Carrousel />

      <p>{JSON.stringify(logement)}</p>

      <div className='tag-list'>
        {tags.map((value, index) =>
          <Tag key={index} text={value} />
        )}
      </div>

      <div className='collapse-list'>
        <Collapse name='Description' text={logement.description} />
        <Collapse name='Équipements' text={equipments.map((value, index) => <div key={index}> {value} </div>)} />
      </div>
      <Collapse name='Équipements' text={equipments.map((value, index) => <div key={index}> {value} </div>)} />

    </div>
  )
}

export default ContentLogement
