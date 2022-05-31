import axios from "axios"

///GETTING THE USER OF THE WEBSITE IN ROWS

const state = {
    student: {},
    staff: {},
 

}
const getters = {

    getarch_student: state => {
        return state.student
       },
    
    getarch_staff: state => {
      return state.staff
    },
      
}
const actions = {


    studentshow({commit}) {
        axios.get('/api/showuseraccount').then((response)=>{
        
            commit('setStudent',response.data[0])
        

            
             }).catch((errors)=>{
   
             this.error =  errors.response.data;
   
             })
     },

     

    staffshow({commit}) {
        axios.get('/api/showadminaccount').then((response)=>{
        

            commit('setStaff',response.data[0])

            
             }).catch((errors)=>{
      
             this.error =  errors.response.data;
     
             })
     },


     //creating staff account

     createstaff({commit},formData) {
        axios.post('/api/createaccadm',formData).then((response)=>{
        

        
            //   console.log('adding successful' , response.data);

            
             }).catch((errors)=>{
    
             this.error =  errors.response.data;
  
             })
     },

   
    
 

}


const mutations = {
    setStudent(state,data){
        return state.student = data;
  
     },

     setStaff(state,data){
        return state.staff = data;
   
     },

   

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}