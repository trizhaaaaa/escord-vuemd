<template>


<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-click-outside="closeModal">

          <div class="modal-header">
            <h3 class="title text-esc-accent">Update Account</h3>
          </div>

          <div class="modal-body text-center">
             <form @submit.prevent="saveUser" novalidate class="md-layout md-gutter md-alignment-center-left">

               <!-- INPUTS -->
                  <div class="md-layout-item md-layout md-gutter md-alignment-center-space-between">

                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                       <md-field
                      class="has-esc-accent md-layout-item md-size-40" 
                      :class="getValidationClass('firstname')">
                          <label for="std-name">First Name </label>
                          <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.firstname" :disabled="sending" />
                      </md-field>

                      <md-field
                      class="has-esc-accent md-layout-item md-size-10" 
                      :class="getValidationClass('middleinitial')">
                          <label for="std-name">MI </label>
                          <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.middleinitial" :disabled="sending" />
                      </md-field>

                      <md-field
                      class="has-esc-accent md-layout-item md-size-40" 
                      :class="getValidationClass('lastname')">
                          <label for="std-name">Last Name  </label>
                          <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.lastname" :disabled="sending" />
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                      <md-field
                      class="has-esc-accent" 
                      :class="getValidationClass('faculty_rank')">
                        <label for="student-number">Faculty Rank</label> 
                        <md-input name="student-number" id="student-number"  autocomplete="given-name" v-model="getcurrentUser.faculty_rank" :disabled="sending" />
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                       <md-field
                       class="has-esc-accent md-layout-item md-size-45" 
                       :class="getValidationClass('stdPassword')">
                        <label for="std-password">New Password</label>
                        <md-input name="std-password" id="std-password" autocomplete="family-name" v-model="profAcc.stdPassword" :disabled="sending" />

                        <span class="md-error" v-if="!$v.profAcc.stdPassword.required">Password is required.</span>
                        <span class="md-error" v-if="!$v.profAcc.stdPassword.minLength">Password must be at least 8 characters.</span>
                      </md-field>

                      <md-field
                      class="has-esc-accent md-layout-item md-size-45" 
                      :class="getValidationClass('stdConfirmPass')">
                        <label for="confirm-pass">Confirm Password</label>
                        <md-input name="confirm-pass" id="confirm-pass" autocomplete="family-name" v-model="profAcc.stdConfirmPass" :disabled="sending" />

                        <span class="md-error" v-if="!$v.profAcc.stdConfirmPass.required">Confirm password is required.</span>
                        <span class="md-error" v-if="!$v.profAcc.stdConfirmPass.sameAsPassword">Password must match.</span>
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                      <md-field 
                      class="has-esc-accent"
                      :class="getValidationClass('email')">
                        <label for="std-email">Email</label>
                        <md-input type="email" name="std-email" id="std-email" autocomplete="email" v-model="getcurrentUser.email" :disabled="sending" />
                      </md-field>
                    </div>

                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button type="submit" class="__modal-buttons md-esc-accent md-round" :disabled="sending">Update Account</md-button>
                  </div>
                    
                  </div>
             </form>
          </div>

          
        </div>
      </div>
     <md-snackbar :md-active.sync="userSaved">The account {{ lastUser }} was saved with success!</md-snackbar> 
    </div>
  </transition>

  
<!--<div>
 <form   @submit.prevent="UpdateProf">
        <md-card-content>
            <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdNum')">
                <label for="student-number">Faculty Rank</label> -this is not edited
                <md-input name="student-number" id="student-number"  autocomplete="given-name" v-model="getcurrentUser.faculty_rank" :disabled="sending" />
           
             -    <span class="md-error" v-else-if="!$v.profAcc.stdNum.minlength">Invalid first name</span>

              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstname')">
                <label for="std-name">Firstname </label>
                <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.firstname" :disabled="sending" />
         

               <span class="md-error" v-if="!$v.getcurrentUser.firstname.required">Invalid first name</span>

             </md-field>
            </div>

              <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('middleinitial')">
                <label for="std-name">Middle Initial </label>
                <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.middleinitial" :disabled="sending" />

                        <span class="md-error" v-if="!$v.getcurrentUser.middleinitial.required">Invalid middleinitial</span>

           </md-field>
           
            </div>

               <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastname')">
                <label for="std-name">Lastname  </label>
                <md-input name="std-name" id="std-name"  autocomplete="family-name" v-model="getcurrentUser.lastname" :disabled="sending" />
         

                    <span class="md-error" v-if="!$v.getcurrentUser.lastname.required">Invalid lastname</span>
             </md-field>

            </div>


            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdPassword')">
                <label for="std-password">New Password</label>
                <md-input name="std-password" id="std-password" autocomplete="family-name" v-model="profAcc.stdPassword" :disabled="sending" />
                <span class="md-error" v-if="!$v.profAcc.stdPassword.required">This field is required</span>
                <span class="md-error" v-else-if="!$v.profAcc.stdPassword.minlength">This password is invalid</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stdConfirmPass')">
                <label for="confirm-pass">Confirm Password</label>
                <md-input name="confirm-pass" id="confirm-pass" autocomplete="family-name" v-model="profAcc.stdConfirmPass" :disabled="sending" />
                <span class="md-error" v-if="!$v.profAcc.stdConfirmPass.required">The field is required</span>
                <span class="md-error" v-else-if="!$v.profAcc.stdConfirmPass.minlength">Check length and Same as Password</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="std-email">Email</label>
            <md-input type="email" name="std-email" id="std-email" autocomplete="email" v-model="getcurrentUser.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.getcurrentUser.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.getcurrentUser.email.email ">Invalid email</span>

          </md-field>
        </md-card-content>

                <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Update Student Account</md-button>
        </md-card-actions>
      
      


     <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar> 

        </form>
        </div>-->
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
   //this.$store.dispatch('displayuser');

   
    },

    data: () => ({
    

      profAcc: {
     
        stdPassword:null,
        stdConfirmPass:null,
    
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
  

      getcurrentUser:{
    faculty_rank:{
          required,
      },
      firstname:{
          required,
      },
      middleinitial:{
          required,
        
      },

       lastname:{
          required,
        
      },
       email:{
          required,
        email
      },
      },

        profAcc: {
        stdPassword:{
          required,
               minLength: minLength(8)
        },
        stdConfirmPass:{
          required,

               minLength: minLength(8),
                sameAs: sameAs(function () { return this.profAcc.stdPassword })

        },
      }
    },
      computed:{
 ...mapGetters({getcurrentUser: 'getCurrentUser'}),
  
    },

    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.getcurrentUser[fieldName]
        const field2 = this.$v.profAcc[fieldName]


        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
         if (field2) {
          return {
            'md-invalid': field2.$invalid && field2.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
         this.profAcc.stdPassword = null
        this.profAcc.stdConfirmPass = null
      },
      saveUser () {
        this.sending = true
        this.UpdateProf(); //FUNCTION OF UPDATE PROF
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.getcurrentUser.firstname} ${this.getcurrentUser.lastname} ${this.getcurrentUser.email}`
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
      UpdateProf(){

       // this.validateUser();

              axios.put('/api/updateProf/'+this.getcurrentUser.id, {
              password : this.profAcc.stdPassword,
              confirmpass: this.profAcc.stdConfirmPass,
              faculty_rank : this.getcurrentUser.faculty_rank,
              firstname : this.getcurrentUser.firstname,
              lastname : this.getcurrentUser.lastname,
              middleinitial: this.getcurrentUser.middleinitial,
              email: this.getcurrentUser.email,

               }).then((response)=>{
        

            console.log('update prof accounts' , response.data);

            
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