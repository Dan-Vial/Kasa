import { useRouteError } from "react-router-dom";

import Layout from '@view/layout/Layout.jsx'
import ContentError from '@view/contentError/ContentError.jsx'
import contentPageError from '@model/Error-page.m.jsx'

function ErrorPage() {
  return (
    <>
      <Layout>
        <ContentError contentPageError={contentPageError} error={useRouteError()} />
      </Layout>
    </>
  )
}

export default ErrorPage
