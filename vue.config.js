const merge = require('webpack-merge')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  filenameHashing: true,
  outputDir:
    process.env.NODE_ENV === 'development' ? 'dist/develop' : 'dist/lion',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.220:9000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/variables.scss";`
      },
      less: {
        modifyVars: {
          red: '#fff',
          blue: '#3eaf7c',
          orange: '#f08d49',
          'text-color': '#111'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
  }
}
