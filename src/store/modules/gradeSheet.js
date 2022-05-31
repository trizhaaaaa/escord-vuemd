import axios from "axios"


const state = {
  specifiedGS: {},
  row : [],
  route : "",
  card : [],
  loadingStat: false,

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
getCard: state => {
  return state.card
},

loadingStatus: state => {
    return state.loadingStat
}
      
}
const actions = {
     addgsinfo({commit},formData) {
        axios.post('/api/gradesheetinfo', formData).then((response)=>{
        

          /*   var elements = document.getElementsByTagName("input");
            for (var ii=0; ii < elements.length; ii++) {
              if (elements[ii].type == "text") {
                elements[ii].value = "";
              }
            } */
          //  console.log('adding successful' , response.data);

            
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

             
        //  console.log('RUNNING ACTIONS 2')


        })

       }).catch(()=>{
         //  console.log("Error in getting the user")
       }) 
   
   
     },

     displaygstable({commit,state}){

      axios.get('/api/displaygrade/'+ state.route).then(response => {
        //   this.currentUser = response.data
   
        commit('setDataRow',response.data)
        

       }).catch(()=>{
       //    console.log("Error in getting the user")
       }) 
   
     },


    cardinfo({commit,state},userid){
      commit('setLoading',true)

      return axios.get('/api/perprofcard/'+ userid).then(response => {
        //   this.currentUser = response.data
        commit('setLoading',false)
        commit('setCard',response.data)
          

       }).catch(()=>{
       //    console.log("Error in getting the user")
       }) 
   
     },



     addStudGradesheet({commit},addStud){

      commit('setLoading',true)
   
      return  axios.post('api/gradesheetstudent/', addStud).then((response)=>{
        //   this.currentUser = response.data
        commit('setLoading',false)
        //console.log('adding successful' , response.data);
          

       }).catch(()=>{
        //   console.log("Error in getting the user")
       })  
   
     },
     updateGradesheetData({ commit }, route, formData){

  
        axios.put('/api/addgs/'+route, formData).then((response)=>{
        

          console.log('create professor accounts' , response.data);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })

       

     },

     cardwithpage({commit},route,page){

    
       axios.get(`/api/paginatecard/`+route+`?page=${page}`).then(({data})=>{
            this.cards = data
         //   console.log(data);
        }).catch(({ response })=>{
          //  console.error(response)
        })
  

     }


   

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

setCard(state,data){
  return state.card = data;
},

setLoading(state,data){
  return state.loadingStat = data;
}
}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}