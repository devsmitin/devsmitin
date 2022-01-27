import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container relative flex flex-col justify-between mx-auto px-6 md:px-32 py-4">
      <div className="flex flex-col py-2 max-w-3xl dark:text-white text-gray-800">
        <h1>404: Not Found</h1>
        <p>That link does not exist. Please go to homepage!</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
