<template>
 <div>
 

       <md-field>
            <label>FORGOT PASSWORD</label>
            <md-input   type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required ></md-input>
            <span class="md-helper-text">search your data</span>
            <md-button class="md-esc-accent" @click="requestResetPassword">
              SEND CODE
            </md-button>
          </md-field>
   
  </div>
</template>
<script>

import axios from 'axios'
export default {
    data() {
      return {
        email: null,
        has_error: false
      }
    },
    methods: {
        requestResetPassword() {
            axios.post('/api/SendCode', {email: this.email}).then(response => {
            

                console.log(response)
               }).catch((errors)=>{
  
                   console.log(errors)
   
             });
        }
    }
}
</script>