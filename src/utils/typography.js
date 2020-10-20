import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import "../style/global.css"

Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      color: "var(--titleText)",
      fontFamily: `PingFang, YaHei, Montserrat, sans-serif`,
    },
    h2: {
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
      fontSize: "var(--h2Size)",
      fontWeight: "var(--medium)",
      marginBottom: 2,
    },
    h3: {
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
      fontWeight: "var(--medium)",
      fontSize: "var(--h3Size)",
      marginTop: "1.25em",
      // marginBottom: "1.25em !important",
    },
    h4: {
      fontFamily: `PingFang  SC, YaHei, Montserrat, sans-serif`,
      fontWeight: "var(--medium)",
      fontSize: "var(--h4Size)",
      letterSpacing: 0,
      color: "var(--titleText)",
      marginTop: "0em !important",
      // marginBottom:1,
    },
    h5: {
      color: "var(--titleText)",
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
      // fontWeight:'400',
    },
    h6: {
      color: "var(--titleText)",
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
      // fontWeight:'400',
    },
    body: {
      margin: 0,
      backgroundColor: "var(--bg)",
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
    },
    p: {
      color: "var(--contentText)",
      fontFamily: `PingFang SC, YaHei, Montserrat, sans-serif`,
      // marginBlockEnd: '6px',
    },
    li: {
      margin: 0,
    },
    "li>p": {
      marginBottom: 0,
    },
    "li>ol, li>ul": {
      marginTop: "2px",
    },
    a: {
      color: "var(--linkText)",
      outline: "none",
      boxShadow: "none",
    },
    ".toc li": {
      listStyleType: "none",
      underline: "none",
    },
    pre: {
      fontSize: "0.84em !important",
    },
    // 引用
    blockquote: {
      borderLeftColor: "var(--lineColor)",
      marginTop: rhythm(1),
      fontFamily: 'Noto Serif SC, serif'
    },
    "blockquote p": {
      fontSize: "0.84em !important",
    },
    img: {
      maxWidth: "100%",
      margin: "1em 0em !important",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
