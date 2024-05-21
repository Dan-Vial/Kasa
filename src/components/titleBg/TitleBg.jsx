import './TitleBg.sass'

function HeaderContent({ titlebg }) {
  const { text, img } = titlebg
  return (
    <div className='title-bg'>
      <img src={img.src} alt={img.alt} />
      <h2>{text}</h2>
    </div>
  )
}

export default HeaderContent
