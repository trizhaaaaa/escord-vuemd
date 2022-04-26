import axios from "axios"


const state = {
  specifiedGS: {},
  row : [],
  route : "",

}
const getters = {

  getGS: state => {
    return state.specifiedGS
   },

   getrow : state => {
    return state.row
},

getroute: state => {
  return state.route
},
      
}
const actions = {
     addgsinfo({commit},formData) {
        axios.post('/api/gradesheetinfo', formData).then((response)=>{
        

            var elements = document.getElementsByTagName("input");
            for (var ii=0; ii < elements.length; ii++) {
              if (elements[ii].type == "text") {
                elements[ii].value = "";
              }
            }
            console.log('adding successful' , response.data);

            
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
      //       console.log('error in adding');
             })
     },

     showgsinfo({commit, dispatch},{route}){

   
      axios.get('/api/showgs/'+route).then(response => {
        //   this.currentUser = response.data
   
        commit('setspeciGS',response.data[0])
        commit('setRoute',route)
        //    console.log(response.data[0]);
        return dispatch('displaygstable').then(() => {

             
          console.log('RUNNING ACTIONS 2')


        })

       }).catch(()=>{
           console.log("Error in getting the user")
       }) 
   
   
     },

     displaygstable({commit,state}){

      axios.get('/api/displaygrade/'+ state.route).then(response => {
        //   this.currentUser = response.data
   
        commit('setDataRow',response.data)
           console.log(response.data);

       }).catch(()=>{
           console.log("Error in getting the user")
       }) 
   
     },

   

}


const mutations = {
  setspeciGS(state,data){
    return state. specifiedGS = data;
   //  state.isAuthenticated = true;
 },
 setDataRow(state,data){
  return state.row = data;
},

setRoute(state,data){
  return state.route = data;
},

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}