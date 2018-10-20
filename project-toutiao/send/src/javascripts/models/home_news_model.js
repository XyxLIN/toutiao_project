
// const news_list=()=>{
//     return  new Promise(resolve =>{
//             $.ajax({
//                 url:'/lib/mock/list.json',
//                 success:(res)=>{
//                 resolve(res)
//             }})
//         }
//     )
   
// }

const news_list=()=>{
    return  $.ajax({
                url:'/lib/mock/list.json',
                success:(res)=>{
                    return res;
            }})
     
   
}

const hot_news_list=()=>{
    return $.ajax({
    url:'/lib/mock/hot.json',
    success:(res)=>{
    return res;
}})
}

const detail_news_list =()=>{
    return $.ajax({
    url:'/lib/mock/detail.json',
    success:(res)=>{
    return res;
}})
}

const video_news_list =()=>{
    return $.ajax({
    url:'/lib/mock/video.json',
    success:(res)=>{
    return res;
}})
}

export default  {news_list,  hot_news_list, detail_news_list,video_news_list}