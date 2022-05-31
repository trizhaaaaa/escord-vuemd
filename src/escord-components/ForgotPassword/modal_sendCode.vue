<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h3 class="title text-esc-accent">Forgot Password</h3>
          </div>

          <div class="modal-body text-center">
              <form @submit.prevent="requestResetPassword" novalidate>
<!-- form-control  -->
                <md-field 
                :class="getValidationClass('email')"
                class="md-layout has-esc-accent">
                  <label>Email</label>
                  <md-input  
                  :disabled="disableFirst" 
                  class="form-control"
                  type="email" 
                  id="email" 
                  placeholder="user@example.com" 
                  v-model="email"></md-input>

                  <span class="md-error" v-if="!$v.email.required">Email is required.</span>

                  <span class="md-error" v-else-if="!$v.email.email">Invalid email.</span>

                </md-field>
                
                <md-button 
                :disabled="disableFirst"
                type="submit"
                class="md-esc-accent md-round md-dense">
                  SEND CODE
                </md-button>
              </form>

              <forgot-pass v-if="createNewPass"/>

              <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                <md-button
                @click="closeModal" 
                class="_cancel md-esc-darkgrey md-dense md-round md-simple">
                  CANCEL
                </md-button>
              </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email  } from 'vuelidate/lib/validators'

import forgotPassModal from '../ForgotPassword/modal_forgotPassword.vue';


export default {
  name: "modal",
  mixins: [validationMixin], // for validation
  components: {
    "forgot-pass": forgotPassModal
  },
  data() {
      return {
        createNewPass: false,
        forgotPassModal: false,
        disableFirst: false,

        email: null,
        has_error: false,
      };
  },
  validations: {
    email: {required, email}
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    },
    forgotPassModalShow() {
      this.forgotPassModal = true;
    },

    forgotPassModalHide() {
      this.forgotPassModal = false;
    },
    getValidationClass (fieldName) {
      const field = this.$v[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },

    requestResetPassword() {
            
            this.$v.$touch()
            if (!this.$v.$invalid) {
              //disable the "send code to email" form above
              this.disableFirst = true 


          axios.post('/api/SendCode', {email: this.email}).then(response => {

                console.log(response.data.message)
               }).catch((errors)=>{
  
                   console.log(errors)
   
             });
              //show next step (setting new password) when there is no error
              this.createNewPass = true; 

              console.log("Code sent.")
            }
            else {
              console.log("Code not sent.")
            }
            
          

             
        }
  },
};
</script>

<style lang="scss" scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-container {
  margin-top: 0em !important;
  max-width: 20em !important;
}

h3, .h3 {
  font-size: 1.5em !important;
  line-height: 1em !important;
  margin-bottom: 0px !important;
}

.md-field {
    margin-bottom: 1em !important;
}

.md-error {
  position: absolute !important;
  top: 3.07em !important;
  left: 0 !important;
  line-height: 0.95em !important;
  text-align: justify;
  font-size: .777rem !important;
}

.md-input {
  max-width: 100%;
}

._cancel {
  font-weight: bold !important;
  font-size: .96em !important;
}
</style>
