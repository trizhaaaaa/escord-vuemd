import axios from "axios"
import store from "../../store"
import router from '../../route'



const state = {
    isAuthenticated: !!localStorage.getItem('token'),
    currentUser: {},
    role: localStorage.getItem('role'),
    storingerror : "",

}
const getters = {
    isAuthenticated: state => {
        return state.isAuthenticated
       },
    
       getCurrentUser: state => {
        return state.currentUser
       },

       getrole : state => {
           return state.role
       },
       geterror : state => {
        return state.storingerror
    }
      
}
const actions = {
     loginUser({commit, dispatch},User){

          axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/adminlogin',User).then((response)=>{
                //   localStorage.setItem('isLoggedIn','true');
                   localStorage.setItem('token',response.data);
                    
                   axios.defaults.headers.common["Authorization"] = `Bearer ${response.data}`;
                  //   this.$router.push({name:'Dashboard'});
               
                return dispatch('currentUserLog').then(() => {
                 
                        console.log('RUNNING ACTIONS 2')


                })
       //   this.$router.push({name:'Dashboard'});
              //       console.log(response.data);
          //this.$router.push('Dashboard', () => this.$router.go(0))

        //   window.location.replace("home");
                  }).catch((errors)=>{
        //   
               commit("setError",errors.response.data.errors.email[0]);
          //       console.log(errors.response.data.errors.email[0]);
                  })
        
                }); //end of axios
        

        },

       currentUserLog({commit}){
           
        axios.get('/api/user').then(response => {
                //   this.currentUser = response.data
                localStorage.setItem('role', response.data.user_role);

                
                  if(response.data.user_role === "admin"){
                    //    router.push({path:'/About'});
                    router.push('/AdminDashboard', () => router.go(0))
                
                        
                  }else if (response.data.user_role === "superadmin"){
                //    router.push({path:'/Dashboard'});
               
                    router.push('/Dashboard',() => router.go(0));
               
                    
                  }else{
                 //   router.push({path:'/AdminDashboard'});
                 router.push('/StudentDashboard', () => router.go(0))
                  
                  }
   
               }).catch(()=>{
                   console.log("Error in getting the user")
               })
           },


           
       displayuser({commit}){
           
        axios.get('/api/user').then(response => {
                //   this.currentUser = response.data
           
                  commit('setUser',response.data)
                  commit('setRole',response.data.user_role)
   
               }).catch(()=>{
                   console.log("Error in getting the user")
               })
           },
    
}

const mutations = {

    setUser(state,data){
       return state.currentUser = data;
      //  state.isAuthenticated = true;
    },

    setRole(state,data){
        return state.role = data;
    },
    setError(state,data){
      return state. storingerror = data;
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