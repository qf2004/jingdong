import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./moduleA";
import moduleB from "./moduleB";
Vue.use(Vuex);

// export default new Vuex.Store({
//     state:{
//              id: '01'
//       }
// })

export default new Vuex.Store({
    state: {
        id: '01'
    },
    modules: { a: moduleA, b: moduleB }

})