
// 实现路由工具

import {routes} from './route'

class Router {

    constructor ({ initial }) {
        
        this.routes = routes; // 路由表
        this.initial = initial || '#/recomment'; // 默认路由
        // this.currentUrl = ''; // 记录当前的路径（hash值）
    }

    init () {
        this.initialHash(); 
        this.HashChange();
    }

    initialHash () { // 初始化hash值
        // location.hash
        if ( !location.hash ){
            location.hash = this.initial
        };
    }

    switch(path){
        location.hash=path;
    }

    Pagefresh(){ 
        let hash= location.hash;  
        this.routes[hash].render();
    }

    HashChange(){
        window.addEventListener("load",this.Pagefresh.bind(this));
        window.addEventListener("hashchange",this.Pagefresh.bind(this))
    }
}
   

export default Router;

