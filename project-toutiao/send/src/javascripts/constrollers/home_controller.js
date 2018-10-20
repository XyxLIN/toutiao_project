import home_template from '../views/home.html';
import home_controller from './home_news_controller';
import news_hot_template from '../views/news_hot.html';
import news_hot_controller from './news_hot_controller';
import news_detail_template from '../views/news_detail.html'
import news_detail_controller from './news_detail._controller';
import home_news_model from '../models/home_news_model';

import Bscroll from 'better-scroll';

let datasources =[];
const render = async()=>{ 
    // let _hot_data= await home_news_model.hot_news_list();
    // datasources= _hot_data;
    // let _datail_data=await home_news_model.detail_news_list();
    home_controller.render();
    document.querySelector('#root').innerHTML=home_template;
    $('.home_news_nav').on("click",function(e){    
       $(e.target).addClass('active').parent().siblings().children().removeClass('active');        
   })

  // 刷新
  
   $('.icon-Updatereset').tap(async function(){
    // routes.switch('#/recomment')  
    home_controller.render();
    let _news_hot_data= await home_news_model.hot_news_list();
    let _template=Handlebars.compile(news_hot_template);
    let _html=_template(_news_hot_data);
    document.querySelector('#root').innerHTML=[home_template,_html];
    $('#home_news_update').addClass('home_news_block').removeClass('home_news_update');
})

$('.home_news_content').tap(function(){
    news_detail_controller.render();
    document.querySelector("#root").innerHTML=news_detail_template;
})

// $('.hme_news_content').on('click',function(){
//     console.log(222);
// })

// handleContentScroll();
  
}



render();



   



//  const handleContentScroll= () =>{
//     $('.header_item_update').tap(function(){
      
//         $('.icon-Updatereset').prop('class',"icon iconfont icon-Updatereset.loading")
//     })

  
  

// news_hot.getHotList();


export default { render }


