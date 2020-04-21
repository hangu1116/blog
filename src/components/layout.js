import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
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
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label style={{position: 'fixed', top:38, right:26, cursor:'pointer'}}>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                style={{display:'none'}}
              />
              {
                theme === 'dark' ? <svg t="1587468213160" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="931" width="24" height="24">
                  <path
                    d="M512 192c179.2 0 320 140.8 320 320s-140.8 320-320 320-320-140.8-320-320S332.8 192 512 192M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128L512 128z"
                    p-id="932" fill="#636363"></path>
                  <path d="M544 416l236.8 0C774.4 403.2 768 384 761.6 371.2L544 371.2 544 416z" p-id="933"
                        fill="#636363"></path>
                  <path d="M544 608l0 44.8 217.6 0c6.4-12.8 12.8-32 19.2-44.8L544 608z" p-id="934"
                        fill="#636363"></path>
                  <path d="M544 723.2 544 768 640 768c25.6-12.8 44.8-25.6 64-44.8L544 723.2z" p-id="935"
                        fill="#636363"></path>
                  <path d="M800 492.8l-256 0 0 44.8 256 0c0-6.4 0-12.8 0-25.6S800 499.2 800 492.8z" p-id="936"
                        fill="#636363"></path>
                  <path d="M544 300.8 704 300.8c-19.2-19.2-38.4-32-64-44.8L544 256 544 300.8z" p-id="937" fill="#636363"></path>
                </svg> : <svg t="1587468095420" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                              p-id="919" width="24" height="24">
                  <path
                    d="M512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832M512 896c211.2 0 384-172.8 384-384s-172.8-384-384-384S128 300.8 128 512 300.8 896 512 896L512 896zM800 512c0-160-128-288-288-288l0 576C672 800 800 672 800 512zM480 608 243.2 608C249.6 620.8 256 640 262.4 652.8l217.6 0L480 608zM480 416 480 371.2 262.4 371.2C256 384 249.6 403.2 243.2 416L480 416zM480 300.8 480 256 384 256C358.4 268.8 339.2 281.6 320 300.8L480 300.8zM224 537.6l256 0L480 492.8l-256 0c0 6.4 0 12.8 0 19.2S224 524.8 224 537.6zM480 723.2 320 723.2c19.2 19.2 38.4 32 64 44.8l96 0L480 723.2z"
                    p-id="920" fill="#cccccc"></path>
                </svg>
              }
            </label>
          )}
        </ThemeToggler>
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
        <footer style={{color: 'var(--descText)', fontSize:14, marginTop:80}}>
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
    color:'var(--descText)',
    textAlign: 'center',
  }
}