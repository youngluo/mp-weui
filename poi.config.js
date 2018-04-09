const path = require('path');

const LIB_PATH = path.resolve(__dirname, 'lib');

module.exports = (options, req) => ({
  entry: './packages/index.js',
  dist: LIB_PATH,
  filename: {
    js: 'mp-weui.js',
    css: 'style.css',
  },
});
