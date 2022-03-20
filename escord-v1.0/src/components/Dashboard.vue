<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">[PROTECTED] Component</div>

                    <div class="card-body">
                         Dashboard 
                       USER : {{currentUser.faculty_number}} ,
                         ROLE : {{currentUser.role}} ,
                         EMAIL : {{currentUser.email}} ,

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

axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://127.0.0.1:8000"


    export default {
        name:'Dashboard',

    data(){
             return{
                 currentUser:{},
                 token: localStorage.getItem('token'),
             }
        },
        methods:{
            logout(){
                   axios.post('/api/logout').then((response)=>{
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('token');
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
            axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`
            axios.get('/api/user').then(response => {
             this.currentUser = response.data
            })
        } 
    }
</script>
