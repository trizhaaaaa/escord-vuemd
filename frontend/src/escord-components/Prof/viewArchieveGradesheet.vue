<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
   

    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
       
          <div class="__gradesheet-header md-layout md-gutter md-alignment-top-space-between">

            <div class="__gradesheet-subject md-layout-item md-size-100">
                <h4>
                    <strong> {{getGS.subjectcode}} </strong>
                  {{getGS.subjectdesc}}
 
                
                </h4>
            </div>
            
            <div class="__gradesheet-info md-layout-item md-xsmall-size-100 md-size-70">

                    <h5 class="md-subheading">
                        {{getGS.course_year}}{{getGS.course_section}} | {{getGS.course_short}} 
                    </h5>
                    <p class="md-caption __top-md-caption">
                       {{getGS.day}} , {{getGS.time}} 
                    </p>
                    <p class="md-caption">
                 {{getGS.semester}} SEMESTER,  SY. {{getGS.sem_startyear}}-{{getGS.sem_endyear}} 
                    </p>

            </div>
            
            <div class="__gradesheet-buttons md-layout-item md-xsmall-size-100 md-size-30 md-layout md-gutter md-alignment-center-space-between">

            

                <div class="md-layout-item md-xsmall-size-25 md-small-size-50 md-large-size-25">
                    <md-button  @click="unArchieveGS"
                    class="md-esc-darkgrey md-raised md-round md-just-icon">
                        <md-icon>inventory</md-icon>
                        <md-tooltip md-direction="bottom">Unarchieve Gradesheet</md-tooltip>
                    </md-button>
                </div>

                <div class="md-layout-item md-xsmall-size-25 md-small-size-50 md-large-size-25">
                    <md-button
                    class="md-esc-darkgrey md-raised md-round md-just-icon">
                        <md-icon>download</md-icon>
                        <md-tooltip md-direction="bottom">Download Gradesheet</md-tooltip>
                    </md-button>
                </div>

              <!--    <div class="md-layout-item md-xsmall-size-25 md-small-size-50 md-large-size-25">
                    <md-button  @click="refreshGradesheet"
                    class="md-esc-darkgrey md-raised md-round md-just-icon">
                        <md-icon>refresh</md-icon>
                        <md-tooltip md-direction="bottom">Refresh Gradesheet</md-tooltip>
                    </md-button>
                </div> -->

            </div>

          </div>

          <md-divider></md-divider>

           <div v-if='loadingStatus'>
            <md-progress-spinner class="__gradesheet-header md-layout md-gutter md-alignment-top-space-between" md-mode="indeterminate"></md-progress-spinner>
          
          </div>

          <div  v-else  class="__gradesheet-table">

            <md-table 
              v-model="studentList"
              md-sort="studLN"
              md-sort-order="asc">

              <md-table-row class="title">
                <md-table-head class="text-center">Student Number</md-table-head>
                <md-table-head class="text-center">Name</md-table-head>
                <md-table-head class="text-center">Midterm</md-table-head>
                <md-table-head class="text-center">Final Term</md-table-head>
                <md-table-head class="text-center">Remarks</md-table-head>
                
              </md-table-row>

              <md-table-row
              v-for="(_, index) in getrow"
              :key="index">

                
                <md-table-cell class="text-center">
                  {{getrow[index].student_number}}
                </md-table-cell>



                <md-table-cell>
               {{getrow[index].studentname}}
                </md-table-cell>

             
              
                    <md-table-cell>
                     {{getrow[index].midterm}}
                </md-table-cell>
               

                  <md-table-cell>
                     {{getrow[index].finalterm}}
                </md-table-cell>
               
              
                  <md-table-cell>
                     {{getrow[index].finalgrade}}
                </md-table-cell>
              
              
                
                
              </md-table-row>

            </md-table>
      
          </div>
          <div class="__addStudentModal">
            <!-- modal -->
          </div>

        </div>
      </div>
    </div>
    <vue-headful title="View Archieve Gradesheet"/>
  </div>
</template>

<script>
// modal import

import { mapActions, mapGetters, mapMutations} from "vuex";
import axios from "axios"


