<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-35 md-small-size-65 md-xsmall-size-70 md-medium-size-40 mx-auto"
          >
            
            <md-card>
                <md-card-content>
                    <h3 class="title text-center text-esc-darkgrey">Login</h3>

                    <form @submit.prevent="loginValidate" novalidate>

                      <div class="md-layout md-gutter md-alignment-center-center">
                        <md-radio
                        :value="true"
                        v-model="showStudNumInput"
                        @change="clearUnusedInput">
                        Use Student Number
                        </md-radio>

                        <md-radio
                        :value="false"
                        v-model="showStudNumInput"
                        @change="clearUnusedInput">
                        Use Email
                        </md-radio>
                      </div>

                      <span v-if="showStudNumInput">
                        <md-field 
                        class="md-form-group has-esc-accent"
                        md-clearable
                        :class="getValidationClass('userStudNum')">
                            <md-icon>
                                sentiment_satisfied_alt
                            </md-icon>
                            <label>Student Number</label>
                            <md-input
                            :disabled="sending" 
                            v-model="loginData.userStudNum"></md-input>

                            <span class="md-error" v-if="!$v.loginData.userStudNum.required">Student number is required.</span>
                        </md-field>
                      </span>

                      <span v-else>
                        <md-field 
                        class="md-form-group has-esc-accent"
                        md-clearable
                        :class="getValidationClass('userEmail')">
                            <md-icon>
                                alternate_email
                            </md-icon>
                            <label>Email Address</label>
                            <md-input
                            :disabled="sending" 
                            v-model="loginData.userEmail"
                            type="email"></md-input>

                            <span class="md-error" v-if="!$v.loginData.userEmail.required">Email is required.</span>

                            <span class="md-error" v-else-if="!$v.loginData.userEmail.email">Invalid email.</span>
                        </md-field>
                      </span>

                        <md-field 
                        class="md-form-group has-esc-accent"
                        :class="getValidationClass('userPassword')">
                            <md-icon>
                                lock_outline
                            </md-icon>
                            <label>Password</label>
                            <md-input
                            :disabled="sending" 
                            v-model="loginData.userPassword"
                            type="password"></md-input>

                            <span class="md-error" v-if="!$v.loginData.userPassword.required">Password is required.</span>
                        </md-field>
                       
                        <md-checkbox
                        v-model="loginData.rememberPass">
                        Remember my password
                        </md-checkbox>

                        <div class="__card-buttons md-layout md-gutter md-alignment-center-space-between">
                            <md-button
                            class="md-layout-item md-size-45 md-simple md-dense md-round md-info">
                                Reset Password
                            </md-button>

                            <md-button
                            class="md-layout-item md-size-45 md-dense md-round md-esc-accent"
                            type="submit"
                            :disabled="sending">
                                Login
                            </md-button>

                        </div>
                    </form>
                    <!-- <p>Stud Num: {{loginData.userStudNum}}</p>
                    <p>Email: {{loginData.userEmail}}</p>
                    <p>Password: {{loginData.userPassword}}</p> -->
                </md-card-content>
            </md-card>

          </div>
        </div>
      </div>
    </div>
    <vue-headful title="Login | ESCORD"/>
  </div>
</template>

<script>

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  bodyClass: "escord-login-page",
  data() {
    return {
        /* form data */
      loginData: {
          userStudNum: null,
          userEmail: null,
          userPassword: null,
          rememberPass: false
      },
      sending: false,
      showStudNumInput: true,
    };
  },
  mixins: [validationMixin], // for validation

   /* for validation */
  validations() {
      if(this.showStudNumInput) {
        return {
          loginData: {
            userStudNum: {required},
            userPassword: {required}
          }
        }
      }

      else {
        return {
          loginData: {
            userEmail: {required, email},
            userPassword: {required}
          }
        }
      }
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods: {
    /* validation methods */
    getValidationClass (fieldName) {
      const field = this.$v.loginData[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      loginValidate () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          console.log("Logged in successfully.")
        }
        else {
          console.log("Failed to log in.");
        }
    },
    clearUnusedInput() {
      this.$v.$reset();
      if(this.showStudNumInput) {
        this.loginData.userEmail = null;
        this.loginData.userPassword = null;
        console.log(this.showStudNumInput)
      }
      else {
        this.loginData.userStudNum = null;
        this.loginData.userPassword = null;
        console.log(this.showStudNumInput)
      }
    }
  }
};
</script>

<style lang="scss" scoped>

h3.title {
    margin-bottom: 2rem !important;
}

.__card-buttons {
    margin-top: 1.5rem !important;
}

.md-field {
    margin-bottom: 1em !important;
}

.md-error {
  position: absolute !important;
  top: 3.07em !important;
  left: 2.25rem !important;
  line-height: 0.95em !important;
  text-align: justify;
  font-size: .777rem !important;
}

.md-icon {
    color: #90a4ae !important;
}
</style>
