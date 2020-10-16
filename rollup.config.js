import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'

export default {
    input: './src/package/index.ts',
    output: [
        {
            banner: '/* eslint-disable */',
            file: 'dist/index.js',
            format: 'umd',
            name: 'ui'
        },
        {
            banner: '/* eslint-disable */',
            file: 'dist/index.es.js',
            format: 'es'
        }
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig-r.json',
            clean: true
        }),
        commonjs(),
        VuePlugin({
            styleInjector: '~' + 'vue-runtime-helpers/dist/inject-style/browser.js'
        })
    ],
    external: ['vue', 'vue-property-decorator', 'element-ui', 'vuedraggable']
}
