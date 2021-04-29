import * as React from "react"
import Books from "../components/Books"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Form } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Books />
    
  </Layout>
)

export default IndexPage
