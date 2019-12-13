export default {
    state:{
        category:[],
    },
    getters:{
        getCategory(state){
            return state.category
        },
    },
    actions:{
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    context.commit('mcategories',response.data.categories)
                })
        }
    },
    mutations:{
        mcategories(state,data){
            return state.category = data
        }
    }
}
