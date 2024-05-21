import Layout from '../components/layout/Layout.jsx'
import ContentError from '../components/contentError/ContentError.jsx'
import { header, footer, contentPageError } from '../data/data.jsx'
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Layout header={header} footer={footer}>
        <ContentError contentPageError={contentPageError} error={useRouteError()} />
      </Layout>
    </>
  )
}

export default ErrorPage
