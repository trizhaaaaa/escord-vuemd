<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div v-if="showlogin === false"
            class="md-layout-item mx-auto _loginWrap"
          >
          <div class="mx-auto">
            
            <md-card>
                <md-card-content>

                    <h3 class="title text-center text-esc-darkgrey">Login</h3>

 <p class="text-danger" v-text="geterror"></p>
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

                        <div class="__register-btn text-center md-layout md-gutter md-alignment-center-center">
                          <p>Dont have an account?</p>
                          <p class="__link">
                            <router-link class="md-body-2 text-esc-accent" to="/register">
                              Register here!
                            </router-link>
                          </p>
                        </div>

                        <md-divider></md-divider>

                        <div class="__card-buttons md-layout md-gutter md-alignment-center-space-between">
                            <md-button
                            @click="sendResetPassCodeShow"
                            class="md-layout-item md-size-50 md-simple md-dense md-round md-danger">
                                Forgot Password
                            </md-button>

                            <md-button
                            class="md-layout-item md-size-40 md-dense md-round md-esc-accent md-wd"
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
    <send-reset-code v-if="sendResetPassCode" @close="sendResetPassCodeHide"/>
    <vue-headful title="Login | ESCORD"/>
  </div>
  </div>
</template>

<script>
import sendResetPassCode from './ForgotPassword/modal_sendCode.vue';

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email  } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from "vuex";



export default {
  bodyClass: "escord-login-page",
  mounted(){
    this.auth()
  },

  components: {
    "send-reset-code": sendResetPassCode
  },
  data() {
    return {
         showlogin:false,
      sendResetPassCode: false,
        /* form data */
      loginData: {
          userStudNum: null,
          userEmail: null,
          userPassword: null,
          rememberPass: false,
          device_name: "browser",
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
      ...mapGetters({ geterror: "geterror" }),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods: {

    sendResetPassCodeShow() {
      this.sendResetPassCode = true;
    },

    sendResetPassCodeHide() {
      this.sendResetPassCode = false;
    },


    /* validation methods */
       ...mapActions({ loginUser: "loginUser" }),
       ...mapActions({ AnotherUser: "AnotherUser" }),

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

     

        if (!this.$v.$invalid ) {


            if(!this.loginData.userStudNum){
      this.loginUser(this.loginData);

   
           }else{
        
     this.AnotherUser(this.loginData);
           }
     
        }
        else {
          console.log("Failed to log in.");
        }
    },
    clearUnusedInput() {
      this.$v.$reset();
      if(this.showStudNumInput) {
       // this.geterror = null;
   
        this.loginData.userEmail = null;
        this.loginData.userPassword = null;
        console.log(this.showStudNumInput)
      }
      else {
        this.loginData.userStudNum = null;
        this.loginData.userPassword = null;
        console.log(this.showStudNumInput)
      }
    },
        auth(){

      var auth = this.$store.getters.isAuthenticated
          if(auth === true){

              this.showlogin = true;
          }
        }
  }
};
</script>

<style lang="scss" scoped>

h3.title {
    font-size: 1.85em !important;
    line-height: 1em !important;
    margin: .5rem 0 !important;
}

.__card-buttons, .__register-btn {
    margin-top: 0.75rem !important;
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

.__link :hover {
   color: #e65100 !important;
}

.__link {
  margin-left: 0.5rem !important;
}

._loginWrap {
  max-width: 25em !important;
}
</style>
