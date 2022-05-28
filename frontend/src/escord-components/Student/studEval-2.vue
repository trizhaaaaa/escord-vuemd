<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
   

    <div class="main main-raised" ref="DownloadComp">
      <div class="section profile-content">
        <div class="container">
       
          <div class="__gradesheet-header md-layout md-gutter md-alignment-top-space-between">

            <div class="__gradesheet-subject md-layout-item md-size-100">
                
                    <h5 class="md-subheading">
                   SEMESTER : {{topviewdata.semester }}SY: {{topviewdata.sem_startyear}} - {{topviewdata.sem_endyeaer}}
                    </h5>
                
                <h4>
                    <strong>STUDENT NUMBER : {{topviewdata.student_number }} </strong>
                SURNAME : {{topviewdata.surname }} 
 
                
                </h4>
            </div>
            
            <div class="__gradesheet-info md-layout-item md-xsmall-size-100 md-size-70">

                    <h5 class="md-subheading">
                   FIRST NAME :  {{topviewdata.firstname }} 
                    </h5>
                    <p class="md-caption __top-md-caption">
                    MIDDLE NAME : {{topviewdata.middlename }} 
                    </p>
                    <p class="md-caption">
                   COURSE  : {{topviewdata.course }} 
                    </p>
                    
                    <p class="md-caption">
                   YEAR : {{topviewdata.section }} 
                    </p>

            </div>
            
           

          </div>

          <md-divider></md-divider>

<!--            <div v-if="Loading">
            <md-progress-spinner class="__gradesheet-header md-layout md-gutter md-alignment-top-space-between" md-mode="indeterminate"></md-progress-spinner>
          
          </div> -->

          <div  class="__gradesheet-table">

              <eval-form/>
            
          </div>

        </div>
      </div>
    </div>
    <vue-headful title="Gradesheet Detail"/>
  </div>
</template>

<script>
// modal import
import { Modal } from "@/components";
import { mapActions, mapGetters, mapMutations} from "vuex";
import axios from "axios"
import tabeval from './Tabeval.vue'

//validation imports
import { validationMixin } from 'vuelidate'


import { required, maxLength, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
  bodyClass: "profile-page",
  name:'Gradesheetpage',
  components: {
   
      "eval-form":tabeval,
 
  },
  mounted() {
this.topview()
    
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

      topviewdata:[],

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
    /*    ...mapGetters({getrow : 'getrow'}),
     ...mapGetters({getGS : 'getGS'}), */

  
  },

  methods: {
    /*modal function*/
          /* ...mapActions({ archgradesheet: "archgradesheet" }),
          ...mapActions({ refreshGS: "showgsinfo" }),

          ...mapActions({ addStudGradesheet: "addStudGradesheet" }),
          ...mapActions({ updateGradesheetData: "updateGradesheetData" }), */

 // ...mapMutations(['setspeciGS']),
    sendArrayofData(index){

        console.log(index);

   // this.updateGradesheetData({route:index.id}, this.index);

  
      /*   axios.put('/api/addgs/'+index.id, index).then((response)=>{
        

            console.log('create professor accounts' , response.data);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             }) */
    },

    classicModalHide() {
      this.classicModal = false;
    },

    refreshGradesheet(){
     //   this.refreshGS({ route: this.$route.params.gradeshid })
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
     
     //  this.addStudGradesheet(this.addStud)
       
   
      
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

    async topview(){ 
           await axios.get('/api/evalTopView/100001').then(({data})=>{
                    this.topviewdata = data[0]
                }).catch(({ response })=>{
                    console.error(response)
                })
           
},


      archievebtn(){
       
        
      axios.put('api/archievegs/'+ this.$route.params.gradeshid, { 
            status_archieve: '1', }).then((response)=>{
          
       
                  console.log('archieve successfull');
                  
                //add notification time out here 

       
    
    }).catch((errors)=>{
          
                 console.log('error in archeiveing');
    
          
       
                 })  
 
           },

        

     
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
