import Layout from '@view/layout/Layout.jsx'
import ContentLogement from '@view/contentLogement/ContentLogement.jsx'

function Logements({ logement }) {
  return (
    <>
      <Layout>
        <ContentLogement logement={logement} />
      </Layout>
    </>
  )
}

export default Logements
