import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'main.js',
  dest: 'rollup.bundle.js',
  format: 'cjs',
  treeshake: true,
  plugins: [
    resolve(),
    babel(),
    uglify()
  ]
}
