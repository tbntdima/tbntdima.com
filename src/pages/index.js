import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Bio from "../components/bio"
import Projects from "../components/projects"
import Blog from "../components/blog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio />
    <Projects />
    <Blog />
  </Layout>
)

export default IndexPage
