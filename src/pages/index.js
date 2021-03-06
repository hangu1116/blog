import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  renderTags(tags) {
    // console.log(tags);
    // debugger;
    if(!tags || tags.length===0){
      return null;
    }else{
      return (
        <div>
          {
            tags.map(tag => (
              <div style={styles.tagBody}>{tag}</div>
            ))
          }
        </div>
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
                <div style={styles.articleInfo}>
                  <small style={{color:'#cccccc'}}>{node.frontmatter.date}</small>
                  {
                    this.renderTags(node.frontmatter.tags, node.fields.slug)
                  }
                </div>
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
  articleInfo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  tagBody:{
    display:'flex',
    flex:0,
    marginLeft:8,
    alignItems:'center',
    height:15,
    fontSize:12,
    color:'#ffffff',
    backgroundColor:'#cccccc',
    borderRadius:4,
    paddingLeft:6,
    paddingRight:6,
  },
  articleLine:{
    height:1,
    width:'106%',
    marginLeft: '-3%',
    marginTop:'40px',
    backgroundColor:'#e8e8e8',
  },
}

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
            date(formatString: "YYYY-MM-DD")
            title
            tags
            description
          }
        }
      }
    }
  }
`