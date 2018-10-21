
import news_detail_template from '../views/news_detail.html';
import news_detail_model from '../models/home_news_model';
import home_news_update from '../views/home_news_update.html';

let datasources=[];

const render=() =>{
    let _template1= Handlebars.compile(home_news_update);
    let html=_template1();
    $('.wrapper main').html(html);
    $('.home_news_content').tap( async function(){    
        let _detail_data= await news_detail_model.detail_news_list();
        datasources=_detail_data;
        let _template=Handlebars.compile(news_detail_template);
        let _html=_template(datasources);
        console.log(_html)
        $('main').html(_html); 
    })
    
}

render();

export default { render }