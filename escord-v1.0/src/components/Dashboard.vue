<template>

    <div class="container">
   

        <div class="dashrole">
          <h1 class="landing-page-title"> {{getCurrentUser.email}}</h1>
        
            <h1 class="landing-page-title"> {{getCurrentUser.user_role}}</h1>
        </div>
    
        
       <v-row justify="center">
           <div class="centerdiv">
   <v-container fill-height fluid>
    <v-row align="center"
      justify="center">
      <v-col cols="3" class="flex-grow-0 flex-shrink-0">
    
    <v-card
    class="mx-auto"
    max-width="344"

  >
     <v-img
    v-bind:src="pic"
      height="200px"
    ></v-img>

    <v-card-title class="text-center">
   GRADESHEET
    </v-card-title>

  
    <v-card-actions>
     <v-btn
        color="orange lighten-2"
        text
      >
        VISIT
      </v-btn>
    </v-card-actions>

  </v-card>

      </v-col>

         <v-col cols="3" class="flex-grow-0 flex-shrink-0">
    
    <v-card
    class="mx-auto"
  
  >
     <v-img
    v-bind:src="pic"
      height="200px"
    ></v-img>

    <v-card-title>
   EVALUATION FORM
    </v-card-title>

   

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        VISIT
      </v-btn>
    </v-card-actions>
  </v-card>

      </v-col>
         <v-col cols="3" class="flex-grow-0 flex-shrink-0">
    
    <v-card
    class="mx-auto"
   
  >
    <v-img
    v-bind:src="pic"
      height="200px"
    ></v-img>

    <v-card-title>
    SCHOLASTIC RECORDS
    </v-card-title>

  

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        VISIT
      </v-btn>


    </v-card-actions>
  </v-card>

      </v-col>
    
    </v-row>
    
  </v-container>
   </div>

  </v-row>

   
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
                 pic: require("../assets/sample.jpg"),
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


<style scoped>

.centerdiv{


    margin-top: 100px;
    margin-bottom: 300px;
     margin-left:300px;

   
 
  
}

.dashrole{
    float: right;
  
    margin-right: 100px;


}


</style>