
import news_detail_template from '../views/news_detail.html';
import news_detail_model from '../models/home_news_model';

let datasources=[];

const render=() =>{
 

    $('main').tap( async function(){     
        let _detail_data= await news_detail_model.detail_news_list();
        datasources=_detail_data;
        let _template=Handlebars.compile(news_detail_template);
        let _html=_template(datasources);
        $('main').html(_html); 
    })
    
}

render();

export default { render }