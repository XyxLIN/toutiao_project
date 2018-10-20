import Router from './routes';
import home_controller  from './constrollers/home_controller';
import home_news_controller  from './constrollers/home_news_controller';
import getHotList from './constrollers/news_hot_controller';
import home_news_model from './models/home_news_model';
import getDetail_controller from './constrollers/news_detail._controller';
import entertainment_controller from './constrollers/news_entertainment_controller';
import training_controller from './constrollers/news_training_controller';
// import news_hot_model from './models/news_hot_model';

import Bscroll from 'better-scroll';

home_controller.render();

home_news_model.news_list();

home_news_controller. render();

home_news_model.hot_news_list();

entertainment_controller .render();

training_controller.render();

getDetail_controller.render();

// const handleContentScroll = async () => {
//     let _news_scroll = new Bscroll ( 'main' ,{
//         startY:-50,
//         probeType:2
//     });

//     // _news_scroll.on('scrollEnd',async ({x,y}) =>{
//     //     if(y >-50 && y<0){
//     //         _news_scroll.scrollTo(0,-50,300)
//     //     }else if (y===0){
//     //         let _news_hot_data= await home_news_model.hot_news_list();
//     //         let _template=Handlebars.compile(news_hot_template);
//     //         let _html=_template(_news_hot_data);
//     //         document.querySelector('#root').innerHTML=[home_template,_html];
//     //         $('#home_news_update').addClass('home_news_block').removeClass('home_news_update');

//     //     }

        
//     //      if(_news_scroll.maxScrollY-y === 0){


//     // }

//     // })

// }

// handleContentScroll();

if(location.hash =="#/hot"){

    getHotList.render();

    getHotList.render();
}



$('.home_news_content').tap(function(){
    news_detail_controller.render();
    document.querySelector('#root').innerHTML=news_detail_template;

} )



//启动路由
const router = new Router({ initial: '#/recomment' });

window.router = router;

router.init();

