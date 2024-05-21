import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'
import './Layout.sass'

function Layout({ header, footer, children }) {
  return (
    <>
      <Header header={header} />
      <main>
        {children}
      </main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout