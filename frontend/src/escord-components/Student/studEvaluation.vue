<template>

    <div class="cards md-layout md-alignment-center">

      <md-card class="md-layout-item md-size-50 md-small-size-100 ">
        <md-card-header class="">
          <div class="md-title">Evaluation Form</div>
        </md-card-header>

        <md-card-content>

                <div class="md-layout md-gutter">

                    <!--STUDENT NUMBER-->
         
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Student Number </label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="getScholRecord.student_number" :disabled="sending" readonly  />
              
              </md-field>
            </div>
                    <!--COURSE-->

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Course</label>
                <md-input id="age" name="age" autocomplete="age"  v-model="getScholRecord.course" :disabled="sending" readonly />
              
              </md-field>
            </div>

                    <!--SECTION-->

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Section</label>
                <md-input id="age" name="age" autocomplete="age" v-model="getScholRecord.section" :disabled="sending" readonly />
              
              </md-field>
            </div>
          </div>

                    <!--FIRSTNAME-->

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="getScholRecord.firstname" :disabled="sending" readonly />
              </md-field>
            </div>
                    <!--MIDDLENAME-->


               <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Middle Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="getScholRecord.middlename" :disabled="sending" readonly  />
              </md-field>
            </div>

                    <!--LASTNAME-->

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="getScholRecord.surname" :disabled="sending" readonly  />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">

                    <!--ADDRESS-->

         
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Address</label>
                <md-input  id="age" name="age" autocomplete="age" v-model="getScholRecord.address" :disabled="sending" readonly />
              
              </md-field>
            </div>
          </div>

            <div class="md-layout md-gutter">
         
                    <!--ELEM SCHOOL-->

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Elementary School</label>
                <md-input  id="age" name="age" autocomplete="age" v-model="getScholRecord.elementary" :disabled="sending" readonly />
              
              </md-field>
            </div>

                    <!--ELEM YEART GRADSCHOOL-->

             <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Elementary Year Graduation</label>
                <md-input  id="age" name="age" autocomplete="age" v-model="getScholRecord.elemyeargrad" :disabled="sending" readonly />
              
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
         
                    <!--HIGH SCHOOL-->

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Highschool</label>
                <md-input  id="age" name="age" autocomplete="age" v-model="getScholRecord.highschool" :disabled="sending" readonly />
              
              </md-field>
            </div>

                    <!--HIGH SCHOOL YEAR GRAD-->

             <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Highschool Year Graduation</label>
                <md-input id="age" name="age" autocomplete="age" v-model="getScholRecord.hsyeargrad" :disabled="sending" readonly />
              
              </md-field>
            </div>
          </div>
        </md-card-content>
 <md-card-actions>
                         <label for="age">INSERT TABLE HERE</label>
                    <!--TABLESSS---->
                </md-card-actions>
        <md-card-actions>
      
                    <md-button class=" md-simple md-esc-accent">Download</md-button>
        </md-card-actions>
      </md-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
import { mapActions, mapGetters} from "vuex";

  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'EvaluationForm',
    mixins: [validationMixin],
    mounted(){
          //  this.$store.dispatch('displayuser');


            
            this.$store.dispatch('getScholasticRecord',this.$route.params.student_number);
         
    },
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
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
  ...mapGetters({getScholRecord: 'getScholRecord'}),
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