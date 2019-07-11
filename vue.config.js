const path = require('path');
// const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js', // npm serve 的入口文件。为什么 npm serve 会进入 examples 里找 App.vue, 就是因为这里的设置
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => { 
    config.resolve.alias 
      .set('@', resolve('packages')) 
  },
}