//validation imports
import { validationMixin } from 'vuelidate'
import { required, maxLength, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
  bodyClass: "profile-page",
  components: {
    

  },
 mounted() {
       this.$store.dispatch('showgsinfo',{ route: this.$route.params.archievegs});
          //let studentrow = this.$store.getters.getrow;
            
            // this.showgsinfo({ route: this.$route.params.archievegs}); */
   
        // // studentrow.forEach(student => this.studentList = student);
     // console.log(this.studentList)
          
      },
      created(){
          this.studentGrade = this.$store.getters.getrow;
      },
  data() {
    return {
      /* GRADESHEET TABLE DATA */
      subjCode: "CS 108 ",
      subjUnit: "3",
      subjDesc: "SOFTWARE ENGINEERING 1",
      subjDay: "THU",
      subjTime: "10AM - 1PM",
      subjSem: "1ST SEMESTER",
      subjSY_start: "2021",
      subjSY_end: "2022",
      classProg: "BS COMPUTER SCIENCE",
      classYr: "3",
      classSec: "A",
      profName: "JOEMEN BARRIOS",
      profRank: "MASTER TEACHER III",
    

      studentList: [
    
      ],
      studentGrade: [],

       /*modal default value on load*/
      classicModal: false,

      /*modal--form data*/
      addStud: {
        studNum: null,
        studLN: null,
        studFN: null,
        studMI: null,
        studMG: null,
        studFG: null,
        gradesheetid: this.$route.params.gradeshid,
        finalgrade: 1, //this is for testing only
      },
      studAdded: false,
      sending: false,
      addedStudentInfo: '',
   
     
    };
  },

  mixins: [validationMixin], // for validation

   /* for validation */
   validations: {
       getrow: {
         $each: {
           midterm: {
             required,
             maxLength: maxLength(4),
             minValue: minValue(1.00),
             maxValue: maxValue(5.00)},

           finalterm: {
             required,
             maxLength: maxLength(4),
             minValue: minValue(1.00),
             maxValue: maxValue(5.00)}
         }
       },

       addStud: {
        studNum: {required},
        studLN: {required},
        studFN: {required},
        studMG: {required},
        studFG: {required}
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
       ...mapGetters({getrow : 'getrow'}),
     ...mapGetters({getGS : 'getGS'}),

  
  },

  methods: {
    /*modal function*/
          ...mapActions({ archgradesheet: "archgradesheet" }),
          ...mapActions({ refreshGS: "showgsinfo" }),

          ...mapActions({ addStudGradesheet: "addStudGradesheet" }),
          ...mapActions({ updateGradesheetData: "updateGradesheetData" }),

 // ...mapMutations(['setspeciGS']),
    unArchieveGS(){

       
 axios.put('/api/unarchieveGS/'+this.$route.params.archievegs).then(response => {
        //   this.currentUser = response.data
   
    console.log("Archieve Succesfully")
        //    console.log(response.data[0]);

       }).catch(()=>{
           console.log("Error in getting the user")
       }) 
    

    },

    classicModalHide() {
      this.classicModal = false;
    },

    refreshGradesheet(){
        this.refreshGS({ route: this.$route.params.gradeshid })
    },

    /* add student modal validation methods */
    getValidationClass (fieldName) {
      const field = this.$v.addStud[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.addStud.studNum = null
        this.addStud.studLN = null
        this.addStud.studFN = null
        this.addStud.studMI = null
        this.addStud.studMG = null
        this.addStud.studFG = null
      },
      addStudent () {
        this.sending = true
     
       this.addStudGradesheet(this.addStud)
       
   
      
        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.addedStudentInfo = `${this.addStud.studLN}, ${this.addStud.studFN} ${this.addStud.studMI}`
          this.studAdded = true
          this.sending = false
          this.clearForm()
        }, 1500)  

        this.refreshGradesheet();
      },
      addValidate () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
  
          this.addStudent()
            
          console.log("Student is added successfully.")
        }
        else {
          console.log("Cannot add student to the gradesheet.");
        }
    },

    download(){
      
    }

  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.__gradesheet-header, .__gradesheet-table {
    margin: 2rem 0 1.5rem 0 !important;
}

h4 {
    margin: 0 !important;
    width: max-content !important;
}

.md-subheading, .md-caption {
    margin-bottom: 0.25rem !important;
}

.__top-md-caption {
    margin-top: 1rem !important;
}

.md-icon {
    color: red !important;
}

.__gradesheet-info {
    padding-bottom: 1.5rem !important;
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
