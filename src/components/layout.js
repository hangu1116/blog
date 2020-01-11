import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <div style={{display:'flex', flexDirection:"row",justifyContent:"space-between"}}>
        <h5
          style={styles.title}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/info`}
          >
            {'About me'}
          </Link>
        </h5>
      <h5
        style={styles.title}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title||'home'}
        </Link>
      </h5>
        <h5
          style={styles.title}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/tags`}
          >
            tags
          </Link>
        </h5>
      </div>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          fontFamily: 'PingFang',
          fontWeight: '400'
        }}
        onbeforecopy='return false'
        oncontextmenu='return false'
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{color: '#cccccc', fontSize:14, marginTop:80}}>
          © {new Date().getFullYear()}, Write by cyj
        </footer>
      </div>
    )
  }
}

export default Layout

const styles={
  title:{
    fontFamily: `PingFang, YaHei, Montserrat, sans-serif`,
    marginTop: 0,
    fontWeight: '400',
    color:'#cccccc',
    textAlign: 'center',
  }
}