import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
// import { nodes, connections } from './my-map.json'

class BlogPostTemplate extends React.Component {
  renderTags(tags) {
    if(!tags || tags.length===0){
      return null;
    }else{
      return (
        <div style={{display:'flex', flexDirection:'row'}}>
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
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h3
              style={{
                marginTop: rhythm(5),
                marginBottom: 0,
                fontSize: 34,
                fontWeight: '400',
                color: 'var(--titleText)'
              }}
            >
              {post.frontmatter.title}
            </h3>
            {
              post.frontmatter.type==='reading'&&<p style={styles.writer}>{post.frontmatter.description}</p>
            }
            <div style={styles.articleInfo}>
              {
                this.renderTags(post.frontmatter.tags)
              }
            </div>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
                color:'var(--descText)',
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          {/*<MindMap*/}
          {/*  nodes={nodes}*/}
          {/*  connections={connections}*/}
          {/*/>*/}
          <section dangerouslySetInnerHTML={{ __html: post.html }} style={{color:'var(--contentText)'}}/>
          <hr
            style={{
              marginBottom: rhythm(1),
              color: 'var(--lineColor)'
            }}
          />
          <footer/>
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
  writer:{
    fontFamily: 'Times New Roman, serif',
    marginTop:8,
    color: 'var(--contentText)'
  },
  articleInfo:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop: rhythm(1),
    marginBottom: rhythm(0.3),
  },
  tagBody:{
    display:'flex',
    // flex:0,
    marginRight:8,
    alignItems:'center',
    height:15,
    fontSize:12,
    color:'var(--transportText)',
    backgroundColor:'var(--descText)',
    borderRadius:4,
    paddingLeft:6,
    paddingRight:6,
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
        date(formatString: "YYYY-MM-DD HH:mm")
        description
        type
      }
    }
  }
`
