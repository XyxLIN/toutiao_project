import home_template from '../views/home.html';
import home_controller from './home_news_controller';
import home_news_model from '../models/home_news_model';
import news_hot_template from '../views/news_hot.html';
const render = () =>{
    home_controller.render();
    document.querySelector('#root').innerHTML = home_template;
    $('.home_news_nav').on("click",function(e){    
        $(e.target).addClass('active').parent().siblings().children().removeClass('active');        
    })
    $('.icon-Updatereset').tap(async function(){
        // routes.switch('#/recomment')  
        await refresh();
        $('.home_news_update').addClass('home_news_block').removeClass('home_news_update')
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