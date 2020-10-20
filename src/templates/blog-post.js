import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
// import { nodes, connections } from './my-map.json'

class BlogPostTemplate extends React.Component {
  renderTags(tags) {
    if (!tags || tags.length === 0) {
      return null
    } else {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {tags.map(tag => (
            <div style={styles.tagBody}># {tag}</div>
          ))}
        </div>
      )
    }
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article style={{marginTop: rhythm(6)}}>
          <header style={{
            marginBottom: rhythm(2),
          }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: rhythm(0.5),
                fontSize: 34,
                fontWeight: "400",
                color: "var(--titleText)",
              }}
            >
              {post.frontmatter.title}
            </h3>
            <p
              style={{
                // ...scale(-1 / 5),
                display: `block`,
                marginBottom: 0,
                color: "var(--descText)",
                fontSize: "var(--dSize)",
                lineHeight: "var(--dHeight)",
              }}
            >
              {post.frontmatter.type === "reading" && (post.frontmatter.description + " | ")} {post.frontmatter.date}
            </p>
            <div style={styles.articleInfo}>
              {this.renderTags(post.frontmatter.tags)}
            </div>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{ color: "var(--contentText)" }}
          />
          <hr
            style={{
              marginBottom: rhythm(2),
              color: "var(--lineColor)",
            }}
          />
          <footer />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  ← {next.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const styles = {
  writer: {
    fontFamily: "Times New Roman, serif",
    marginTop: 8,
    color: "var(--contentText)",
  },
  articleInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  tagBody: {
    display: "flex",
    // flex:0,
    marginRight: 14,
    alignItems: "center",
    height: 15,
    fontSize: "var(--dSize)",
    lineHeight: "var(--dHeight)",
    color: "var(--descText)",
    borderRadius: 4,
  },
}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        date(formatString: "YYYY/MM/DD HH:mm")
        description
        type
      }
    }
  }
`
