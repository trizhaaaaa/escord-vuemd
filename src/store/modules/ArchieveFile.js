import axios from "axios"
import router from "./../../route";



//SHOWING ALL ARCHIEVE FILES IN SRMS

const state = {
    eval: {},
    schol: {},
    gradesh: {},
    loadingEval: false,
 

}
const getters = {

    getarch_eval: state => {
        return state.eval
       },
    
       getarch_schol: state => {
        return state.schol
    },
    
    getarch_gradesh: state => {
      return state.gradesh
    },
    getloadingEval: state => {
        return state.loadingEval
    }
      
}
const actions = {


    evalformshowarchieve({commit}) {
        axios.get('/api/archieveevalform').then((response)=>{
        
            commit('setArchEval',response.data[0])
        

            
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
      //       console.log('error in adding');
             })
     },

     

    gradeshowarchieve({commit}) {
        axios.get('/api/archievegs').then((response)=>{
        

            commit('setArchGrade',response.data[0])


            
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
      //       console.log('error in adding');
             })
     },

     scholshowarchieve({commit}) {
        axios.get('/api/archieveschol').then((response)=>{
        
            commit('setArchSchol',response.data[0])
            
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
      //       console.log('error in adding');
             })
     },


     downloadpdfgradesheet(){

       
        axios.get('/api/archieveschol',
                 {responseType: 'arraybuffer'})
             .then(response => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
                  var fileLink = document.createElement('a');
                  fileLink.href = fileURL;
                  fileLink.setAttribute('download', 'file.pdf');
                 document.body.appendChild(fileLink);
                 fileLink.click();
              })
         
     },

     archgradesheet({route}){

       
      /*   axios.put('api/archievegs/'+ this.$route.params.gradeshid, { 
            status_archieve: '1', }).then((response)=>{
          
       
                  console.log('archieve successfull');
                  
                  console.log(response.data);
       
    
    }).catch((errors)=>{
           //   this.errors = errors.response.data.errors
                // this.error =  errors.response.data;
                 console.log('error in archeiveing');
    
          
       
                 })  */
    
     },

     addStudEvaluation({commit},addEvalStud){

        commit('setLoading',true)
     
        return  axios.post('api/evalCreate/', addEvalStud).then((response)=>{
          //   this.currentUser = response.data
          commit('setLoading',false)
          console.log('adding successful' , response.data);
            
  
         }).catch(()=>{
          //   console.log("Error in getting the user")
         })  
     
       },

    
    
    
 

}


const mutations = {
    setArchEval(state,data){
        return state.eval = data;
       //  state.isAuthenticated = true;
     },

     setArchSchol(state,data){
        return state.schol = data;
       //  state.isAuthenticated = true;
     },

     setArchGrade(state,data){
        return state.gradesh = data;
       //  state.isAuthenticated = true;
     },
     setLoading(state,data){
        return state.loadingEval = data;
      }

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}