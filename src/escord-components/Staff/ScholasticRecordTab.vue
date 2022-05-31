<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
</div>
            
          <!-- START YOUR CODE HERE -->
    <div>

     <div class = "md-layout escord md-gutter md-alignment-center-center">
         <div class = "md-layout-item md-size-33 md-layout md-gutter md-alignment-center-center">
             <md-button @click="showevaluationtable">EVALUATION FORM</md-button>
         </div>
         <div class = "md-layout-item md-size-33 md-layout md-gutter md-alignment-center-center">
                <md-button @click="showscholastictable">SCHOLASTIC RECORD</md-button>
         </div>

  <!--<md-button @click="showevaluationtable">EVALUATION FORM</md-button>
  <md-button @click="showscholastictable">SCHOLASTIC RECORD</md-button>-->
  
  </div>
  <!---Evaluation Form Tab-->
  <div v-if="defaultvalbutton ==='scholastic'">


    <md-field>
            <label>SEARCH BAR</label>
            <md-input v-model="search"></md-input>
            <span class="md-helper-text">search your card</span>
            <md-button class="md-esc-accent" @click="scholmis">
              Search
            </md-button>
          </md-field>

  <!--Start..-->
    <md-table v-model="users.data" md-sort="name" md-sort-order="asc" >
  
   
        <md-table-row class="sec">
                <md-table-head class="text-center">SRMS ID.</md-table-head>
                <md-table-head class="text-center">Student no.</md-table-head>
                <md-table-head class="text-center">Student Name</md-table-head>
                <md-table-head class="text-center">Program</md-table-head>
                <md-table-head class="text-center">Year and Section</md-table-head>
                <md-table-head class="text-center"></md-table-head>


                
              </md-table-row>

       <md-table-row v-for="(_, index) in users.data" :key="index">


                        <md-table-cell class="text-center">
                      {{users.data[index].srms_id}}
                </md-table-cell>

                    <md-table-cell class="text-center">
                      {{users.data[index].student_number}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{users.data[index].firstname}}   {{users.data[index].middlename}}   {{users.data[index].surname}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{users.data[index].course}}
                </md-table-cell>

                <md-table-cell class="text-center">
                      {{users.data[index].section}}
                </md-table-cell>

             
        
      </md-table-row>
    <pagination no-arrows   :page-count="users.last_page" :value="users.current_page" :total="users.total" @input="scholmis" />


    </md-table>
<!--END-->

  </div>


  <div  v-else>


    <md-field>
            <label>SEARCH BAR</label>
            <md-input v-model="search"></md-input>
            <span class="md-helper-text">search your card</span>
            <md-button class="md-esc-accent" @click="evalmis">
              Search
            </md-button>
          </md-field>

  <!--Start..-->
    <md-table v-model="eval.data" md-sort="name" md-sort-order="asc" >
  
   
        <md-table-row class="sec">
                <md-table-head class="text-center">Evaluation Number</md-table-head>
                <md-table-head class="text-center">Student Number</md-table-head>
                <md-table-head class="text-center">Student Name</md-table-head>
                <md-table-head class="text-center">Program</md-table-head>
                <md-table-head class="text-center">Year and Section</md-table-head>
                <md-table-head class="text-center"></md-table-head>

                
              </md-table-row>

       <md-table-row v-for="(_, index) in eval.data" :key="index">

                <md-table-cell class="text-center">
                      {{eval.data[index].evalform_id}}
                </md-table-cell>

            
                    <md-table-cell class="text-center">
                      {{eval.data[index].student_number}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{eval.data[index].firstname}}   {{eval.data[index].middlename}}   {{eval.data[index].surname}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{eval.data[index].course}}
                </md-table-cell>

                <md-table-cell class="text-center">
                      {{eval.data[index].section}}
                </md-table-cell>

             
        
      </md-table-row>
    <pagination no-arrows   :page-count="eval.last_page" :value="eval.current_page" :total="eval.total" @input="scholmis" />

    </md-table>

  </div>


        
        </div>
      </div>
    </div>
    <vue-headful title="SR Detail"/>
  </div>
</template>

<script>

import axios from 'axios'
import {Pagination} from '@/components'



export default {
  bodyClass: "profile-page",
  name: 'TableSearch',
  components:{
  Pagination,

  },
   data: () => ({
      defaultvalbutton: '',
      users: {
          type:Object,
        default:null
      },

        eval: {
          type:Object,
        default:null
      },
      search:'',
      
    }),

    mounted(){
     this.scholmis()
     this.evalmis()
   
    },

    //showscolmis

    methods:{
        showscholastictable(){
            this.defaultvalbutton = 'scholastic';
           
        },

        showevaluationtable(){
            this.defaultvalbutton = '';
        },

        async scholmis(scholpage=1){
           
 
           await    axios.get('/api/showscolmis?page='+scholpage+'&search='+this.search).then(({data})=>{
            
                   this.users = data
              //     this.currentpage = page

                
                }).catch(({ response })=>{
                   //   console.error(response)
                })

           
},


  async evalmis(page=1){
           
 
           await    axios.get('/api/evalform?page='+page+'&search='+this.search).then(({data})=>{
            
                   this.eval = data
              //     this.currentpage = page
                
                }).catch(({ response })=>{
                 //     console.error(response)
                })


                
           
},

        },  
        props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }

  };
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
.escord{
    margin: 1.5em 0 !important;
}
</style>