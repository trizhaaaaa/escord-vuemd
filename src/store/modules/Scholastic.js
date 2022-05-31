import axios from "axios"


const state = {
 
  scholinfo : {},
 

}
const getters = {

  getScholRecord: state => {
    return state.scholinfo
   },

      
}
const actions = {
    

    getScholasticRecord({commit}, studentnumber){

        axios.get('/api/studentschol/'+ studentnumber).then(response => {
          //   this.currentUser = response.data
     
          commit('setScholRecord',response.data[0])
          
  
         }).catch(()=>{
            // console.log("Error in getting the user")
         }) 
     
       },
    

}


const mutations = {
    setScholRecord(state,data){
        return state.scholinfo = data;
      },
      
}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}