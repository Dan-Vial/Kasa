import './ContentLogement.sass'
import Collapse from '../collapse/Collapse.jsx'
import Carrousel from '../carrousel/Carrousel.jsx'
import Tag from '../tag/Tag.jsx'

function ContentLogement({ logement }) {
  const { pictures, host, equipments, tags } = logement
  return (
    <div className='content-logement'>
      <Carrousel pictures={pictures} />

      <div>
        <div>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>

          <div className='tag-list'>
            {tags.map((value, index) =>
              <Tag key={index} text={value} />
            )}
          </div>
        </div>

        <div className='ratinguser'>
          <p>rating: {logement.rating}</p>

          <div>
            <img src={host.picture} alt={host.name} />
            <p>{host.name}</p>

          </div>
        </div>
      </div>

      <div className='collapse-list'>
        <Collapse name='Description' text={logement.description} />
        <Collapse name='Équipements' text={equipments.map((value, index) => <div key={index}> {value} </div>)} />
      </div>
    </div>
  )
}

export default ContentLogement
