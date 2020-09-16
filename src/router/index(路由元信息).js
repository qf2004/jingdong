import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/Index";
import BookType from "../pages/BookType";
import BookDetail from "../pages/BookDetail";
import NotFound from "../pages/NotFound";
import Login from "@/pages/Login";
import My from "@/pages/My";
import Shoppingcar from "@/pages/Shoppingcar";

Vue.use(Router)

let router = new Router({
  // mode:"hash",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: Index
    },
    {
      path: "/BookType",
      name: "BookType",
      component: BookType
    },
    {
      path: "/BookDetail/:bookId",
      name: "BookDetail",
      component: BookDetail,
      props: true
    },
    // { 
    //   path:"/BookDetail", 
    //   name:"BookDetail",
    //   component:BookDetail
    // },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/My",
      name: "My",
      component: My,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/Shoppingcar",
      name: "Shoppingcar",
      component: Shoppingcar,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => { // /My
  console.log("router.beforeEach");
  // console.log("to",to);//去哪儿
  // console.log("from",from);//从哪儿来
  // next(true);//去吧

  // 如果去购物车，我的就需要判断是否登录过
  // if(to.path=="/My" || to.path=="/Shoppingcar" ){
  if (to.meta.requireAuth == true) {
    // 是否登录过
    if (localStorage.getItem("username")) {
      next(true);
    } else {
      // 跳转到登录页面时，需要把to.path传入，方便，在登陆成功时，跳到对应的页面上。
      next({ "name": "Login", params: { "toPath": to.path } });
    }
  } else {
    next(true);
  }

});


export default router;
