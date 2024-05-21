import Layout from '../components/layout/Layout.jsx'
import ContentAcueil from '../components/contentAccueil/ContentAcueil.jsx'
import { pageAcueil, header, footer } from '../data/data.jsx'

function Accueil() {
  return (
    <>
      <Layout header={header} footer={footer}>
        <ContentAcueil pageAcueil={pageAcueil} />
      </Layout>
    </>
  )
}

export default Accueil
