<template>
    <div class="">


        <div class="modal-body text-center">

          <p class="md-body-2 title">-----  Create New Password -----</p>

            <form autocomplete="off" @submit.prevent="resetPassword" method="post">
            
            <md-field
            class="has-esc-accent"
            :class="getValidationClass('email_newpass')">
                <label for="email">E-mail</label>
                <md-input   
                type="email" 
                id="email_newpass" class="form-control" placeholder="user@example.com" v-model="email_newpass"></md-input>

                <span class="md-error" v-if="!$v.email_newpass.required">Email is required.</span>

                <span class="md-error" v-else-if="!$v.email_newpass.email">Invalid email.</span>
            </md-field>

            <md-field
            class="has-esc-accent"
            :class="getValidationClass('code')">
                    <label>Code</label>
                    <md-input   id="code" class="form-control"  v-model="code"></md-input>

                    <span class="md-error" v-if="!$v.code.required">Code is required.</span>
            </md-field>


            <md-field
            class="has-esc-accent"
            :class="getValidationClass('password')">
                    <label for="email">Password</label>
                    <md-input type="password" id="password" class="form-control" placeholder="" v-model="password"></md-input>

                    <span class="md-error" v-if="!$v.password.required">Password is required.</span>

                    <span class="md-error" v-else-if="!$v.password.minLength">Password must be at least 8 characters.</span>
            </md-field>
            <md-field
            class="has-esc-accent"
            :class="getValidationClass('password_confirmation')">
                    <label for="email">Confirm Password</label>
                    <md-input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation"></md-input>

                    <span class="md-error" v-if="!$v.password_confirmation.required">Confirm password is required.</span>

                    <span class="md-error" v-else-if="!$v.password_confirmation.sameAsPassword">Password must match.</span>
            </md-field>
            

            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                <md-button type="submit" class="__modal-buttons md-esc-accent md-round md-dense" :disabled="sending">Update Account</md-button>
            </div>
            
        </form>
        
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email, minLength, sameAs  } from 'vuelidate/lib/validators'

export default {
  name: "modal",
  mixins: [validationMixin], // for validation
  data() {
      return {
        code: null,
        email_newpass: null,
        password: null,
        password_confirmation: null,
        has_error: false,
        sending: false
      }
    },
    validations: {
      email_newpass: {required, email},
      code: {required},
      password: {required, minLength: minLength(8)},
      password_confirmation: {required, sameAsPassword: sameAs('password')}
  },
  methods: {
    closeModal: function() {
      this.$emit("close");
    },
    getValidationClass (fieldName) {
      const field = this.$v[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
    resetPassword() {

            this.$v.$touch()
            if (!this.$v.$invalid) {
              this.sending = true; 
         axios.post('/api/updatePassword', {
                code: this.code,
                email: this.email_newpass,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(result => {
                // console.log(result.data);
                this.$router.push({name: 'Landing'})
            }, error => {
                console.error(error);
            });


            }
            else {
              console.log("Password not created.")
            }

         
        }
  },
};
</script>

<style lang="scss" scoped>

.modal-body {
  padding-top: 0.5em !important;
  padding-bottom: 0 !important;
}

.md-input {
  width: 0.05rem;
  max-width: 100%;
}

.md-error {
  position: absolute !important;
  top: 3.07em !important;
  left: 0 !important;
  line-height: 0.95em !important;
  text-align: justify;
  font-size: .777rem !important;
}

h3, .h3 {
  font-size: 1.5em !important;
  line-height: 1em !important;
  margin-bottom: 0px !important;
}
.__modal-buttons {
  margin-top: 1em;
}

p {
  margin: 0.75em 0 0 0 !important;
  line-height: 2.5em !important;
  color: #6d6868 !important;
}
</style>
