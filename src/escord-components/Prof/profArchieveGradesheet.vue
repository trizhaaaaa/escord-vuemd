<template>
  <div>
            <md-field>
            <label>SEARCH BAR</label>
            <md-input v-model="search"></md-input>
            <span class="md-helper-text">search your data</span>
            <md-button class="md-esc-accent" >
              Search
            </md-button>
          </md-field>


      <md-table v-model="getarchgradesh.data" md-sort="name" md-sort-order="asc" >
  
    <h1 class="md-title text-center">Gradesheet</h1>
        <md-table-row class="title">
                <md-table-head class="text-center">Actions</md-table-head>
                <md-table-head class="text-center">Gradesheet ID</md-table-head>
                <md-table-head class="text-center">Course</md-table-head>
                <md-table-head class="text-center">Year</md-table-head>
                <md-table-head class="text-center">Section</md-table-head>

                
              </md-table-row>

       <md-table-row v-for="(_, index) in getarchgradesh.data" :key="index">

              
 <md-table-cell class="text-center">
               
              <router-link :to="{ name: 'GradesheetArchieve', params: {archievegs: getarchgradesh.data[index].gradesheetid } }">VIEW</router-link>
                 
            </md-table-cell>


                
                   <md-table-cell class="text-center">
                      {{getarchgradesh.data[index].gradesheetid}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{getarchgradesh.data[index].course_short}}
                </md-table-cell>

                <md-table-cell class="text-center">
                      {{getarchgradesh.data[index].course_year}}
                </md-table-cell>
              <md-table-cell class="text-center">
                      {{getarchgradesh.data[index].course_section}}
                </md-table-cell>
                 
    
      </md-table-row>

    <pagination no-arrows  :page-count="getarchgradesh.last_page" :value="getarchgradesh.current_page" :total="getarchgradesh.total" @input="gradeshowarchieve" />

    </md-table>

  </div>



</template>

<script>

import axios from 'axios'
import {Pagination} from '@/components'

export default {

    name:'ProfessorArchieveTable',
     components:{
  Pagination,

    },

    mounted() {
       this.gradeshowarchieve()
    },

     data: () => ({

     getarchgradesh:{   
                  type:Object,
                    default:null},

        search: '',
          
    }),

    methods:{
             
          
             
  async  gradeshowarchieve(page=1) {
     await     axios.get('/api/archievegs/'+this.$route.params.userid+'?page='+page+'&search='+this.search).then(({data})=>{
        this.getarchgradesh = data
          this.currentpageGrade = page

             }).catch((errors)=>{
      
             this.error =  errors.response.data;
             })
     },
    }

}
</script>

<style>

</style>