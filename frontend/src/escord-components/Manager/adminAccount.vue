<template>
<div>
 <form @submit.prevent="UpdateAdmin">
          <md-card-content>
          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">Name</label> <!---this is not edited-->
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="getcurrentUser.name" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">New Password</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.password" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Confirm New Password</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.confirmpass" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>
      

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="getcurrentUser.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </md-card-content>

                <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Update Manager</md-button>
        </md-card-actions>
      

   <!--    <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>-->
        </form> 
        </div>
</template>


<script>
 import { validationMixin } from 'vuelidate'
import { mapActions, mapGetters} from "vuex";
import axios from 'axios'

  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],

    mounted() {
         this.$store.dispatch('displayuser');
    },
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        password:null,
        confirmpass:null,
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
        }
      },

       UpdateAdmin(){

              axios.put('/api/updateManager/'+this.getcurrentUser.id, {
              password : this.form.password,
              confirmpass: this.form.confirmpass,
              name : this.getcurrentUser.name,
              email: this.getcurrentUser.email,

               }).then((response)=>{
        

            console.log('update Admin Account' , response.data);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })
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
</style>