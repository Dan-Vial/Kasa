import './Rating.sass'
import star from '@assets/star.svg'
import star_colored from '@assets/star_colored.svg'

function Rating({ rating }) {

  const stars = nb => {
    let content = [];
    for (let i = 0; i < 5; i++) {
      if (i < nb) {
        content.push(<img key={i} className='rating-star' src={star_colored} alt='rating-star' />);
      } else {
        content.push(<img key={i} className='rating-star' src={star} alt='rating-star' />);
      }
    }
    return content;
  };

  return (
    <div className='rating'>
      {stars(rating)}
    </div>
  )
}

export default Rating