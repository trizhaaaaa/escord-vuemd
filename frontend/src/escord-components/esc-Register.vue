<template>
  <div class="wrapper">
    <div class="section header-filter">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-80 md-xsmall-size-90 md-medium-size-70 mx-auto"
          >
            
            <md-card>
                <md-card-content>
                    <h3 class="title text-center text-esc-darkgrey">Register</h3>

                    <form @submit.prevent="registerValidate" novalidate>

                        <div class="__name md-layout md-gutter md-alignment-center-space-between">
                        
                            <div class="md-layout-item md-size-40">
                                <md-field
                                class="has-esc-accent"
                                :class="getValidationClass('profFN')">
                                    <label> First Name </label>
                                    <md-input
                                    :disabled="sending" 
                                    v-model="registerData.profFN"></md-input>

                                    <span class="md-error" v-if="!$v.registerData.profFN.required">First name is required.</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-size-20">
                                <md-field
                                class="has-esc-accent">
                                    <label>MI</label>
                                    <md-input
                                    v-model="registerData.profMI"></md-input>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-size-40">
                                <md-field
                                class="has-esc-accent"
                                :class="getValidationClass('profLN')">
                                    <label>Last Name</label>
                                    <md-input
                                    :disabled="sending" 
                                    v-model="registerData.profLN"></md-input>

                                    <span class="md-error" v-if="!$v.registerData.profLN.required">Last name is required.</span>
                                </md-field>
                            </div>

                        </div>

                        <md-field 
                        class="has-esc-accent"
                        :class="getValidationClass('profRank')">
                            
                            <label> Rank/ Position </label>
                            <md-input
                            :disabled="sending" 
                            v-model="registerData.profRank"></md-input>

                            <span class="md-error" v-if="!$v.registerData.profRank.required">Rank/ position is required.</span>
                        </md-field>


                         <md-field 
                        class="has-esc-accent"
                        :class="getValidationClass('profEmail')">
                            
                            <label> Email </label>
                            <md-input
                            :disabled="sending" 
                            v-model="registerData.profEmail"></md-input>

                            <span class="md-error" v-if="!$v.registerData.profEmail.required">Email is required.</span>

                            <span class="md-error" v-else-if="!$v.registerData.profEmail.email">Invalid email.</span>
                        </md-field>


                        <md-field 
                        class="has-esc-accent"
                        :class="getValidationClass('profPassword')">
                            
                            <label> Password</label>
                            <md-input
                            :disabled="sending" 
                            v-model="registerData.profPassword"
                            type="password"></md-input>

                            <span class="md-error" v-if="!$v.registerData.profPassword.required">Password is required.</span>

                            <span class="md-error" v-else-if="!$v.registerData.profPassword.minLength">Password must be at least 8 characters long.</span>
                        </md-field>

                        <md-field 
                        class="has-esc-accent"
                        :class="getValidationClass('profPassword')">
                            
                            <label> Confirm Password </label>
                            <md-input
                            :disabled="sending" 
                            v-model="registerData.profPasswordConfirm"
                            type="password"></md-input>

                            <span class="md-error" v-if="!$v.registerData.profPasswordConfirm.required">Password confirmation is required.</span>

                            <span class="md-error" v-else-if="!$v.registerData.profPasswordConfirm.sameAsPassword">Password must match.</span>
                        </md-field>
                       

                        <div class="__register-btn text-center md-layout md-gutter md-alignment-center-center">
                          <p>Already have an account?</p>
                          <p class="__link">
                            <router-link class="md-body-2 text-esc-accent" to="/login">
                              Log in here!
                            </router-link>
                          </p>
                        </div>

                        <md-divider></md-divider>

                        <div class="__card-buttons md-layout md-gutter md-alignment-center-space-between">

                            <md-button
                            class="md-layout-item md-size-25 md-dense md-round md-simple md-info"
                            @click="clearInputFields"
                            :disabled="sending">
                                Clear
                            </md-button>

                            <md-button
                            class="md-layout-item md-size-50 md-dense md-round md-success"
                            type="submit"
                            :disabled="sending">
                                Register
                            </md-button>

                        </div>
                    </form>
                </md-card-content>
            </md-card>

          </div>
        </div>
      </div>
    </div>
    <vue-headful title="Register | ESCORD"/>
  </div>
</template>

<script>




   

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import { mapActions} from "vuex";

export default {
  bodyClass: "escord-login-page",
  data() {
    return {
        /* form data */
      registerData: {
          profFN: null,
          profMI: null,
          profLN: null,
          profRank: null,
          profEmail: null,
          profPassword: null,
          profPasswordConfirm: null,
      },
      sending: false,
    };
  },
  mixins: [validationMixin], // for validation

   /* for validation */
  validations: {
      
    registerData: {
        profFN: {required},
        profLN: {required},
        profRank: {required},
        profEmail: {required, email},
        profPassword: {required, 
                    minLength: minLength(8)},
        profPasswordConfirm: {required, 
                            sameAsPassword: sameAs("profPassword")},
    }
    
  },

 methods: {
    /* validation methods */
     ...mapActions({createProfessor: 'createProfessor'}),
     
    getValidationClass (fieldName) {
      const field = this.$v.registerData[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      registerValidate () {
        this.$v.$touch()

        if (!this.$v.$invalid) {

          this.createProfessor(this.registerData);
          console.log("Logged in successfully.")
          this.clearInputFields();
        }
        else {
          console.log("Failed to log in.");
        }
    },
    clearInputFields() {
      this.$v.$reset();
      this.registerData.profFN = null;
      this.registerData.profMI = null;
      this.registerData.profLN = null;
      this.registerData.profRank = null;
      this.registerData.profEmail = null;
      this.registerData.profPassword = null;
      this.registerData.profPasswordConfirm = null;
    }
  }
};
</script>

<style lang="scss" scoped>

h3.title {
    margin-bottom: 2rem !important;
}

.__card-buttons {
    margin-top: 0.75rem !important;
}

.__register-btn {
    margin-top: 1.5rem !important;
}

.md-field {
    margin-bottom: 1.25em !important;
}

.md-error {
  position: absolute !important;
  top: 3.07em !important;
  left: 0.25rem !important;
  line-height: 0.95em !important;
  text-align: justify;
  font-size: .777rem !important;
}

.__link :hover {
   color: #e65100 !important;
}

.__link {
  margin-left: 0.5rem !important;
}

.md-input {
  width: 100% !important;
}
</style>
