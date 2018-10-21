import home_template from '../views/home.html';
import home_controller from './home_news_controller';
import news_hot_template from '../views/news_hot.html';
import news_hot_controller from './news_hot_controller';
import news_detail_template from '../views/news_detail.html'
import news_detail_controller from './news_detail_controller';
import home_news_model from '../models/home_news_model';
import home_news_update from '../views/home_news_update.html';

import Bscroll from 'better-scroll';

let datasources =[];
const render = async()=>{ 
    // let _hot_data= await home_news_model.hot_news_list();
    // datasources= _hot_data;
    // let _datail_data=await home_news_model.detail_news_list();
    let _template = Handlebars.compile(home_news_update);
    let _html=_template();
    $('.wrapper main').html(_html);
  
    // home_controller.render();
    // document.querySelector('#root').innerHTML=home_template;
    $('.home_news_nav').on("click",function(e){    
       $(e.target).addClass('active').parent().siblings().children().removeClass('active');        
   })



  // 刷新
  
   $('.icon-Updatereset').tap(async function(){
    // routes.switch('#/recomment')  
      await refresh()
})

$('.home_news_content').tap(function(){
    console.log(111)
    news_detail_controller.render();
    document.querySelector("#root").innerHTML=news_detail_template;
})

handleContentScroll();
}

render();

const getNewsList=async () => { 
    let _news_data = await news_model.news_list();
    datasources=_news_data;
    let _template=Handlebars.compile(news_update);
    let _html = _template(datasources);   
    $('main').html(_html);  
}
//better-scroll事件
const handleContentScroll = async () => {
    
    let _news_scroll = new Bscroll ( 'main' ,{
        click :true,
        startY:-50,
        probeType:2
    });

    await getNewsList();

    let _o_scroll_info_top = $('.scroll-info--top') // 下拉刷新的dom元素
    let _o_scroll_info_top_title = _o_scroll_info_top.find('.scroll-info__title') // 下拉刷新的文字dom
    
    let _o_scroll_info_bottom = $('.scroll-info--bottom') // 下拉刷新的dom元素
    let _o_scroll_info_bottom_title = _o_scroll_info_bottom.find('.scroll-info__title') // 下拉刷新的文字dom

    let _top_class = 'scroll-info--top scroll-info ' // 下拉刷新元素的初始类名
    let _scroll_y_status="go";
    let _scroll_bottom_sta=false;
    _news_scroll.on('scroll',async ({x,y}) =>{
        if(y >0 && _scroll_y_status!=='release'){
            _scroll_y_sta = 'release';
            _o_scroll_info_top.prop('class',_top_class+'release-refresh');
            _o_scroll_info_top_title.html('放开就刷新');
        }
            _scroll_bottom_sta=false;
            if(_news_scroll.maxScrollY-y>0){
                scroll_bottom_sta=true;
                _o_scroll_info_bottom_title.html('放开去加载')
            }


    })

    _news_scroll.on('scrollEnd', async ({ x, y }) => {
        if ( y > -80 && y < 0 ) { // 没有完全拉出刷新元素
            // 塞回去
            _news_scroll.scrollTo(0, -80, 300)
        }else if ( y === 0  ) { // 说明该获取数据去了
            if ( _scroll_y_sta === 'release' ) {
                _o_scroll_info_top.prop('class', _top_class + 'loading')
                _o_scroll_info_top_title.html('正在加载')
                await refreshNewsList()
                _o_scroll_info_top.prop('class', _top_class + 'go-refresh')
                _o_scroll_info_top_title.html('下拉就刷新')
                _scroll_y_sta = 'go'
                _job_scroll.refresh()
            }     
            _news_scroll.scrollTo(0, -80, 300)
        }


        if ( _news_scroll.maxScrollY - y === 0 && _scroll_bottom_sta ) {
            
            _o_scroll_info_bottom_title.html('正在加载')
            _o_scroll_info_bottom.addClass('loading')
            _pageNo ++
            await getJobList();
            _o_scroll_info_bottom_title.html('上拉去加载')
            _o_scroll_info_bottom.removeClass('loading')
            _news_scroll.refresh()

        }
    })

}

const refreshNewsList=async ()=>{
        let _news_data= await home_news_model.news_list();
        datasources=[..._news_data,...datasources];
        renderNewsList();
}






const renderNewsList = () =>{
    let _template = Handlebars.compile(home_controller);
    let _html = _template({_news_list:datasources});
    $('.wrapper main .news-content').htnl(_html)
}

// const refresh= async ()=>{

//     let _news_hot_data= await home_news_model.hot_news_list();
//     let _template=Handlebars.compile(news_hot_template);
//     let _html=_template(_news_hot_data);
//     document.querySelector('#root').innerHTML=[home_template,_html];
//     $('#home_news_update').addClass('home_news_block').removeClass('home_news_update');

// }



//  const handleContentScroll= () =>{
//     $('.header_item_update').tap(function(){
      
//         $('.icon-Updatereset').prop('class',"icon iconfont icon-Updatereset.loading")
//     })

  
  

// news_hot.getHotList();


export default { render }

