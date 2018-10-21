import news_video from '../views/news_video.html';
import news_model from '../models/home_news_model';
import home_news_update from '../views/home_news_update.html';

let datasources=[];

const render = async() =>{
    let _template1 = Handlebars.compile(home_news_update);
    let html=_template1();
    $('.wrapper main').html(html);
    let _video_data = await news_model.video_news_list();
    datasources=_video_data;
    let _template=Handlebars.compile(news_video);
    let _html =_template(datasources);
    $('main').html(_html);
}

// const render = () =>{
//     document.querySelector('main').innerHTML =  news_video;
// }

export default {render} 
