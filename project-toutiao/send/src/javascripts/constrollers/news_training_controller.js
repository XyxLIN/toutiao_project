import news_video from '../views/news_video.html';
import news_model from '../models/home_news_model';
let datasources=[];

const render = async() =>{
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
