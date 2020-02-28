import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    'h1, h5, h6': {
      fontFamily: `PingFang, YaHei`,
      // fontWeight:'400',
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
    'h4':{
      fontFamily: 'PingFang, YaHei',
      fontWeight:'400',
      fontSize: 24,
      letterSpacing:0,
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
    body:{
      margin:0,
    },
    p:{
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
      color: '#187bff',
      outline:'none',
      boxShadow: `none`,
    },
    '.toc li':{
      listStyleType:'none',
      underline:'none',
    },
    'pre': {
      fontSize: '0.84em !important',
    }
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
