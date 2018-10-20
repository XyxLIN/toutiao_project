
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    middleware: [
        proxy('/toutiao', { // /lagou 这个是判断依据 当我们请求'http://localhost:8080/lagou/abc'的时候，这个代理就生效了
            target: 'https://m.toutiao.com/list',// 配置目标服务器 当前服务器回去请求 https://m.lagou.com/lagou/abc
            changeOrigin: true,
            pathRewrite: { // https://m.lagou.com/abc
                '^/toutiao': ''
            }
        }),

        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}
module.exports = server_config

//https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&as=A1351B4C920E741&cp=5BC2BE5754F13E1&_signature=OP.HBhAeY0MsEXz3JLTPfDj.xx