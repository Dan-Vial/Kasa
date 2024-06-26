import './Footer.sass'

function Footer({ footer }) {
  return (
    <>
      <footer className='footer'>
        <img
          src={footer.logo.src}
          alt={footer.logo.alt}
        />
        <p>{footer.text}</p>
      </footer>
    </>
  )
}

export default Footer
