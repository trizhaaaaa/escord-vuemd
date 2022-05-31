<template>
  <md-card class="md-layout-item">
    
    <md-card-content>

      <!-- HEADER -->
      <div class="_top md-layout md-gutter md-alignment-center-space-between">

        <!-- TITLE -->
        <div class="md-layout-item md-size-66 md-layout md-gutter md-alignment-center-center">
          <p class="md-layout-item md-size-100 md-headline text-esc-darkgrey text-center">
            <strong>UNIVERSITY OF CALOOCAN CITY</strong>
          </p>

          <p class="md-layout-item md-size-100 text-center text-esc-darkgrey _schAddress">
            Gen. San Miguel St. Sangandaan Caloocan City
          </p>

          <p class="md-layout-item md-size-100 md-subheading text-esc-darkgrey text-center">
            <strong>Computer Studies Department</strong>
          </p>

          <p class="md-layout-item md-size-100 text-center">
            <strong>{{getScholRecord.course}}</strong>
          </p>
        </div>
        <div class="md-layout-item md-size-33 md-layout md-gutter md-alignment-center-center">
          
          <!-- FOR SHIFTER -->
          <table class="_forShifter">
            <tr class="text-center">
              <th colspan="2">For Shifter</th>
            </tr>

            <tr class="text-center">
              <th>A.Y.:</th>
              <th>Course</th>
            </tr>

            <tr class="text-center">
              <th>From:</th>
              <td>20XX</td>
            </tr>

            <tr class="text-center">
              <th>To:</th>
              <td>20XX</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- STUDENT INFO -->
      <div class="md-layout md-gutter md-alignment-center-center">

        <table class="_studInfo">

          <tr>
            <th colspan="2">NAME:</th>
            <td colspan="3">
              {{getScholRecord.surname}}, {{getScholRecord.firstname}} {{getScholRecord.middlename}}.
            </td>

            <th colspan="2">COURSE/YR/SEC:</th>
            <td colspan="1">
              {{getScholRecord.course}}{{getScholRecord.section}}
            </td>
            
            <th colspan="2">CONTACT NO:</th>
            <td colspan="2">{{getScholRecord.contact}}</td>
          </tr>

          <tr>
            <th colspan="2">ADDRESS:</th>
            <td colspan="6">{{getScholRecord.address}}</td>

            <th colspan="2">STUDENT NO:</th>
            <td colspan="2">{{getScholRecord.student_number}}</td>
          </tr>

           <tr>
            <th colspan="2">BIRTHDAY:</th>
            <td colspan="3">{{getScholRecord.birthday}}</td>

            <th colspan="2">BIRTHPLACE:</th>
         <!--    <td colspan="5">{{getScholRecord.birthplace}}</td> -->
          </tr>

          <tr>
            <th colspan="3">ELEMENTARY SCHOOL:</th>
            <td colspan="5">{{getScholRecord.elementary}}</td>

            <th colspan="2">GRAD. YR:</th>
            <td colspan="2">{{getScholRecord.elemyeargrad}}</td>
          </tr>

          <tr>
            <th colspan="3">HIGH SCHOOL:</th>
            <td colspan="5">{{getScholRecord.highschool}}</td>

            <th colspan="2">GRAD. YR:</th>
            <td colspan="2">{{getScholRecord.hsyeargrad}}</td>
          </tr>
        </table>
      </div>
      
      <!-- FIRST YEAR GRADES -->
      <div class="_gradeTbl">
        <first/>
      </div>

      <!-- SECOND YEAR GRADES -->
      <div class="_gradeTbl html2pdf__page-break">
        <first/>
      </div>

      <!-- THIRD YEAR GRADES -->
      <div class="_gradeTbl">
        <first/>
      </div>

      <!-- FOURTH YEAR GRADES -->
      <div class="_gradeTbl">
        <first/>
      </div>


    </md-card-content>

  <!-- <md-card-actions>
                          
                      TABLESSS--
                      FIRST YEAR--

                        <div>
                          <first/>
                        </div>

                        </md-card-actions>

    SECOND YEAR--

    <md-card-actions>
                        <div>
                          <second/>
                        </div>
  THIRD YEAR--

  </md-card-actions>
  <md-card-actions>
                        <div>
                          <third/>
                        </div>
  FOURTH YEAR--
      </md-card-actions>

        <md-card-actions>
                        <div>
                          <four/>
                        </div>


                  </md-card-actions>
          <md-card-actions>
        
                      <md-button class=" md-simple md-esc-accent">Download</md-button>
          </md-card-actions> -->

  </md-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { mapActions, mapGetters} from "vuex";
import first from './table_srms/Firstyear.vue'
//import second from './table_srms/Secondyear.vue'
//import third from './table_srms/Thirdyear.vue'
//import four from './table_srms/Fouryear.vue'

  export default {
    name: 'ScholasticForm',
    mixins: [validationMixin],
    components:{
      first,
      //second,
      //third,
      //four
  
    },
    mounted(){
          //  this.$store.dispatch('displayuser');

           
            
            this.$store.dispatch('getScholasticRecord',this.$route.params.student_number);
         
    },
    data: () => ({
      
      student_info : {
        studNum: "20191172",
        firstName: "TRIZHALYN",
        lastName: "MAGLANGIT",
        _MI: "L",
        courseLong: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE",
        courseShort: "BSCS",
        year: "3",
        section: "A",
        address: "2325 CAMARIN RD. CAMARIN, BRGDY, 178, CAMARIN, CALOOCAN CITY",
        contactNum: "092715217764",
        birthday: "JANUARY 3, 2001",
        birthplace: "QUEZON CITY",
        elemschool: "CAMARIN D ELEMENTARY SCHOOL",
        elemgradyr: "2013",
        highschool: "STI COLLEGE - FAIRVIEW",
        hsgradyear: "2019"
      }
      }
    ),

    computed:{
  ...mapGetters({getScholRecord: 'getScholRecord'}),
    },

    methods: {

    }
    
    
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .md-card {
    max-width: 37em !important;
  }

  ._top {
    margin: 1.5em 0 0 0 !important;
  }

  ._schAddress {
    font-weight: 500 !important;
  }

  ._forShifter, ._studInfo {
    border-collapse: collapse;
    border: 1px solid #545454;
    width: 100% !important;
  }

  ._forShifter th, ._forShifter td, ._studInfo th, ._studInfo td {
    border: 1px solid #545454;
    //padding: 2px !important;
  }

  ._studInfo th {
    font-size: .95em !important;
    text-align: left !important;
    padding: 0.25em 0.25em 0.25em 0.75em!important;
    font-weight: 600 !important;
  }

  ._studInfo td {
    padding: 0.25em 1em !important;
    font-weight: 500 !important;
    font-size: .856em !important;
  }

  ._gradeTbl {
    margin-top: 0.75em !important;
  }
  
</style>