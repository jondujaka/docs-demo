const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Gatsby',
    description: 'Example of how to integrate docz with gatsby as a theme',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Home', 'Solutions', 'Readme', 'Components'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\jon\\saltosystems-docs-demo\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Gatsby',
        description: 'Example of how to integrate docz with gatsby as a theme',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\jon\\saltosystems-docs-demo',
          templates:
            'C:\\Users\\jon\\saltosystems-docs-demo\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\jon\\saltosystems-docs-demo\\.docz',
          cache: 'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\.cache',
          app: 'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app',
          appPackageJson:
            'C:\\Users\\jon\\saltosystems-docs-demo\\package.json',
          appTsConfig: 'C:\\Users\\jon\\saltosystems-docs-demo\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\jon\\saltosystems-docs-demo\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\jon\\saltosystems-docs-demo\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\jon\\saltosystems-docs-demo\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\jon\\saltosystems-docs-demo\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app\\index.html',
          db: 'C:\\Users\\jon\\saltosystems-docs-demo\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
