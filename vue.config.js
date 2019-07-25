/**
 * Created by TaylorTang on 2019/3/29.
 */

const path=require("path");

module.exports = {
    publicPath:'./',
    chainWebpack:(config)=>{
        config.plugins.delete('fork-ts-checker') // 禁用fork-ts-checker

        //配置全局scss变量可用
        const types=['vue-modules','vue'];
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    },
};
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/scss/app.scss'),
            ],
        })
}
