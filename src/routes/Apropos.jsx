import Layout from '../components/layout/Layout.jsx'
import ContentApropos from '../components/contentApropos/ContentApropos.jsx'
import { pageApropos, header, footer } from '../data/data.jsx'

function Apropos() {
  return (
    <>
      <Layout header={header} footer={footer}>
        <ContentApropos pageApropos={pageApropos} />
      </Layout>
    </>
  )
}

export default Apropos
