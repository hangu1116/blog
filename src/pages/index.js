import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  renderWriter(model) {
    if (
      !model ||
      !model.description ||
      !model.type ||
      model.type !== "reading"
    ) {
      return null
    } else {
      return <span style={styles.writer}>{model.description + " | "}</span>
    }
  }
  renderPost(node) {
    const title = node.frontmatter.title || node.fields.slug
    if(node.frontmatter.type == "photo"){
      return (
        <article key={node.fields.slug}>
          <header style={styles.header}>
            <h4
              style={{
                marginBottom: rhythm(1 / 4),
                fontSize: "var(--h3Size)",
                fontWeight: "var(--light)",
              }}
            >
              <Link
                style={{ boxShadow: `none`, color: "var(--titleText)" }}
                to={node.fields.slug}
              >
                {title}
              </Link>
            </h4>
            <div style={styles.articleInfo}>
              {
                node.frontmatter.tags && node.frontmatter.tags.length>0 && node.frontmatter.tags.map(tag => (
                  <div style={styles.tagBody}># {tag}</div>
                ))
              }
            </div>
          </header>
          <div style={styles.articleLine} />
        </article>
      )
    }else{
      return (
        <article key={node.fields.slug}>
          <header style={styles.header}>
            <h4
              style={{
                marginBottom: rhythm(1 / 4),
                fontSize: "var(--h3Size)",
                fontWeight: "var(--light)",
              }}
            >
              <Link
                style={{ boxShadow: `none`, color: "var(--titleText)" }}
                to={node.fields.slug}
              >
                {title}
              </Link>
            </h4>
            <div style={styles.articleInfo}>
              {this.renderWriter(node.frontmatter)}
              <small style={{ fontSize: "var(--dSize)",
                lineHeight: "var(--dHeight)",color: "var(--descText)" }}>
                {node.frontmatter.date}
              </small>
            </div>
            <div style={styles.articleInfo}>
              {
                node.frontmatter.tags && node.frontmatter.tags.length>0 && node.frontmatter.tags.map(tag => (
                  <span style={styles.tagBody}># {tag}</span>
                ))
              }
            </div>
          </header>
          {node.frontmatter.type !== "reading" && (
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                style={{
                  fontSize: 14,
                  color: "var(--contentText)",
                  fontWeight: "var(--light)",
                  marginTop: rhythm(1 / 3),
                }}
              />
            </section>
          )}
          <div style={styles.articleLine} />
        </article>
      )
    }
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/*<Bio />*/}
        <div style={{ height: 80 }} />
        {posts.map(({ node }) => this.renderPost(node))}
      </Layout>
    )
  }
}

export default BlogIndex

const styles = {
  header: {
    marginTop: rhythm(1),
    marginBottom: rhythm(1 / 4),
  },


  articleInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: 'wrap',
  },
  tagBody: {
    display: "flex",
    marginRight: 14,
    alignItems: "center",
    height: 15,
    fontSize: "var(--dSize)",
    lineHeight: "var(--dHeight)",
    color: "var(--descText)",
  },
  writer: {
    marginRight: 10,
    fontSize: "var(--dSize)",
    lineHeight: "var(--dHeight)",
    color: "var(--descText)",
  },
  articleLine: {
    height: 1,
    width: "106%",
    marginLeft: "-3%",
    marginTop: "40px",
    backgroundColor: "var(--lineColor)",
  },
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { lock: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            tags
            type
            description
          }
        }
      }
    }
  }
`
