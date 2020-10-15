import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

const getTagIcon = value => {
  switch (value) {
    case "计算机":
      return "👨🏻‍💻计算机/ Computer"
    case "读书笔记":
      return "👨🏻‍🎓读书笔记/ Reading"
    default:
      return value
  }
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <div style={{marginTop: rhythm(6)}}>
      <h4
        style={{
          fontSize: 24,
        }}
      >
        Tags
      </h4>
      <ul>
        {group.map(tag => (
          <p key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              # {getTagIcon(tag.fieldValue)}   {tag.totalCount}
            </Link>
          </p>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

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
