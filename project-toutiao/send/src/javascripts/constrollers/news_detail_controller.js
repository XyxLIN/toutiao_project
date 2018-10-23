
import news_detail_template from '../views/news_detail.html';
import news_detail_model from '../models/home_news_model';
import home_news_update from '../views/home_news_update.html';

let datasources=[];

const render=() =>{
    let _template1= Handlebars.compile(home_news_update);
    let html=_template1();
    $('.wrapper main').html(html);
    
}

render();

export default { render }