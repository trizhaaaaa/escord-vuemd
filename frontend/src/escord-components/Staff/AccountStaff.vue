<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-click-outside="closeModal">

          <div class="modal-header">
            <h3 class="title text-esc-accent">Update Account</h3>
          </div>

          <div class="modal-body text-center">
            <form @submit.prevent="UpdateStaff" novalidate class="md-layout md-gutter md-alignment-center-left">

                  <!-- INPUTS -->
                  <div class="md-layout-item md-layout md-gutter md-alignment-center-space-between">

                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                      <md-field
                      class="has-esc-accent" 
                      :class="getValidationClass('stdNum')">
                        <label for="student-number">Student Number</label> <!---this is not edited-->
                        <md-input readonly name="student-number" id="student-number"  autocomplete="given-name" v-model="getcurrentUser.student_number" :disabled="sending" />
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                      <md-field
                      class="has-esc-accent md-layout-item md-size-45" :class="getValidationClass('stdName')">
                        <label for="std-name">First Name </label>
                        <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.firstname" :disabled="sending" />
                      </md-field>

                      <md-field
                      class="has-esc-accent md-layout-item md-size-45" :class="getValidationClass('stdName')">
                        <label for="std-name">Last Name  </label>
                        <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.lastname" :disabled="sending" />
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                      <md-field
                      class="has-esc-accent md-layout-item md-size-45"  :class="getValidationClass('stdPassword')">
                        <label for="std-password">New Password</label>
                        <md-input name="std-password" id="std-password" autocomplete="family-name" v-model="staffAcc.stdPassword" :disabled="sending" />

                        <span class="md-error" v-if="!$v.staffAcc.stdPassword.required">Password is required.</span>
                        <span class="md-error" v-else-if="!$v.staffAcc.stdPassword.minlength">Password must be at least 8 characters.</span>
                      </md-field>

                      <md-field
                      class="has-esc-accent md-layout-item md-size-45"  :class="getValidationClass('stdConfirmPass')">
                        <label for="confirm-pass">Confirm Password</label>
                        <md-input name="confirm-pass" id="confirm-pass" autocomplete="family-name" v-model="staffAcc.stdConfirmPass" :disabled="sending" />

                        <span class="md-error" v-if="!$v.staffAcc.stdConfirmPass.required">Confirm password is required.</span>
                        <span class="md-error" v-else-if="!$v.staffAcc.stdConfirmPass.sameAsPassword">Password must match.</span>
                      </md-field>

                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                      <md-field
                      class="has-esc-accent" 
                      :class="getValidationClass('stdEmail')">
                        <label for="std-email">Email</label>
                        <md-input readonly type="email" name="std-email" id="std-email" autocomplete="email" v-model="getcurrentUser.email" :disabled="sending" />
                      </md-field>
                    </div>

                  </div>

                   <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button type="submit" class="__modal-buttons md-esc-accent md-round" :disabled="sending">Update Account</md-button>
                  </div>

                  </form>
          </div>

          
        </div>
      </div>
    </div>
  </transition>

  <!--<template>
<div>
 <form @submit.prevent="UpdateStaff">
        <md-card-content>
            <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdNum')">
                <label for="student-number">Student Number</label> 
                -this is not edited
                <md-input name="student-number" id="student-number"  autocomplete="given-name" v-model="getcurrentUser.student_number" :disabled="sending" />
           
               <span class="md-error" v-else-if="!$v.staffAcc.stdNum.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdName')">
                <label for="std-name">Firstname </label>
                <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.firstname" :disabled="sending" />
         
                        <span class="md-error" v-else-if="!$v.staffAcc.stdPassword.minlength">Invalid last name</span>
            </md-field>
            </div>

               <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdName')">
                <label for="std-name">Lastname  </label>
                <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.lastname" :disabled="sending" />
         
                       <span class="md-error" v-else-if="!$v.staffAcc.stdPassword.minlength">Invalid last name</span>
            - </md-field>
            </div>


            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdPassword')">
                <label for="std-password">New Password</label>
                <md-input name="std-password" id="std-password" autocomplete="family-name" v-model="staffAcc.stdPassword" :disabled="sending" />
                <span class="md-error" v-if="!$v.staffAcc.stdPassword.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.staffAcc.stdPassword.minlength">Invalid last name</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdConfirmPass')">
                <label for="confirm-pass">Confirm Password</label>
                <md-input name="confirm-pass" id="confirm-pass" autocomplete="family-name" v-model="staffAcc.stdConfirmPass" :disabled="sending" />
                <span class="md-error" v-if="!$v.staffAcc.stdConfirmPass.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.staffAcc.stdConfirmPass.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('stdEmail')">
            <label for="std-email">Email</label>
            <md-input type="email" name="std-email" id="std-email" autocomplete="email" v-model="getcurrentUser.email" :disabled="sending" />
        
          </md-field>
        </md-card-content>

                <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Update Student Account</md-button>
        </md-card-actions>
      
      

    <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar> 
        </form>
        </div>
</template>-->
</template>




<script>
 import { validationMixin } from 'vuelidate'
import axios from "axios"
import { mapActions, mapGetters} from "vuex";

  import {
    required,
    email,
    minLength,
    maxLength,
    sameAs
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
      mounted(){
   this.$store.dispatch('displayuser');

   
    },

    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
       staffAcc: {
        stdPassword:null,
        stdConfirmPass:null,
    
      },

      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        }
      },

       staffAcc: {
        stdPassword:{
          required,
               minLength: minLength(8)
        },
        stdConfirmPass:{
          required,
               sameAsPassword: sameAs("stdPassword")
        },
      }
    },
      computed:{
 ...mapGetters({getcurrentUser: 'getCurrentUser'}),
  
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
          console.log("okay");
        }
        else {
          console.log("no");
        }
      },

        UpdateStaff(){

           this.validateUser();
        
               axios.put('/api/updateAdmin/'+this.getcurrentUser.id, {
              password : this.staffAcc.stdPassword,
              confirmpass: this.staffAcc.stdConfirmPass,
              student_number : this.getcurrentUser.student_number,
              firstname : this.getcurrentUser.firstname,
              lastname : this.getcurrentUser.lastname,
              email: this.getcurrentUser.email,

               }).then((response)=>{
        

            console.log('update staff accounts' , response.data);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })
      },

       closeModal: function() {
      this.$emit("close");
      this.clearForm()
    }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

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
  margin-top: 4em !important;
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
</style>