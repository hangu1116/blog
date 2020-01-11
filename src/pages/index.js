import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/*<Bio />*/}
        <div style={{height:80}}/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h4
                  style={{
                    marginBottom: rhythm(1 / 4),
                    fontSize: 24,
                  }}
                >
                  <Link style={{ boxShadow: `none`, color:'#333333' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h4>
                <small style={{color:'#cccccc'}}>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  style={{fontSize:14}}
                />
              </section>
              <div style={styles.articleLine} />
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

const styles = {
  articleLine:{
    height:1,
    width:'106%',
    marginLeft: '-3%',
    marginTop:'40px',
    backgroundColor:'#e8e8e8',
  },
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
