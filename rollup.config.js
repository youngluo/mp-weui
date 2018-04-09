import vue from 'rollup-plugin-vue2'
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import uglify from 'rollup-plugin-uglify'
// import wxss from 'postcss-mpvue-wxss'

export default {
  input: './packages/index.js',
  output: {
    file: './lib/mp-weui.js',
    format: 'cjs',
    sourcemap: false,
    exports: 'named'
  },
  plugins: [
    vue(),
    postcss({
      extract: './lib/style.css',
      minimize: true
      // plugins: [
      //   wxss
      // ]
    }),
    buble(),
    commonjs({
      extensions: ['.js', '.vue']
    }),
    uglify()
  ]
}
