import vue from 'rollup-plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/VueCountdown.vue',
  output: [
    {
      format: 'esm',
      file: 'dist/vue-countdown.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/vue-countdown.cjs.js',
      exports: 'auto',
    },
    {
      name: 'VueCountdown',
      format: 'umd',
      file: 'dist/vue-countdown.umd.js',
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
