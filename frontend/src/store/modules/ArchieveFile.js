import axios from "axios"
import router from "./../../route";



//SHOWING ALL ARCHIEVE FILES IN SRMS

const state = {
    eval: {},
    schol: {},
    gradesh: {},
 

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

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}