import './TitleBg.sass'

function TitleBg({ titlebg }) {
  const { text, img } = titlebg
  return (
    <div className='title-bg'>
      <img className='title-bg-img' src={img.src} alt={img.alt} />
      <h2 className='title-bg-h2'>{text}</h2>
    </div>
  )
}

export default TitleBg
