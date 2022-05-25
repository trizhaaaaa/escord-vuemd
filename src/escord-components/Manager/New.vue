<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" v-click-outside="closeModal">
          <div class="modal-header">
           <H3 class="title text-esc-accent">Add new user</H3>
          </div>

          <div class="modal-body text-center">
              <form novalidate class="md-layout mx-auto" @submit.prevent="validateUser">
          
    
            <!--USER NO-->
            <div class="input md-layout-item md-size-100 md-layout md-gutter">
              <md-field 
              class ="has-esc-accent" :class="getValidationClass('userNo')">
                <label for="middle-name">User No: </label>
               <md-input name="user-no" id="user-no" autocomplete="user-no" v-model="form.userNo" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.userNo.required">The user no is required</span>
                <span class="md-error" v-else-if="!$v.form.userNo.minlength">Invalid user no</span>
              </md-field>
            </div>
             <!--LAST NAME-->
             <div class="input md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
              <md-field  class ="has-esc-accent md-layout-item md-size-30" :class="getValidationClass('lastName')">
                <label for="last-name">Last Name: </label>
                <md-input name="last-name" id="last-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
             <!--FIRST NAME-->
              <md-field  class ="has-esc-accent md-layout-item md-size-30"  :class="getValidationClass('firstName')">
                <label for="first-name">First Name: </label>
                <md-input name="first-name" id="first-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
             <!--MIDDLE NAME-->
              <md-field  class ="has-esc-accent md-layout-item md-size-30"  :class="getValidationClass('middleName')">
                <label for="middle-name">Middle Name: </label>
                <md-input name="middle-name" id="middle-name" v-model="form.middleName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.middleName.required">The middle name is required</span>
                <span class="md-error" v-else-if="!$v.form.middleName.minlength">Invalid middle name</span>
              </md-field>
              </div>
             <!--EMAIL ADDRESS-->
            <div class="input md-layout-item md-small-size-100">
              <md-field  class ="has-esc-accent"  :class="getValidationClass('email')">
                <label for="email">Email Address: </label>
                 <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The middle name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid middle name</span>
              </md-field>
            </div>
            
             <!--DEFAULT PASSWORD-->
            <div class="md-layout-item md-size-40">
             <!-- <md-field :class="getValidationClass('DefaultPassword')">-->
                <p class="Default">Default Password: </p>
                
            </div>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <div class="buttons md-layout-item md-size-100 md-layout md-gutter md-alignment-center-right">
            <md-button type="submit" class="md-primary" :disabled="sending">CANCEL</md-button>
          <md-button type="submit" class="md-primary" :disabled="sending">ADD</md-button>
        </div>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
          </div>

            
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
export default {
  name: "modal",
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        UserNo: null,
        lastName: null,
        firstName: null,
        MiddleName: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
          userNo: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        firstName: {
          required,
          minLength: minLength(3)
        },
        middleName: {
          required,
          maxLength: maxLength(3)
        },
        email: {
          required,
          email
        }
      }
    },
  methods: {
    closeModal: function() {
      this.$emit("close");
    },
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
        this.form.userNo = null
        this.form.lastName = null
        this.form.firstName = null
        this.form.middleName = null
        this.form.email = null
        this.form.DefaultPassword= null

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
      }
    },
};
</script>

<style lang="scss">
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
.buttons
{
margin-top: 1.5em !important;
}
.Default
{
font-size: 90% !important;
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
.input {
  margin-bottom: 1em !important;
}

</style>
