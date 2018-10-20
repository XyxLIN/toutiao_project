
import news_update from '../views/home_news.html';
import news_model from '../models/home_news_model';

let datasources=[];

const render=async () =>{
    let _news_data = await news_model.news_list();
    datasources=_news_data;
    let _template=Handlebars.compile(news_update);
    let _html = _template(datasources);   
    $('main').html(_html);  
}

export default { render }

