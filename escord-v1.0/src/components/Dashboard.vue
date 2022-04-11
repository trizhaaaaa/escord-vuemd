<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">[SUPERADMIN] Component</div>

                    <div class="card-body">
                         Dashboard 
                            {{getCurrentUser.email}}

                    </div>
                    <div>
               <button  type="submit" @click="logout" class="loginbtn mt-5">LOGout</button>
<!-- add attributes @click="logout" to button   -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import axios from 'axios'
import { mapGetters, mapActions } from 'vuex';

/* axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://127.0.0.1:8000"
 */

    export default {
        name:'Dashboard',

    data(){
             return{
               
                 token: localStorage.getItem('token'),
             }
        },
     //    ...mapActions({currentUserLog : ' currentUserLog'}),
          //...mapGetters({getCurrentUser : 'getCurrentUser'}),
    computed:{
     ...mapGetters({getCurrentUser : 'getCurrentUser'}),
    },
        methods:{
         // ...mapActions({currentUserLog : ' currentUserLog'}),
            logout(){
                   axios.post('/api/logout').then((response)=>{
                       
                        localStorage.removeItem('token');
                         localStorage.removeItem("isadmin");
                         
                      //  this.$router.push('/');
      this.$router.push('/', () => this.$router.go(0))
                   
              }).then(response=>{
   console.log(response);
          })
            }
        },
        created(){
 

        },
        mounted() {

          this.$store.dispatch('displayuser');
              
      
   
            //   this.currentUser = this.$store.getters.getCurrentUser;
         //   axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`
          /*   axios.get('/api/user').then(response => {
             this.currentUser = response.data

                if(response.data.authority){
                    localStorage.setItem('isadmin','true');
                }
                if(response.data.user_role){
                    localStorage.setItem('isadmin','false');
                }
            }) */
        } 
    }
</script>
