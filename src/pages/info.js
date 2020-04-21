import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const InfoPage = () => (
  <Layout>
    <Helmet title={'About me'} />
    <div>
      <h4 style={{
        fontSize: 24,
      }}>About me</h4>
    </div>
    <p>养花👨🏻‍🌾/画画👨🏻‍🎨/看书👨🏻‍💻，Emoji爱好者</p>
    <p>Email:hangu1116@gmail.com</p>
  </Layout>
)

InfoPage.propTypes = {
}

export default InfoPage

export const pageQuery = graphql`
  {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 2000, filter: {frontmatter: {lock: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
      nodes {
        id
      }
    }
  }
}
`