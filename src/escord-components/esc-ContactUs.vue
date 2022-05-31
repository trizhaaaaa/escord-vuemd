<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-35 md-small-size-90 md-xsmall-size-90 md-medium-size-66 mx-auto"
          >
            
            <md-card>
                <md-card-header>
                    <h3 class="title">Leave us a message!</h3>
                <!--    <p>  {{successnotif}}</p> -->
                    <p class="description">For suggestions or inquiries, please fill out the required fields below.</p>
                </md-card-header>
                <md-card-content>
                    <form @submit.prevent="msgValidate" novalidate>

                        <md-field
                        class="md-form-group has-esc-accent">
                            <md-icon>face</md-icon>
                            <label>Name (optional)</label>
                            <md-input
                            :disabled="sending" 
                            v-model="msgData.senderName"></md-input>
                        </md-field>

                   <md-field
                        :class="getValidationClass('senderEmail')"
                        class="md-form-group has-esc-accent">
                            <md-icon>email</md-icon>
                            <label>Email</label>
                            <md-input
                            :disabled="sending" 
                            v-model="msgData.senderEmail"
                            required></md-input>

                            <span class="md-error" v-if="!$v.msgData.senderEmail.required">Email is required.</span>

                            <span class="md-error" v-else-if="!$v.msgData.senderEmail.email">Invalid email address.</span>
                        </md-field>

                        <md-field
                        :class="getValidationClass('senderMsg')"
                        class="md-form-group has-esc-accent">
                            <md-icon>notes</md-icon>
                            <label>Message</label>
                            <md-textarea
                            :disabled="sending" 
                            v-model="msgData.senderMsg"
                            md-autogrow
                            required></md-textarea>

                            <span class="md-error" v-if="!$v.msgData.senderMsg.required">Message is required.</span>
                        </md-field>

                        <div class="__card-buttons md-layout md-gutter md-alignment-center-space-between">

                            <div class="__btnReset md-layout-item md-size-45 md-layout md-alignment-center-center">
                                <md-button
                                @click="clearInput"
                                class="md-simple md-dense md-round md-warning">
                                    Clear Fields
                                </md-button>
                            </div>

                            <div class="__btnSubmit md-layout-item md-size-45 md-layout md-alignment-center-center">
                                <md-button
                                class="md-dense md-round md-success"
                                type="submit"
                                :disabled="sending">
                                    Submit
                                </md-button>
                            </div>

                        </div>
                    </form>
                </md-card-content>
            </md-card>

          </div>
        </div>
      </div>
    </div>
    <vue-headful title="Contact Us | ESCORD"/>
  </div>
</template>

<script>

//validation imports
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  bodyClass: "escord-contact-us-page",
  data() {
    return {
        /* form data */
          successnotif:'',
      msgData: {
          senderName: null,
          senderEmail: null,
          senderMsg: null,
        
      },
      sending: false
    };
  },
  mixins: [validationMixin], // for validation

   /* for validation */
  validations() {
      return {
          msgData: {
          senderEmail: {required, email},
          senderMsg: {required}
        }
      }
  },

  props: {
    
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
      const field = this.$v.msgData[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      msgValidate () {
        this.$v.$touch()

        this.sendingConcern();

        if (!this.$v.$invalid) {
          console.log("Message sent successfully.")
        }
        else {
          console.log("Message sending failed.");
        }
    },
    clearInput() {
      this.$v.$reset();
      this.msgData.senderName = null;
      this.msgData.senderEmail = null;
      this.msgData.senderMsg = null;
    },

    sendingConcern(){

            
           
            axios.post('api/insertconcern', this.msgData).then(response => {

                    this.successnotif = 'Concern Send';
        
              
          

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })

            

    }
  }
};
</script>

<style lang="scss" scoped>

h3.title {
    margin-bottom: 0.5rem !important;
    color: #363434 !important;
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

.md-card-header {
    background-color: transparent !important;
    box-shadow: none !important;
    -webkit-box-shadow: none;
    height: 5rem !important;
    margin-bottom: 2rem !important;
}

.md-icon {
    color: #90a4ae !important;
}
</style>
