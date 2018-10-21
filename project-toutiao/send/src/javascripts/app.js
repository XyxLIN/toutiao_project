import Router from './routes';
import home_controller  from './constrollers/home_controller';
import home_news_controller  from './constrollers/home_news_controller';
import getHotList from './constrollers/news_hot_controller';
import home_news_model from './models/home_news_model';
import getDetail_controller from './constrollers/news_detail_controller';
import entertainment_controller from './constrollers/news_entertainment_controller';
import training_controller from './constrollers/news_training_controller';
import news_detail_template from './views/news_detail.html';
// import news_hot_model from './models/news_hot_model';

home_controller.render();

home_news_model.news_list();

home_news_controller. render();

home_news_model.hot_news_list();

entertainment_controller .render();

training_controller.render();

getDetail_controller.render();



// if(location.hash =="#/hot"){

//     getHotList.render();

//     getHotList.render();
// }



// $('.icon-Updatereset').tap(function(){
//     console.log(111)
//     getDetail_controller.render();
//     document.querySelector('#root').innerHTML=news_detail_template;

// } )



//启动路由
const router = new Router({ initial: '#/recomment' });

window.router = router;

router.init();

