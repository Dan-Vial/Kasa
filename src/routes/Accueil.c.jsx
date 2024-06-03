import Layout from '@view/layout/Layout.jsx'
import ContentAcueil from '@view/contentAccueil/ContentAcueil.jsx'
import pageAcueil from '@model/Accueil.m.jsx'

function Accueil() {
  return (
    <Layout>
      <ContentAcueil pageAcueil={pageAcueil} />
    </Layout>
  )
}

export default Accueil
