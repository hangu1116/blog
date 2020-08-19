import React from "react"
import { Link, graphql } from "gatsby"
import Layout, { LayoutType } from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import "../style/design.css"

class DesignPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        type={LayoutType.PHOTO}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop: rhythm(6),
          }}
        >
          <design>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              style={{ ...scale(-1 / 5), color: "var(--descText)" }}
            />
          </design>
        </article>
      </Layout>
    )
  }
}

export default DesignPostTemplate

export const pageQuery = graphql`
  query DesignPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD HH:mm")
        type
      }
    }
  }
`