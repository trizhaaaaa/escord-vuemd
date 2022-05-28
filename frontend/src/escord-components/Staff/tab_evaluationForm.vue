<template>
  <div class="">
      <div class="md-layout md-gutter md-alignment-center-center">

          <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
       
          </div>

          <div class="__table md-layout-item md-size-100">

              <md-table
                v-model="studentList"
                md-sort="studLN"
                md-sort-order="asc">

                <md-table-row class="title">
                    <md-table-head class="text-center">Actions</md-table-head>
                    <md-table-head class="text-center">Subject Code</md-table-head>
                    <md-table-head class="text-center">Subject Description</md-table-head>
                    <md-table-head class="text-center">Units</md-table-head>
                    <md-table-head class="text-center">Final Grades</md-table-head>
                    <md-table-head class="text-center">Final Grade * Units</md-table-head>


                </md-table-row>

                <md-table-row
                 v-for="(student,index) in studentList"
                 :key="index">

                    <md-table-cell class="text-center">
                   
                    <md-button 
                    class="md-esc-darkgrey md-raised md-round md-just-icon">
                        <md-icon>save</md-icon>
                        <md-tooltip md-direction="bottom">save</md-tooltip>
                    </md-button>
               
                    </md-table-cell>


                     <md-field class="has-esc-accent">
                   <md-input 
                 
                    class="text-center"
                     v-model="student.subjectcode"
                   ></md-input> 
                     </md-field>
               

                    <md-table-cell class="text-left">
      <md-field class="has-esc-accent">
                          <md-input 
                    class="text-center"
                     v-model="student.subjectdesc"></md-input>
                             </md-field>


                    </md-table-cell>

                    <md-table-cell>
                        
                <md-field class="has-esc-accent">
                       <md-input 
                            type="number"
                    class="text-center"
                     v-model="student.units"></md-input> 
                </md-field>
                    </md-table-cell>

                     <md-table-cell>
                       <md-field class="has-esc-accent">
                       <md-input 
                            type="number"
                    class="text-center"
                     v-model="student.finalgrade"></md-input> 
                             </md-field>
                    </md-table-cell>


                     <md-table-cell>

                                <md-field class="has-esc-accent">
                       <md-input class="text-center"
                     v-model="student.total"></md-input> 

                          </md-field>
                    </md-table-cell>

                </md-table-row>

              </md-table>
          
          </div>
      </div>
  </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import axios from "axios"
import { required, maxLength, minValue, maxValue } from 'vuelidate/lib/validators'


export default {
    
    components: {
        
    
    },
    data(){
        return{
            
            studAdded: false,
             sending: false,
            addedStudentInfo: '',

            studentList:[
                {
                    subjectcode: "CSE 103",
                    subjectdesc: "WEB DEVELOPMENT",
                    units: "3",
                    finalgrade: "1.26",
                    total: "PLEASE COMPUTE AUTO HERE"
                },
                {
                    subjectcode: "CSE 102",
                    subjectdesc: "SOFTWARE ENGINEERING",
                    units: "3",
                    finalgrade: "1.26",
                    total: "PLEASE COMPUTE AUTO HERE"
                },
                
            ]
        };
    },

     // for validation
  mixins: [validationMixin],
   /* for validation */
   validations: {
       studentList: {
        subjectcode: {required},
        subjectdesc: {required},
         units: {required},
        finalgrade: {required},
        total: {required}
       },

       
      
      
   },

   methods:{
    getValidationClass (fieldName) {
      const field = this.$v.studentList[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.studentList.subjectcode = null
        this.studentList.subjectdesc = null
        this.studentList.units = null
        this.studentList.finalgrade = null
        this.studentList.total = null
      
      },
      rowUpdated () {
        this.sending = true
       
   
      
        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.addedStudentInfo = `${this.studentList.subjectcode}, ${this.studentList.subjectdesc} ${this.studentList.finalgrade}`
          this.studAdded = true
          this.sending = false
          this.clearForm()
        }, 1500)  

        this.refreshGradesheet();
      },
      addValidate () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
  
          this.rowUpdated()
            
          console.log("Student is added successfully.")
        }
        else {
          console.log("Cannot add student to the gradesheet.");
        }
    },

   }

}
</script>

<style>

.__table {
    margin-top: 3em !important;
}

</style>