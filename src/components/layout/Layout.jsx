// import Head from '@view/head/Head.jsx'
import Header from '@view/header/Header.jsx'
import Footer from '@view/footer/Footer.jsx'
import './Layout.sass'
import header_m from '@model/Header.m.jsx'
import footer_m from '@model/Footer.m.jsx'

function Layout({ header = header_m, footer = footer_m, children }) {
  // Head()

  const html = document.querySelector('html')
  // html.setAttribute('lang', 'fr')
  html.classList.add('layout')
  document.body.classList.add('layout-body')
  document.querySelector('#root').classList.add('layout-body-root')

  return (
    <>
      {/* <Head /> */}
      <Header header={header} />
      <main>
        {children}
      </main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout