<template>

 <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-click-outside="closeModal">

          <div class="modal-header">
            <h3 class="title text-esc-accent">Update Account</h3>
          </div>

          <div class="modal-body text-center">
            <form @submit.prevent="UpdateStudent" novalidate class="md-layout md-gutter md-alignment-center-left">

                  <!-- INPUTS -->
                  <div class="md-layout-item md-layout md-gutter md-alignment-center-space-between">

                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                      <md-field
                      class="has-esc-accent">
                        <label for="student-number">Student Number</label> 
                        <!-- -this is not edited -->
                        <md-input readonly 
                        id="student-number" 
                        v-model="getCurrentUser.student_number" 
                        :disabled="sending" />
                      </md-field>
                    </div>

                     <!-- NAME -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                      <md-field
                      class="has-esc-accent md-layout-item md-size-40" 
                      :class="getValidationClass('firstname')">
                        <label>First Name</label>
                        <md-input 
                        id="first-name" 
                        v-model="getScholRecord.firstname" 
                        :disabled="sending" />

                        <span class="md-error" v-if="!$v.getScholRecord.firstname.required">First name is required.</span>

                        <span class="md-error" v-else-if="!$v.getScholRecord.firstname.minLength">Must be at least 3 characters.</span>
                     </md-field>

                     <md-field
                      class="has-esc-accent md-layout-item md-size-10" 
                      :class="getValidationClass('middlename')">
                        <label>MI</label>
                        <md-input 
                        id="middle-initial" 
                        v-model="getScholRecord.middlename" 
                        :disabled="sending" />

                        <span class="md-error" v-if="!$v.getScholRecord.middlename.maxLength">Invalid.</span>
                     </md-field>

                     <md-field
                      class="has-esc-accent md-layout-item md-size-40" 
                      :class="getValidationClass('surname')">
                        <label>Last Name</label>
                        <md-input 
                        id="last-name" 
                        v-model="getScholRecord.surname" 
                        :disabled="sending" />

                        <span class="md-error" v-if="!$v.getScholRecord.surname.required">Last name is required.</span>

                        <span class="md-error" v-else-if="!$v.getScholRecord.surname.minLength">Must be at least 3 characters.</span>
                     </md-field>
                    </div>

                    <!-- EMAIL -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter">

                      <md-field
                      class="has-esc-accent" 
                      :class="getValidationClass('email')">
                        <label>Email</label>
                        <md-input 
                        id="std-email" 
                        v-model="getCurrentUser.email" 
                        :disabled="sending" />
                        
                        <span class="md-error" v-if="!$v.getCurrentUser.email.required">The email is required.</span>

                        <span class="md-error" v-else-if="!$v.getCurrentUser.email.email">Invalid email.</span>
                      </md-field>
                    </div>

                    <!-- PASSWORD -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter">

                      <md-field 
                      class="has-esc-accent"
                      :class="getValidationClass('password')">
                        <label>New Password</label>
                        <md-input
                        id="update-password" 
                        type="password"
                        v-model="student_createNewPass.password" :disabled="sending" />

                        <span class="md-error" v-if="!$v.student_createNewPass.password.required">Password is required.</span>
                        
                        <span class="md-error" v-else-if="!$v.student_createNewPass.password.minLength">Must be at least 8 characters.</span>
                      </md-field>

                    </div>

                     <!-- CONFIRM PASSWORD -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter">
                   
                      <md-field 
                      class="has-esc-accent"
                      :class="getValidationClass('confirmpass')">
                        <label>Confirm New Password</label>
                        <md-input
                        id="update-confirmpass" 
                        type="password"
                        v-model="student_createNewPass.confirmpass" :disabled="sending" />

                        <span class="md-error" v-if="!$v.student_createNewPass.confirmpass.required">Confirm password is required.</span>
                        
                        <span class="md-error" v-else-if="!$v.student_createNewPass.confirmpass.sameAsPassword">Password must match.</span>
                      </md-field>
                    </div>

                     

                  </div>

                  <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button type="submit" class="__modal-buttons md-esc-accent md-round" 
                    :disabled="sending">Update</md-button>
                  </div>
              
              <md-snackbar md-position="left" :md-active.sync="userUpdated">The account has been updated successfully!</md-snackbar>

              <md-snackbar md-position="left" :md-active.sync="userNotUpdated">The account can not be updated.</md-snackbar> 
            </form>
          </div>

        </div>
      </div>
    </div>
  </transition>


</template>

<script>

import { validationMixin } from 'vuelidate'
import { mapActions, mapGetters} from "vuex";
import axios from "axios"
import {required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],

    mounted(){
   this.$store.dispatch('displayuser');
            this.$store.dispatch('getScholasticRecord',this.$route.params.student_number);

    },

    data: () => ({
      student_createNewPass: {
        password:null,
        confirmpass:null,

     
      },
      userUpdated: false,
      userNotUpdated: false,
      sending: false,
      lastUser: null,

    }),
    validations: {
      getCurrentUser:{
       student_number:{
              required
         },
        
          email:{
              required,
              email
          },
          },
          getScholRecord : {
        firstname:{
              required,
              minLength: minLength(3)
          },
          middlename: {
            maxLength: maxLength(3)
          },
          surname: {
            required,
            minLength: minLength(3)
          },

          },
          student_createNewPass: {
            password:{
              required,
              minLength: minLength(8)
            },
            confirmpass:{
              required,
              //minLength: minLength(8),
              sameAsPassword: sameAs('password')
              //sameAs: sameAs(function () { return this.student_createNewPass.password })
        },
        
      }
    },
    computed:{
 ...mapGetters({getCurrentUser: 'getCurrentUser'}),
  ...mapGetters({getScholRecord: 'getScholRecord'}),

  
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.getCurrentUser[fieldName] || this.$v.student_createNewPass[fieldName] || this.$v.getScholRecord[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.student_createNewPass.password = null
        this.student_createNewPass.confirmpass = null
      
      },

      saveUser () {
        this.sending = true

        //this.UpdateStudent();

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.getCurrentUser.firstName} ${this.getCurrentUser._MI} ${this.getCurrentUser.lastName}`
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      confirmPassChange () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
          this.userUpdated = true;
          console.log("Student account updated.")
        }
        else {
          this.userNotUpdated = true;
          console.log("Student account NOT updated.")
        }
      },

        UpdateStudent(){
          
         //   console.log(this.student_createNewPass);
              
//     this.updateAccStud({route:this.getCurrentUser.id}, formDax)

        this.confirmPassChange();
    
        axios.put('/api/updateStudent/'+this.getCurrentUser.id, {
             password : this.student_createNewPass.password,
             confirmpass: this.student_createNewPass.confirmpass,
             student_number : this.getCurrentUser.student_number,
             firstName : this.getScholRecord.firstname,
             surname: this.getScholRecord.surname,
             middlename: this.getScholRecord.middlename,
             email: this.getCurrentUser.email,

        }).then((response)=>{
            console.log('update student accounts' , response.data);
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })
        },

      closeModal: function() {
      this.$emit("close");
    }
    
    },
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
  max-width: 25em !important;
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
  text-align: left;
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