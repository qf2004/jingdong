import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import BookType from "../pages/BookType";
import BookDetail from "../pages/BookDetail";
import NotFound from "../pages/NotFound";
import Login from "@/pages/Login";
import My from "@/pages/My";
// import Shoppingcar from "@/pages/Shoppingcar";

Vue.use(Router)

let router =  new Router({
  // mode:"hash",
  mode:"history",
  routes:[
    {
      path:"/",
      redirect:"/index"
    },
    { 
      path:"/index",
      name:"index",
      component:Index
    },
    { 
      path:"/BookType",
      name:"BookType",
      component:BookType,
      // 路由独享守卫
      beforeEnter(to,from,next){
        console.log("路由独享守卫：BookType的beforeEnter");
        next(true);
      }
    },
    { 
      path:"/BookDetail/:bookId", 
      name:"BookDetail",
      component:BookDetail,
      props:true
    },
    { 
      path:"/Login", 
      name:"Login",
      component:Login
    },
    { 
      path:"/My", 
      name:"My",
      component:My
    },
    { 
      path:"/Shoppingcar", 
      name:"Shoppingcar",
      // component:Shoppingcar
      component: resolve => require(['@/pages/Shoppingcar'],resolve)
    },
    { 
      path:"*", 
      name:"NotFound",
      component:NotFound
    }    
  ]
});

/*
// 全局的前置守卫（找到了路由配置，但是还没有对应组件）
router.beforeEach((to,from,next)=>{ // /My
  console.log("router.beforeEach");
  console.log("to",to);//去哪儿
  console.log("from",from);//从哪儿来
  // next(true);//去吧

  // 如果去购物车，我的就需要判断是否登录过
  if(to.path=="/My" || to.path=="/Shoppingcar"){
    // 是否登录过
    if(localStorage.getItem("username")){
       next(true);
    }else{
      // 跳转到登录页面时，需要把to.path传入，方便，在登陆成功时，跳到对应的页面上。
      next({"name":"Login",params:{"toPath":to.path}});
    }
  }else{
    next(true);
  }
  
});

//表示：对应上组件了
router.afterEach((to,from)=>{
  
  console.log("afterEach");
  console.log("to",to);//去哪儿
  console.log("from",from);//从哪儿来

})
*/

export default router;