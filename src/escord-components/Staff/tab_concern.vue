<template>
  <div class="">
      <div class="md-layout md-gutter md-alignment-center-center">

          <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
       
          </div>

          <div class="__table md-layout-item md-size-100">

  <div class="md-layout md-gutter md-alignment-center-center __paginate">
            <pagination
            type="esc-accent"
            no-arrows  :page-count="concern.last_page" :value="concern.current_page" :total="concern.total" @input="concernGet" />
            </div>

              <md-table
                v-model="concern"
                md-sort="studLN"
                md-sort-order="asc">

                <md-table-row class="title">
                    <md-table-head class="text-center">Created Date Concern</md-table-head>
                    <md-table-head class="text-center">Email </md-table-head>
                    <md-table-head class="text-center">Name</md-table-head>
                    <md-table-head class="text-center">Concern</md-table-head>

                </md-table-row>

                <md-table-row v-for="(con, index) in concern.data" :key="index">

                    <md-table-cell class="text-center">
                   
                      {{concern.data[index].created_at}}
                    
               
                    </md-table-cell>

                    <md-table-cell class="text-left">
  
                      {{concern.data[index].email}}


                    </md-table-cell>

                    <md-table-cell>
 
                      {{concern.data[index].name}}

                    </md-table-cell>

                       <md-table-cell>
                         <md-field>
                  <md-textarea v-model="concern.data[index].message" readonly>
                  </md-textarea >
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

import {Pagination} from '@/components'

export default {

      name:'tabconcern',
    components: {
        Pagination,
    
    },
    mounted(){
      this.concernGet();
    },
    data(){
        return{
            
            studAdded: false,
             sending: false,
            addedStudentInfo: '',
              search:'',
            concern:{
            }
        };
    },

     // for validation
  mixins: [validationMixin],
   /* for validation */
   validations: {
       concern: {
        subjectcode: {required},
        subjectdesc: {required},
         units: {required},
        finalgrade: {required},
        total: {required}
       },

       
      
      
   },

   methods:{
    getValidationClass (fieldName) {
      const field = this.$v.concern[fieldName]

      if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
   async   concernGet(page=1){


 await     axios.get('/api/showconcern?page='+page+'&search='+this.search).then(({data})=>{
                this.concern = data;

                console.log(this.concern)
             }).catch((errors)=>{
      
             this.error =  errors.response.data;
             })
      },
      clearForm () {
        this.$v.$reset()
        this.concern.subjectcode = null
        this.concern.subjectdesc = null
        this.concern.units = null
        this.concern.finalgrade = null
        this.concern.total = null
      
      },
      rowUpdated () {
        this.sending = true
       
   
      
        // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
          this.addedStudentInfo = `${this.concern.subjectcode}, ${this.concern.subjectdesc} ${this.concern.finalgrade}`
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
            
          //  console.log("Student is added successfully.")
        }
        else {
          //  console.log("Cannot add student to the gradesheet.");
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