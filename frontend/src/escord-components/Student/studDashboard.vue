<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-75 mx-auto">
              <div class="profile">

                <div class="avatar">
                  <img
                    :src="img"
                    alt="CircleIMG PFP"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>


                <div class="md-layout md-alignment-center-center">

                  <div class="md-layout-item md-size-100  name">
                    <h3 class="title">{{getcurrentUser.name}}</h3>
                  <h5>{{getcurrentUser.student_number}}  {{studProg}} | {{studYr}}{{studSec}}</h5>
                  </div>

                  <div class="md-layout-item md-size-100 ">
                    <md-button
                    class="md-simple md-dense md-esc-darkgrey"
                    @click="updateModal = true">
                        UPDATE ACCOUNT
                    </md-button>
                  </div>

                </div>
                
                
              </div>
            </div>
          </div>
          <!-- <div class="">
            <h2 class="md-display-1">YOUR FILES</h2>
          </div> -->

          <div class="md-layout md-gutter md-alignment-center-space-between">
            <div class="md-layout-item md-size-66">
              <h2 class="md-display-1">YOUR FILES</h2>
            </div>
            <!-- <div class="md-layout-item md-size-33 md-layout">
              <md-button
              class="md-esc-darkgrey md-dense"
              @click="updateModal = true">
                UPDATE ACCOUNT
              </md-button>
            </div> -->
          </div>
          
           <!-- <md-button class="md-esc-accent md-wd md-round"   type="submit" @click="loggingout">
                    <md-icon>logout</md-icon>logout
            </md-button> -->

          <div class="profile-content">
            <div class="cards md-layout md-alignment-center">
              
              <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100">
                  <router-link :to="{ name: 'Scholastic RecordStudent' }">
                 
                  <md-card class="md-with-hover">
                      <md-card-content>
                        <p class="md-title title text-center">Scholastic Record</p>
                        <p class="text-center">Click to view your scholastic record form</p>
                      </md-card-content>
                  </md-card>
                     </router-link>
                </div>
                
                <div class="md-layout-item md-medium-size-50   md-small-size-75 md-xsmall-size-100">
                  <router-link :to="{ name: 'EscTableEval', params:{srms_id: srms_id} }">
                  <md-card  class="md-with-hover">
                     
                      <md-card-content>
                        <p class="md-title title text-center">Summary of Grades</p>
                        <p class="text-center">Click to view and download your evaluation form </p>
                      </md-card-content>
                       

                  </md-card>
                     </router-link>
                </div>
            </div>
          </div>
        </div>
        
      </div>

    
      
     <updateModal v-if="updateModal" @close="updateModalHide"/>
    
  
  <!--<div> <acc-stud/> </div> -->
  
   
  


   <!--<div> <acc-management/> </div>--> 


    </div>
    <vue-headful title="Dashboard | STUDENT"/>
  </div>
</template>

<script>


import { mapActions, mapGetters} from "vuex";

import studScol from './studScholastic.vue'
import studEval from './studEvaluation.vue'
import studTableEval from './studEvalTable.vue'



// modal import
import updateModal from './AccountStudent.vue'
import axios from 'axios'
import router from '../../route'

export default {
  bodyClass: "profile-page",
 components: {
     updateModal,
  },
  mounted(){
  this.$store.dispatch('displayuser');
  this.getsrms_id()
  },
  data() {
    return {
      /*modal default value on load*/
      updateModal: false,
      srms_id:'',
      studLN: "DELA CRUZ",
      studFN: "JUAN",
      studMN: "GONZALES",
      studProg: "Bachelor of Science in Computer Science",
      studYr: "3",
      studSec:"A",
    
    };
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
      ...mapGetters({getcurrentUser: 'getCurrentUser'}),

  },
  methods: {

    clickEvalCard(){
        var srms = this.srms_id
       
    
    },
    clickSRMSCard(){

    },
     /*modal function*/
    updateModalHide() {
      this.updateModal = false;
    },
    async getsrms_id(){ 
           await axios.get('/api/getsrmsid/'+this.$route.params.student_number).then(({data})=>{
                    this.srms_id = data[0].srms_id

                    console.log(this.srms_id)
                }).catch(({ response })=>{
                    console.error(response)
        })
           
},
    
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
