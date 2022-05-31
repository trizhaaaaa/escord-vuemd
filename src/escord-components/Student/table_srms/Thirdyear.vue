<template>
  <div>

<div >
  <md-table 
            v-model="firstsem"
            class="__tableMain mx-auto">
                <h6> THIRD YEAR 1 SEMESTER</h6>
            <md-table-row class="title">
                <!-- <md-table-head class="text-center">Actions</md-table-head> -->
                <md-table-head class="manAcc">Subject Code</md-table-head>
                <md-table-head class="manAcc">Subject Description</md-table-head>
                <md-table-head class="manAcc">Grades</md-table-head>
                <md-table-head class="manAcc">Units</md-table-head>

            </md-table-row>

            <md-table-row
            v-for="(activity, index) in firstsem" :key="index">

                <md-table-cell class="text-left manAcc">
                    {{activity.subjectcode}}  
                </md-table-cell>

                <md-table-cell class="text-left manAcc">
                    {{activity.subjectdesc}}
                </md-table-cell>

                <md-table-cell class="text-left manAcc">
                    {{activity.finalgrade}}
                </md-table-cell>

                <md-table-cell class="manAcc">
                    {{activity.units}} <!--- change into units-->
                </md-table-cell>

            </md-table-row>
        </md-table>

</div>


<div>
  <md-table 
            v-model="secondsem"
            class="__tableMain mx-auto">
                <h6> THIRD YEAR 2ND SEMESTER</h6>
            <md-table-row class="title">
                <!-- <md-table-head class="text-center">Actions</md-table-head> -->
                <md-table-head class="manAcc">Subject Code</md-table-head>
                <md-table-head class="manAcc">Subject Description</md-table-head>
                <md-table-head class="manAcc">Grades</md-table-head>
                <md-table-head class="manAcc">Units</md-table-head>

            </md-table-row>

            <md-table-row
            v-for="(activity, index) in secondsem" :key="index">

                <md-table-cell class="text-left manAcc">
                    {{activity.subjectcode}}  
                </md-table-cell>

                <md-table-cell class="text-left manAcc">
                    {{activity.subjectdesc}}
                </md-table-cell>

                <md-table-cell class="text-left manAcc">
                    {{activity.finalgrade}}
                </md-table-cell>

                <md-table-cell class="manAcc">
                    {{activity.finalgrade}} <!--- change into units-->
                </md-table-cell>

            </md-table-row>
        </md-table>

</div>


  </div>
</template>

<script>

import axios from 'axios'
export default {
    name:'firstTable',

    mounted(){
        this.tablethirdyear()
    },
    data(){
        return{

            firstsem: {
                type:Object,
                default:null,
            },

            
            secondsem: {
                type:Object,
                default:null,
            },


            semester:'',

             activityList: [
                {
                    subjCode: "CSE 110",
                    activityTime: "",
                    subjDesc: "SOFTWARE ENGINEERING",
                    grades: "1",
                    units: "3",
                },
                {
                    subjCode: "CSE 110",
                    activityTime: "",
                    subjDesc: "SOFTWARE ENGINEERING",
                    grades: "2",
                    units: "5",
                },
                {
                    subjCode: "CSE 110",
                    activityTime: "",
                    subjDesc: "SOFTWARE ENGINEERING",
                    grades: "1",
                    units: "3",
                },
                
            ]
        }

    },

    methods:{
async tablethirdyear(){
           
 
           await axios.get('/api/perstudentschol/'+this.$route.params.student_number).then(({data})=>{
        
                    this.firstsem = data.third;
                      this.secondsem = data.thirdSecondSem;
              
              

                
                }).catch(({ response })=>{
                    //console.error(response)
                })
           
},

    },

}
</script>

<style>

</style>