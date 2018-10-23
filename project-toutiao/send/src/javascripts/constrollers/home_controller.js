import home_template from '../views/home.html';
import home_controller from './home_news_controller';
import home_news_model from '../models/home_news_model';
import news_hot_template from '../views/news_hot.html';
const render = () => {
    home_controller.render();
    document.querySelector('#root').innerHTML = home_template;
    $('.home_news_nav').on("click", function (e) {
        $(e.target).addClass('active').parent().siblings().children().removeClass('active');
    })
    $('.icon-Updatereset').tap(async function () {
        // routes.switch('#/recomment')  
        await refresh();
        $('.home_news_update').addClass('home_news_block').removeClass('home_news_update')
    })

    $('.home_news-content').live('tap',async function () {
        console.log(111)
        let _detail_data = await news_detail_model.detail_news_list();
        datasources = _detail_data;
        let _template = Handlebars.compile(news_detail_template);
        let _html = _template(datasources);
        console.log(_html)
        $('main').html(_html);
    })

}

const refresh = async () => {

    let _news_hot_data = await home_news_model.hot_news_list();
    let _template = Handlebars.compile(news_hot_template);
    let _html = _template(_news_hot_data);
    document.querySelector('#root').innerHTML = [home_template, _html];
    // $('#home_news_update').addClass('home_news_block').removeClass('home_news_update');
}
render();


export default {
    render
}