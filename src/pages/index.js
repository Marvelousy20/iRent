import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HouseImages from "../components/houseImages"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HouseImages />
  </Layout>
)

export default IndexPage
