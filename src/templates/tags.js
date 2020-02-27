import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `# ${tag}`
  return (
    <Layout>
      <div style={{display: 'flex',flexDirection: 'row', paddingTop:48, alignItems:'center'}}>
        <span style={{
          fontSize: 24,
          display: 'flex',
        }}>{tagHeader}</span>
        <div style={{display: 'flex',height: '22px', width: '22px', borderRadius: '11px', backgroundColor: '#b3d7ff', justifyContent: 'center', alignItems:'center', marginLeft: '8px'}}>
          <span style={{display: 'flex',color: '#187bff', fontWeight:'500', lineHeight: '16px', fontSize: '16px'}}>{totalCount}</span>
        </div>
      </div>
      <div>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <p key={slug}>
              <Link to={slug}>{title}</Link>
            </p>
          )
        })}
      </div>

      {/*<Link to="/tags">All tags</Link>*/}
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}, lock: {ne: true}}}) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}

`