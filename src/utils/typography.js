import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import '../style/global.css'

Wordpress2016.overrideThemeStyles = ({ rhythm }, options) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    'h1': {
      color: 'var(--titleText)',
      fontFamily: `PingFang, YaHei`,
    },
    'h2':{
      fontFamily: `PingFang, YaHei`,
      fontSize: 38,
      fontWeight:'700',
      marginBottom:2,
    },
    'h3':{
      fontFamily: `PingFang, YaHei`,
      fontWeight:'400',
      fontSize: 34,
    },
    'section h3':{
      fontFamily: `PingFang, YaHei`,
      fontSize: 34,
      fontWeight:'400',
      marginTop:0,
      marginBottom: '6px' ,
    },
    h4:{
      fontFamily: 'PingFang, YaHei',
      fontWeight:'400',
      fontSize: 24,
      letterSpacing:0,
      color: 'var(--titleText)',
      // marginTop:0,
      // marginBottom:1,
    },
    'section h4':{
      fontFamily: 'PingFang, YaHei',
      fontWeight:'500',
      fontSize: 32,
      letterSpacing:0,
      marginTop:0,
      marginBottom: '6px',
    },
    'h5': {
      color: 'var(--titleText)',
      fontFamily: `PingFang, YaHei`,
      // fontWeight:'400',
    },
    'h6': {
      color: 'var(--titleText)',
      fontFamily: `PingFang, YaHei`,
      // fontWeight:'400',
    },
    body:{
      margin:0,
      backgroundColor: 'var(--bg)',
    },
    p:{
      color: 'var(--contentText)'
      // marginBlockEnd: '6px',
    },
    li:{
      margin:0,
    },
    'li>p':{
      marginBottom:0,
    },
    'li>ol, li>ul':{
      marginTop:'2px',
    },
    a:{
      color: 'var(--linkText)',
      outline:'none',
      boxShadow: 'none',
    },
    '.toc li':{
      listStyleType:'none',
      underline:'none',
    },
    'pre': {
      fontSize: '0.84em !important',
    },
    // 引用
    'blockquote':{
      borderLeftColor: 'var(--lineColor)',
      marginTop: rhythm(1),
    },
    'blockquote p':{
      fontSize: '0.84em !important',
    },
    // 代码
    // 行内代码
    'code[class="language-text"]':{
      // backgroundColor: 'var(--descText)',
      // color: 'var(--transportText)',
    },
    img: {
      maxWidth: '100%',
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
