import axios from "axios"


const state = {
   

}
const getters = {
      
}
const actions = {
     addgsinfo({commit},formData) {
        axios.post('/api/gradesheetinfo', formData).then((response)=>{
            console.log('adding successful' , response.data);
   
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
             console.log('error in adding');
             })
     }

}


const mutations = {

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}