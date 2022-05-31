<template>
<div class="wrapper">
    <parallax
    class="section page-header header-filter"
    :style="headerStyle"></parallax>

    <div class="main main-raised" ref="DownloadComp">
        <div class="section profile-content">
            <div class="container">

                <p class="title md-display-1 text-esc-darkgrey text-center">Evaluation Form Detail</p>

                <div class="_wrapDiv mx-auto md-layout md-gutter md-alignment-center-space-between">
            
                <md-subheader><strong>STUDENT INFO </strong></md-subheader>

                    <!-- FIRST ROW -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                        <!-- STUDENT NUMBER -->
                        <div class="md-layout-item md-size-25 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                <md-field
                                :class="getValidationClass('student_number')"
                                class="has-esc-accent md-layout-item">
                                    <label>Student Number</label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.student_number"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.student_number.required">Required.</span>
                                </md-field>
                            </div>
                        </div>
                        <!-- STUDENT NAME -->
                        <div class="md-layout-item md-size-75 md-layout md-gutter md-alignment-center-left">
                             <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                                 <md-field
                                :class="getValidationClass('firstname')"
                                class="has-esc-accent md-layout-item md-size-40">
                                    <label>First Name</label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.firstname"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.firstname.required">Required.</span>
                                    <span class="md-error" v-else-if="!$v.getScholRecord.firstname.minLength">Invalid.</span>
                                </md-field>

                                <md-field
                                :class="getValidationClass('middlename')"
                                class="has-esc-accent md-layout-item md-size-10">
                                    <label>MI</label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.middlename"></md-input>
                                </md-field>

                                <md-field
                                :class="getValidationClass('surname')"
                                class="has-esc-accent md-layout-item md-size-40">
                                    <label>Last Name </label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.surname"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.surname.required">Required.</span>
                                    <span class="md-error" v-else-if="!$v.getScholRecord.surname.minLength">Invalid.</span>
                                </md-field>
                             </div>
                        </div>
                    </div>
                    <!-- SECOND ROW -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                        <div class="md-layout-item md-size-25 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout mdgutter md-alignment-center-space-between">
                                <md-field
                                :class="getValidationClass('section')"
                                class="has-esc-accent">
                                    <label>Year and Section</label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.section"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.section.required">Required.</span>
                                    <span class="md-error" v-else-if="!$v.getScholRecord.section.maxLength">Invalid.</span>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout-item md-size-75 md-layout md-gutter md-alignment-center-left">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                                <md-field
                                :class="getValidationClass('course')"
                                class="has-esc-accent md-layout-item">
                                    <label>Program</label>
                                    <md-input
                                    :disabled = "sending"
                                    v-model="getScholRecord.course"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.course.required">Required.</span>
                                </md-field>
                            </div>
                        </div>
                    </div>
                    <!-- THIRD ROW -->
                    <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                        <div class="md-layout-item md-size-25 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                <md-field
                                :class="getValidationClass('semester')"
                                class="has-esc-accent md-layout-item">
                                    <label>Semester</label>
                                    <md-input
                                    type="number"
                                    maxlength="1"
                                    md-counter = "false"
                                    :disabled = "sending"
                                    v-model="getScholRecord.semester">{{semSuffix}} </md-input>
                                    <span class="md-helper-text">
                                        Accepts number only.*
                                    </span>

                                    <span class="md-error" v-if="!$v.getScholRecord.semester.required">Required.</span>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout-item md-size-75 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">
                                <md-field
                                :class="getValidationClass('sem_startyear')"
                                class="has-esc-accent md-layout-item md-size-45">
                                    <label>SY (start)</label>
                                    <md-input
                                    type="number"
                                    maxlength="4"
                                    md-counter="false"
                                    :disabled = "sending"
                                    v-model="getScholRecord.sem_startyear"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.sem_startyear.required">Required.</span>
                                </md-field>

                                <md-field
                                :class="getValidationClass('sem_endyeaer')"
                                class="has-esc-accent md-layout-item md-size-45">
                                    <label>SY (end)</label>
                                    <md-input
                                    type="number"
                                    maxlength="4"
                                    md-counter="false"
                                    :disabled = "sending"
                                    v-model="getScholRecord.sem_endyeaer"></md-input>

                                    <span class="md-error" v-if="!$v.getScholRecord.sem_endyeaer.required">Required.</span>
                                </md-field>
                            </div>
                        </div>

                        <md-button 
                        class="md-dense md-round md-success md-simple _save"
                        @click="studEvalDetail_Validate">
                            save
                        </md-button>
                    </div>
                </div>

                <md-divider></md-divider>

                <div class="_wrapDiv _frmBtn mx-auto md-layout md-gutter md-alignment-center-center">
            
                <md-subheader class="md-layout-item md-size-100">
                    <strong>FORM ACTIONS</strong>
                </md-subheader>
                
                    <div class="md-layout-item md-size-60 md-layout md-gutter md-alignment-center-center">
                        <div class="md-layout-item md-size-45 md-xsmall-size-100 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                <md-button
                                class="md-round md-esc-accent md-wd md-dense"
                                @click="addSubjModal = true">
                                    add subject
                                </md-button>
                            </div>
                        </div>
                 <!--        <div class="md-layout-item md-size-45 md-xsmall-size-100 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                <md-button
                                class="_archive md-round md-esc-darkgrey md-wd md-dense md-simple">
                                    archives
                                </md-button>
                            </div>
                        </div> -->
                    </div>
                </div>

                <md-divider></md-divider>

                <div class="_wrapDiv _tbl mx-auto md-layout md-gutter md-alignment-center-center">
                    <eval-form class="md-layout-item md-size-100"/>
                </div>

                <!-- ADD SUBJECT MODAL -->
                <add-subj-modal v-if="addSubjModal" @close="addSubjModalHide"/>


            </div>
        </div>    
    </div>
    <vue-headful title="Evaluation Form Detail"/>
