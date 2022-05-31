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
                    <h3 class="title"> {{getCurrentUser.name}}</h3>
                  <h5>{{getScholRecord.student_number}}  {{getScholRecord.course}} | {{getScholRecord.section}}</h5>
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
          </div>

          <div class="profile-content">
            <div class="cards md-layout md-alignment-center">
              
              <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100" @click="showSR_prev">
                  <md-card class="md-with-hover">
                      <md-card-content>
                        <p class="md-title title text-center">Scholastic Record</p>
                        <p class="text-center">Click to view your scholastic record form</p>
                      </md-card-content>
                  </md-card>
                   
                </div>

                <!-- PREVIEW -->
                <div v-if="showSR" class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                  
                  <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button @click="printSR" class="md-raised md-esc-darkgrey md-round md-dense">Download</md-button>
                  </div>

                  <stud-scol/>

                  <vue-to-pdf
                  filename = "ScholasticRecord"
                  pdf-format="letter"
                  :preview-modal = "true"
                  :manual-pagination = "true"
                  :pdf-quality = "2"
                  :enable-download= "true"
                  ref = "downloadSR_content">
                    <section slot="pdf-content">
                      <div class="md-layout md-alignment-center-center">
                        <stud-scol class="md-layout-item md-size-85"/>  
                      </div> 
                    </section>
                  </vue-to-pdf>
                  
                </div>
                
                <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100"  @click="showEF_prev">
                  <md-card  class="md-with-hover">
                     
                      <md-card-content>
                        <p class="md-title title text-center">Summary of Grades</p>
                        <p class="text-center">Click to view and download your evaluation form </p>
                      </md-card-content>
                       

                  </md-card>
                
                </div>

                <!-- PREVIEW -->
                <div v-if="showEF" class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                  <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button @click="printEF" class="md-raised md-esc-darkgrey md-round md-dense">Download</md-button>
                  </div>
                  <stud-eval/>

                  <vue-to-pdf
                  filename = "SummaryOfGrades"
                  pdf-format="a4"
                  :preview-modal = "true"
                  :pdf-quality = "2"
                  :manual-pagination = "true"
                  :enable-download= "true"
                  ref = "downloadEF_content">
                    <section slot="pdf-content">
                      <div class="md-layout md-alignment-center-center">
                        <stud-eval class="md-layout-item md-size-85"/>  
                      </div> 
                    </section>
                  </vue-to-pdf>
                </div>

            </div>
          </div>
        </div>
        
      </div>
      

      <updateModal v-if="updateModal" @close="updateModalHide"/>
    
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

//import vuehtml2pdf
import VueHtml2pdf from 'vue-html2pdf'


export default {
  bodyClass: "profile-page",
 components: {
     updateModal,
    studScol,
    studEval,
    updateModal,

    "vue-to-pdf": VueHtml2pdf
  },
  mounted(){
  this.$store.dispatch('displayuser');
            this.$store.dispatch('getScholasticRecord',this.$route.params.student_number);

  this.getsrms_id()
  },
  data() {
    return {
      /*modal default value on load*/
      updateModal: false,
      srms_id:'',
     /*  studLN: "DELA CRUZ",
      studFN: "JUAN",
      studMN: "GONZALES", */

      // studLN: "DELA CRUZ",
      // studFN: "JUAN",
      // studMN: "GONZALES",
      studProg: "Bachelor of Science in Computer Science",
      studYr: "3",
      studSec:"A",

      //showForm
      showSR: false,
      showEF: false
    
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
      ...mapGetters({getCurrentUser: 'getCurrentUser'}),
  ...mapGetters({getScholRecord: 'getScholRecord'}),

  },
  methods: {
    /* show SR */
    showSR_prev () {
      this.showSR = !this.showSR;
      this.showEF = false;
    },

    /* show EF */
    showEF_prev () {
      this.showEF = !this.showEF;
      this.showSR = false;
    },

     /*modal function*/
    updateModalHide() {
      this.updateModal = false;
    },
    async getsrms_id(){ 
           await axios.get('/api/getsrmsid/'+this.$route.params.student_number).then(({data})=>{
                    this.srms_id = data[0].srms_id

                    //  console.log(this.srms_id)
                }).catch(({ response })=>{
                    //  console.error(response)
        })
           
},
    

    /* DOWNLOAD EF */
    printEF() {
      this.$refs.downloadEF_content.generatePdf()
    },

    /* DOWNLOAD SR  */
    printSR() {
      this.$refs.downloadSR_content.generatePdf()
    },
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
