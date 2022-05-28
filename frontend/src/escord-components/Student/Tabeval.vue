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
                 
                    <md-table-head class="text-center">Subject Code</md-table-head>
                    <md-table-head class="text-center">Subject Description</md-table-head>
                    <md-table-head class="text-center">Units</md-table-head>
                    <md-table-head class="text-center">Final Grades</md-table-head>
                    <md-table-head class="text-center">Final Grade * Units</md-table-head>


                </md-table-row>

                <md-table-row
                 v-for="(student,index) in studentList"
                 :key="index">

                    <md-table-cell  class="text-center">
                        {{student.subjectcode}}
                    </md-table-cell>

                    <md-table-cell class="text-left">
                        {{student.subjectdesc}}
                    </md-table-cell>

                    <md-table-cell>
                        {{student.grade}}
                    </md-table-cell>

                    <md-table-cell>
                        {{student.units}}
                    </md-table-cell>

                    <md-table-cell>
                        {{student.finalgrade}}
                    </md-table-cell>

                </md-table-row>

              </md-table>
          
          </div>
      </div>
  </div>
</template>

<script>


import axios from 'axios'
export default {
name:'tabeval',
    components: {
        
    },
    mounted(){

 this.peridofEvalStud()
    },
    data(){
        return{
            tab_EFMS_defaultPagination: 1,

            studentList:{
                type:Object,
                default:null,
            }
        };
    },

    methods:{


   async peridofEvalStud(){ 
           await axios.get('/api/evalPerevalID/'+this.$route.params.evalid).then(({data})=>{
                    this.studentList = data
                }).catch(({ response })=>{
                    console.error(response)
                })
           
},


    },

}
</script>

<style>

.__table {
    margin-top: 3em !important;
}

</style>