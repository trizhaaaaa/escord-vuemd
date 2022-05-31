<template>

 <div class="__table md-layout-item md-size-100">

              <md-table
                v-model="studentList"
                md-sort="studLN"
                md-sort-order="asc">

                <md-table-row class="title">
                    <md-table-head class="text-center">Actions</md-table-head>
                    <md-table-head class="text-center">Eval ID</md-table-head>
                    <md-table-head class="text-center">Status</md-table-head>
                 


                </md-table-row>

                <md-table-row
                 v-for="(student,index) in studentList"
                 :key="index">

                    <md-table-cell class="text-center">
                   
                 <router-link :to="{ name: 'EscEvalstud', params: {evalid: student.evalform_id } }">View Evaluation</router-link>

                    </md-table-cell>

                    <md-table-cell  class="text-center">
                        {{student.evalform_id}}
                    </md-table-cell>

                    <md-table-cell>
                        {{student.srms_id}}
                    </md-table-cell>

                </md-table-row>

              </md-table>
          
          </div>
  
</template>

<script>

import axios from 'axios'
export default {

    name:'studEvalTable',

    mounted(){
        this.tablevalperstud()

        
    },
 data(){
        return{
            tab_EFMS_defaultPagination: 1,

            studentList: {
                type:Object,
                default:null,
            },

        };
 },
 methods:{

     async tablevalperstud(){ 

        
           await axios.get('/api/evalTableStudent/'+this.$route.params.srms_id).then(({data})=>{
                    this.studentList = data
                }).catch(({ response })=>{
                  //    console.error(response)
                })
           
},

 }

}
</script>

<style>

</style>