import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Bio from "../components/bio"
import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <Blog />
  </Layout>
)

export default IndexPage
