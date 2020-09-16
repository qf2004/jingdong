
export default {
    namespaced: true,
    state: () => ({ 
        count:0
    }),
    mutations: {
        incCount(state,payLoad){
            console.log("payLoad",payLoad);
            state.count += payLoad.n;
        }
    },
    actions: {  
        incCount(context,payLoad){
            console.log("A模块");
            // context.commit(payLoad);
            context.commit('incCount',1)
        }
    }
}