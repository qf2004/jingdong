// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from "./router";
import "./utils/request";
import store from './store'
  	

// axios请求的基准路径。
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "/api";


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//把store通过vue实例注入到每个子组件
  components: { App },
  template: '<App/>'
})

