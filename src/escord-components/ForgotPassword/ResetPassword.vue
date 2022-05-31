<template>
  <div class="container">
    
            <!-- <ul v-if="errors">
              <li v-for="error in errors" v-bind:key="error">{{ msg }}</li>
            </ul> -->
            <form autocomplete="off" @submit.prevent="resetPassword" method="post">
            
            
           <md-field>
                  <label for="email">E-mail</label>
                   <md-input   type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required ></md-input>
          </md-field>

           <md-field>
                  <label for="email">Code</label>
                  <md-input   id="email" class="form-control"  v-model="code" required></md-input>
          </md-field>


           <md-field>
                  <label for="email">Password</label>
                 <md-input type="password" id="password" class="form-control" placeholder="" v-model="password" required></md-input>
          </md-field>
           <md-field>
                  <label for="email">Confirm Password</label>
                 <md-input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation" required></md-input>
          </md-field>
              <md-button class="md-esc-accent" >Update
                   </md-button>

            </form>
      
  </div>
</template>
<script>

import axios from 'axios'

export default {
    data() {
      return {
        code: null,
        email: null,
        password: null,
        password_confirmation: null,
        has_error: false
      }
    },
    methods: {
        resetPassword() {
            axios.post('/api/updatePassword', {
                code: this.code,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(result => {
                // console.log(result.data);
                this.$router.push({name: 'Landing'})
            }, error => {
             // console.error(error);
            });
        }
    }
}
</script>