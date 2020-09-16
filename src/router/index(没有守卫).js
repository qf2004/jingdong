import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import BookType from "../pages/BookType";
import BookDetail from "../pages/BookDetail";
import NotFound from "../pages/NotFound";


// 安装vueRouter（把vueRouter插到Vue里）
Vue.use(Router)

// // 1、路由配置
// let routes = [
//   {path:"/",component:"TodoList"},
//   {path:"/index",component:"TodoList"}
// ]

// // 2、创建vueRouter对象

// let routerObj = new Router({
//   routes
// });


// export default routerObj;

export default new Router({
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
      component:BookType
    },
    { 
      path:"/BookDetail/:bookId", 
      name:"BookDetail",
      component:BookDetail,
      props:true
    },
    // { 
    //   path:"/BookDetail", 
    //   name:"BookDetail",
    //   component:BookDetail
    // },
    { 
      path:"*", 
      name:"NotFound",
      component:NotFound
    }    
  ]
});


