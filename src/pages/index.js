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
      return <span style={styles.writer}>{model.description + "    |"}</span>
    }
  }
  renderPost(node) {
    const title = node.frontmatter.title || node.fields.slug
    if(node.frontmatter.type == "photo" && 0){
      return (
        <Link
          style={{ boxShadow: `none`, color: "var(--titleText)" }}
          to={node.fields.slug}
        >
        <article key={node.fields.slug}>
          <header style={styles.header}>
            <div style={{height: '140px', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
              <img src={node.frontmatter.description} height={'auto'} width={'100%'}/>
            </div>
          </header>
          <p style={{
            fontSize: 14,
            color: "var(--contentText)",
            fontWeight: "var(--light)",
            marginTop: rhythm(1 / 3),
          }}>
            {title}
          </p>
          <div style={styles.articleLine} />
        </article>
        </Link>
      )
    }else{
      return (
        <article key={node.fields.slug}>
          <header style={styles.header}>
            <h4
              style={{
                marginBottom: rhythm(1 / 4),
                fontSize: "var(--h3Size)",
                fontWeight: "var(--medium)",
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
              <small style={{ color: "var(--descText)" }}>
                {node.frontmatter.date}
              </small>
              {
                node.frontmatter.tags && node.frontmatter.tags.length>0 && node.frontmatter.tags.map(tag => (
                  <div style={styles.tagBody}>{tag}</div>
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
    // flex:0,
    marginLeft: 8,
    alignItems: "center",
    height: 15,
    fontSize: 12,
    color: "var(--transportText)",
    backgroundColor: "var(--descText)",
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 6,
  },
  writer: {
    marginRight: 10,
    fontSize: 12,
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
            date(formatString: "YYYY-MM-DD")
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
