import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import postcss from 'rollup-plugin-postcss'
import license from 'rollup-plugin-license'
import uglify from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue2'
import path from 'path'

const SRC_PATH = path.join(__dirname, 'packages/index.js')
const DEST_PATH = path.join(__dirname, 'lib/mp-weui.js')
const STYLE_PATH = path.join(__dirname, 'lib/style.css')
const BANNER_PATH = path.join(__dirname, 'banner.text')

export default {
  input: SRC_PATH,
  output: {
    file: DEST_PATH,
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    vue(),
    postcss({
      extract: STYLE_PATH
    }),
    buble(),
    commonjs({
      extensions: ['.js', '.vue']
    }),
    uglify(),
    license({
      banner: {
        file: BANNER_PATH,
        encoding: 'utf-8'
      }
    }),
    progress(),
    filesize()
  ]
}
