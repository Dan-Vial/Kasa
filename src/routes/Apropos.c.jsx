import Layout from '@view/layout/Layout.jsx'
import ContentApropos from '@view/contentApropos/ContentApropos.jsx'
import pageApropos from '@model/Apropos.m.jsx'

function Apropos() {
  return (
    <>
      <Layout>
        <ContentApropos pageApropos={pageApropos} />
      </Layout>
    </>
  )
}

export default Apropos
