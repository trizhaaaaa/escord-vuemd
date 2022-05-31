<template>
  <div class="">
  
      <div class="__tableDiv">

        <div class="md-layout md-gutter md-alignment-center-space-between">

            <div class="__addButtons md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                <div class="md-layout-item md-size-50 md-layout md-gutter md-alignment-center-center">
                    <md-button
                    class="md-round md-raised md-dense md-wd md-esc-darkgrey"
                    @click="addNewStudentShow">
                        ADD STUDENT
                    </md-button>
                </div>

                <div class="md-layout-item md-size-50 md-layout md-gutter md-alignment-center-center">
                    <md-button
                    class="md-round md-raised md-dense md-wd md-esc-darkgrey"
                    @click="addNewStaffShow">
                        ADD STAFF
                    </md-button>
                </div>

                 <div class="md-layout-item md-size-100" v-if="addNewStudent">
                   
                    <add-student/>
                    <hr class="hr">

                </div>

                <div class="md-layout-item md-size-100"
                v-else-if="addNewStaff">

                        <add-staff/>
                        <hr class="hr">
                    
                </div>
            </div>

           
                                
            <div class="md-layout-item md-size-33
            md-xsmall-size-100 md-layout md-gutter md-alignment-center-center">
                <pagination 
                type = "esc-accent"
               no-arrows :page-count="userList.last_page" :value="userList.current_page" :total="userList.total" @input="studentInEnrollment" >
                </pagination>
            </div>

            <div class="md-layout-item md-size-66 md-xsmall-size-100 md-layout md-gutter md-alignment-center-space-between">
                <div class="md-layout-item md-size-85">
                    <md-field
                    class="has-esc-accent">
                        <label>Search..</label>
                        <md-input v-model="search"></md-input>
                    </md-field>
                </div>

                <div class="md-layout-item md-size-15 md-layout md-gutter md-alignment-center-center">
                    <md-button @click="studentInEnrollment" class="md-just-icon md-round md-esc-accent md-raised">
                        <md-icon>search</md-icon>
                    </md-button>
                </div>
                
            </div>
        </div>

        
        <md-table 
            v-model="userList.data"
            class="__tableMain mx-auto">

            <md-table-row class="title">
                <!-- <md-table-head class="text-center">Actions</md-table-head> -->
                <md-table-head class="manAcc">Name</md-table-head>
                <md-table-head class="manAcc">Category</md-table-head>
            </md-table-row>

            <md-table-row
            v-for="(user, index) in userList.data" :key="index">

                <!-- <div class="md-layout md-gutter md-alignment-center-center">
                    <md-button
                    class="md-danger md-raised md-simple md-just-icon">
                        <md-icon>delete</md-icon>
                        <md-tooltip md-direction="bottom">Remove User</md-tooltip>
                    </md-button>
                </div> -->

                <md-table-cell class="text-left manAcc">
                    {{user.studentNumber}}
                </md-table-cell>

                <md-table-cell class="text-left manAcc">
                    {{user.studentType}}
                </md-table-cell>

            </md-table-row>
        </md-table>
        
    
    </div>
      <!-- ADD NEW USER MODALS -->

      <!-- <add-new-student-modal v-if="addNewStudent" @close="addNewStudentHide"/>
      <add-new-staff-modal v-if="addNewStaff" @close="addNewStaffHide"/> -->
  </div>
</template>

<script>
import { Pagination } from "@/components";
import axios from 'axios'
//add user modals
//import addNewStudentModal from "./adminCreateStudent.vue";
//import addNewStaffModal from "./adminCreateAccount.vue";

import addNewStudentSpan from "./span_addNewStudent.vue";
import addNewStaffSpan from "./span_addNewStaff.vue";

export default {
    components: {
        Pagination,
        //addNewStudentModal,
        //addNewStaffModal,
        "add-student": addNewStudentSpan,
        "add-staff": addNewStaffSpan
    },
    mounted(){
        this.studentInEnrollment()
    },

    data() {
        return {
            //default modal state
            addNewStudent: false,
            addNewStaff: false,
            search: '',
            
            manageAccountDefaultPagination: 1,

            userList: {
              type:Object,
              default:null,
            }
        };
    },
    methods: {

         addNewStudentShow() {
             this.addNewStudent = !this.addNewStudent;
             this.addNewStaff = false;
             
             if(this.addNewStudent == true) {
             //    console.log("Add new student div is displayed.");
             }
             else {
               //  console.log("Add new student div is not displayed.");
             }
         },

         addNewStaffShow() {
             this.addNewStaff = !this.addNewStaff;
             this.addNewStudent = false;
             
             if(this.addNewStaff == true) {
               //  console.log("Add new staff div is displayed.");
             }
             else {
                 //console.log("Add new staff div is not displayed.");
             }
             
         },


          async studentInEnrollment(studpage=1){
           
 
           await    axios.get('/api/enrolldb?page='+studpage+'&search='+this.search).then(({data})=>{
            
                   this.userList = data
              //     this.currentpage = page

                
                }).catch(({ response })=>{
                  //  console.error(response)
                })

           
            },


        // addNewStudentHide() {
        //     this.addNewStudent = false;
        // },

        // addNewStaffHide() {
        //     this.addNewStaff = false;
        // }
    }

}
</script>

<style>

.__tableDiv {
    padding: 2em !important;
}

.manAcc {
    padding-left: 2em !important;
    margin: auto !important;
}

.__tableMain {
    margin-top: 2em !important;
    max-width: 600px !important;
}

.__addButtons {
    margin-bottom: 2em !important;
}

.hr {
    border: none !important;
    background-color: rgba(170, 170, 170, 0.63) !important;
    height: 0.05em !important;
}
</style>