import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const InfoPage = () => (
  <Layout>
    <Helmet title={"About me"} />
    <div  style={{marginTop: rhythm(6)}}>
    </div>
    <p><a href="mailto:hangu1116@gmail.com">Email:  hangu1116@gmail.com</a><br/>Loc. Shanghai, China</p>
  </Layout>
)

InfoPage.propTypes = {}

export default InfoPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { lock: { ne: true } } }
    ) {
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
