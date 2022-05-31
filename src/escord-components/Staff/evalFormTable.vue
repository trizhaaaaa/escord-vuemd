<template>
  <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-45 md-xsmall-size-100 md-layout md-gutter md-alignment-center-center">
                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                <md-button @click="addEvalRow"
                                class="_archive md-round md-esc-darkgrey md-wd md-dense md-simple">
                                    REFRESH TABLE
                                </md-button>
                            </div>
                        </div>

      <md-table
      v-model="subjectList"
      md-sort="code"
      md-sort-order="asc">
      
        <md-table-row class="text-center title">
            <md-table-head>Action</md-table-head>
            <md-table-head>Code</md-table-head>
            <md-table-head>Description</md-table-head>
            <md-table-head>Units</md-table-head>
            <md-table-head>Final Grade</md-table-head>
            <md-table-head>FG x Units</md-table-head>
        </md-table-row>

        <md-table-row
        v-for="(subj, index) in subjectList"
        :key="index">

            <md-table-cell>
                <div class="md-layout md-gutter md-alignment-center-center">
                    <md-button
                    @click="saveupdateStudent(subjectList[index])"
                    class="md-success md-just-icon md-round md-simple">
                        <md-icon>save</md-icon>
                    </md-button>
                </div>
            </md-table-cell>

            <md-table-cell>
                <md-field
                :class="getValidationClass('subjCode')"
                class="has-esc-accent _col1 mx-auto">
                    <md-input
                    class=""
                    v-model="subj.subjectcode"></md-input>

                    <!-- <span class="md-error" v-if="!$v.subjectList.$each.code.required">Field is required.</span> -->
                </md-field>
            </md-table-cell>

            <md-table-cell>
                 <md-field
                 :class="getValidationClass('subjDesc')"
                class="has-esc-accent _col2">
                    <md-input
                    class=""
                    v-model="subj.subjectdesc"></md-input>
                </md-field>
            </md-table-cell>

            <md-table-cell class="">
                <md-field
                :class="getValidationClass('subjUnit')"
                class="has-esc-accent _col1 mx-auto">
                    <md-input
                    class="text-center"
                    v-model="subj.units"></md-input>
                </md-field>
            </md-table-cell>

            <md-table-cell class="">
                <md-field
                :class="getValidationClass('subjFG')"
                class="has-esc-accent _col1  mx-auto">
                    <md-input
                    class="text-center"
                    v-model="subj.grade"></md-input>
                </md-field>
            </md-table-cell>

            <md-table-cell class="">
                <p class="mx-auto">
                    <strong>{{fgxunit_prod(subj)}}</strong>
                </p>
            </md-table-cell>
        </md-table-row>

      </md-table>
  </div>
</template>

<script>
//validation imports

import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { required, minValue, maxValue, integer } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    
    mounted(){

        this.addEvalRow()
     //       this.$store.dispatch('getScholasticRecord',this.$route.params.student_number);

    }, // for validation
    data() {
        return {
            subjectList: [
              /*   {
                    code: "CCS 112",
                    desc: "MATHEMATICS IN THE MODERN WORLD",
                    unit: 3,
                    fg: 1.2
                },
                {
                    code: "CCS 102",
                    desc: "BASTA PANGALAN NG SUBJECT",
                    unit: 5,
                    fg: 2.0
                },
                {
                    code: "GEF 312",
                    desc: "EARTH SCIENCE",
                    unit: 4,
                    fg: 1.5
                }, */
            ],

            sending: false,
        };
    },
    validations: {
        subjectList: {
            $each: {
                code: {required},
                desc: {required},
                unit: {
                    required,
                    minValue: minValue(1),
                    integer,
                    maxValue: maxValue(5)
                },
                fg: {
                    required,
                    minValue: minValue(1.00),
                    maxValue: maxValue(5.00)
                }
            }
        }
    },

    computed:{
//  ...mapGetters({getScholRecord: 'getScholRecord'}),

    },

    methods: {
    getValidationClass (fieldName) {
      const field = this.$v.subjectList.$each[fieldName]

      if (field) {
            return {
                'md-invalid': field.$invalid && field.$dirty
            }
        }
    },

    saveSubjRow() {
            
        this.$v.$touch()
        if (!this.$v.$invalid) {
                 

            this.sending = true 
        }
        else {
            console.log("not updated");
        }
    },

    fgxunit_prod(subj) {
        return (subj.units * subj.grade).toFixed(2);
    },

   async  addEvalRow(){
           
 await axios.get('/api/evalTableStudent/'+this.$route.params.studnum).then(({data})=>{
        this.subjectList = data

        console.log(this.subjectList)
 
       }).catch(()=>{
         //  console.log("Error in getting the user")
       }) 
            
    },


    saveupdateStudent(index){

  axios.put('/api/updateEval/'+index.id,index).then((response)=>{
        

           console.log(response);

            
             }).catch((errors)=>{
  
             this.error =  errors.response.data;
   
             })

    }

  },


}
</script>

<style lang="scss" scoped>
._col1 {
    max-width: 4em !important;
}

._col2 {
    max-width: 10em !important;
}

.md-input {
    width: 100% !important;
}
</style>