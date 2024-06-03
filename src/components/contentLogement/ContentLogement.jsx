import './ContentLogement.sass'
import Collapse from '@view/collapse/Collapse.jsx'
import Carrousel from '@view/carrousel/Carrousel.jsx'
import Tag from '@view/tag/Tag.jsx'
import UserAvatar from '@view/userAvatar/UserAvatar'
import Rating from '@view/rating/Rating'

function ContentLogement({ logement }) {
  const { pictures, host, equipments, tags } = logement
  return (
    <div className='content-logement'>
      <Carrousel pictures={pictures} />

      <div className='content-logement-info'>
        <div>
          <h2 className='content-logement-h2'>{logement.title}</h2>
          <p>{logement.location}</p>

          <div className='content-logement-tag-list'>
            {tags.map((value, index) =>
              <Tag key={index} text={value} />
            )}
          </div>
        </div>

        <div className='content-logement-ratinguser'>
          <UserAvatar host={host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className='content-logement-collapse-list'>
        <Collapse name='Description' text={logement.description} />
        <Collapse name='Équipements' text={equipments.map((value, index) => <div key={index}> {value} </div>)} />
      </div>
    </div>
  )
}

export default ContentLogement