</div>
</template>

<script>
// modal import
import addSubjModal from '../Staff/evalAddSubject.vue';

import { mapActions, mapGetters, mapMutations} from "vuex";
import axios from "axios"


//validation imports
import { validationMixin } from 'vuelidate'
import  EvalFormtab from './evalFormTable.vue'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  bodyClass: "profile-page",
  name:'Gradesheetpage',
  components: {
      "eval-form":EvalFormtab,
      addSubjModal
  },

  mounted() {

            this.$store.dispatch('getScholasticRecord',this.$route.params.studnum);
           // this.getEvalID();
       //   this.$store.dispatch('showgsinfo',{ route: this.$route.params.gradeshid });
         // let studentrow = this.$store.getters.getrow;

        //  studentrow.forEach(student => this.studentList = student);
     // console.log(this.studentList)
          
      },
      created(){
        //  this.studentGrade = this.$store.getters.getrow;
      },
  data() {
    return {
      /* TITLE/ STUDENT DATA */
      TopInfo:[],
      studNum: "20191172",
      studFN: "TRIZHALYN",
      studMI: "L",
      surname: "MAGLANGIT",
      section: "3A",
      course: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",

      semester: "2",
      semSuffix: "",
      sem_startyear: "2020",
      sem_endyeaer: "2021",

       /*modal default value on load*/
      addSubjModal: false,

      evalUpdated: false,
      sending: false,
      studInfo: '',
   
     
    };
  },

  mixins: [validationMixin], // for validation

   /* for validation */
   validations: {

       getScholRecord:{
        student_number: {required},
        firstname: {
            required,
            minLength: minLength(3)},
        surname: {
            required,
            minLength: minLength(3)},
        section: {
            required,
            maxLength: maxLength(2)},
        course: {required},

        semester: {required},
        sem_startyear: {required},
        sem_endyeaer: {required},

        },
   },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/escord-team-pictures/stud.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    loadingStatus(){
      return this.$store.getters.loadingStatus
    },
  ...mapGetters({getScholRecord: 'getScholRecord'}),

    /*    ...mapGetters({getrow : 'getrow'}),
     ...mapGetters({getGS : 'getGS'}), */
  },

  methods: {

      setSuffix() {
          if(this.semester=="1") {
              this.semSuffix = "st"
          }
          else if (this.semester=="2") {
              this.semSuffix = "nd"
          }
      },
      
      addSubjModalHide() {
      this.addSubjModal = false;
    },


    /* validation methods */
    getValidationClass (fieldName) {
      const field = this.$v[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      validateEval () {
        this.sending = true

        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.studInfo = `Evaluation form of : ${this.getScholRecord.surname}, ${this.getScholRecord.firstname} ${this.getScholRecord.middlename} has been updated successfully!`
          this.evalUpdated = true
          this.sending = false
        }, 1500)  
      },

      studEvalDetail_Validate () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
            this.validateEval()
            this.updateEvalTopPreview()
            console.log("Field can be updated successfully.")
        }
        else {
            console.log("Field can not be updated.");
        }
    },

      archievebtn(){
       
        
      axios.put('api/archievegs/'+ this.$route.params.gradeshid, { 
            status_archieve: '1', }).then((response)=>{
          
       
               //     console.log('archieve successfull');
                  
                //add notification time out here 

       
    
    }).catch((errors)=>{
          
                 //  console.log('error in archeiveing');
    
          
       
                 })  
 
           },
           updateEvalTopPreview(){
             
         axios.put('/api/evalupdate/'+this.$route.params.srmsid,
         { 
            student_number: this.getScholRecord.student_number,
            course: this.getScholRecord.course,
            section:this.getScholRecord.section,
            surname:this.getScholRecord.surname,
            firstname:this.getScholRecord.firstname,
            surname:this.getScholRecord.surname,
            middlename:this.getScholRecord.middlename,
            semester:this.getScholRecord.semester,
            sem_startyear: this.getScholRecord.sem_startyear,
            sem_endyeaer:this.getScholRecord.sem_endyeaer,

         }).then((response)=>{
        
                console.log(this.getScholRecord)
     

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             }) 
           },

       /*  async getEvalID(){
            
            await    axios.get('/api/studentschol/'+this.$route.params.studnum).then(({data})=>{
              
              this.TopInfo = data;

            
             }).catch((errors)=>{
      
             this.error =  errors.response.data;
             })

           } */
    
    

        

     
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

._wrapDiv {
    width: 100% !important;
    max-width: 50em !important;
}

.md-icon {
    color: red !important;
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

._save, ._archive {
    font-size: 1em !important;
    font-weight: bold !important;
}

._frmBtn {
    margin-bottom: 0.75em !important;
}

._tbl {
    margin-top: 0.75em !important;
}
</style>
