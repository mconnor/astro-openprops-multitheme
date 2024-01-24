const postcssJitProps = require('postcss-jit-props')
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcssNesting = require('postcss-nesting')

module.exports = {
    plugins: [
        postcssJitProps({
            files: [
                path.resolve(
                    __dirname,
                    'node_modules/open-props/dist/open-props.min.css'
                ),
                path.resolve(
                    __dirname,
                    'node_modules/open-props/postcss/normalize.css'
                ),
            ],
        }),
        autoprefixer,
        postcssNesting,
    ],
}
