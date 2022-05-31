import axios from "axios"


//SHOWING ALL ARCHIEVE FILES IN SRMS

const state = {
    profDatafromEDB: {},
   

}
const getters = {
        getAllDataProf: state => {
        return state.profDatafromEDB
       },
  
}
const actions = {

    showDataProf({commit}) {
        axios.get('/api/edb').then((response)=>{
        
            commit('setProfData',response.data[0])
        

            
             }).catch((errors)=>{

             this.error =  errors.response.data;
  
             })
     },
  
    
 

}


const mutations = {
    setProfData(state,data){
        return state.profDatafromEDB = data;
    },
  

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}