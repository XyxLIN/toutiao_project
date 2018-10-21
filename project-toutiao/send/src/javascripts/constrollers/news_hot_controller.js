import news_hot_template from '../views/news_hot.html';
import news_hot_model from '../models/home_news_model';
import home_news_update from '../views/home_news_update.html';

let datasources=[];
const render =async () =>{
    let _template1 = Handlebars.compile(home_news_update);
    let html=_template1();
    $('.wrapper main').html(html);
    let _hot_data= await news_hot_model.hot_news_list();
    datasources=_hot_data;
    let  _template=Handlebars.compile(news_hot_template);
    let _html=_template(datasources);
    $('main').html(_html);
    hotList();
}

// const render = () =>{
//     document.querySelector('main').innerHTML = news_hot_template;
// }


const hotList= ()=>{
    // document.querySelector('#root').innerHTML=news_hot_template;
    $('.home_news_nav').tap(function(e){    
       $(e.target).addClass('active').parent().siblings().children().removeClass('active');
         
   })
}
   



export default { render }

   
