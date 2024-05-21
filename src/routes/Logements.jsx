import Layout from '../components/layout/Layout.jsx'
import ContentLogement from '../components/contentLogement/ContentLogement.jsx'
import { header, footer } from '../data/data.jsx'

function Logements({ logement }) {
  return (
    <>
      <Layout header={header} footer={footer}>
        <ContentLogement logement={logement} />
      </Layout>
    </>
  )
}

export default Logements
