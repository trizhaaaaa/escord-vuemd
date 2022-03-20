const state = {
    isAuthenticated: !!localStorage.getItem('token'), 
}
const getters = {
    isAuthenticated: state => {
        return state.isAuthenticated
       }
}
const actions = {}

const mutations = {

    setUser(state,data){
        state.user = data;
        state.isAuthenticated = true;
    },
    LogOut(state){
        state.isAuthenticated = false;
    },
}



export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}