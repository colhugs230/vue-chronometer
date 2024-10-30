import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/VueChronometer.vue',
  output: [
    {
      format: 'esm',
      file: 'dist/vue-chronometer.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/vue-chronometer.cjs.js',
      exports: 'auto',
    },
    {
      name: 'VueChronometer',
      format: 'umd',
      file: 'dist/vue-chronometer.umd.js',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    vue({ compileTemplate: true }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }),
    terser(),
  ],
  external: ['vue'],
};
