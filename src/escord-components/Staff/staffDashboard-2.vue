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
                   <h3 class="title">{{getCurrentUser.firstname}} {{getCurrentUser.middlename}} {{getCurrentUser.lastname}}</h3>
                    <h5>MIS Staff</h5>
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

          <!-- <div class="__button-menu md-layout md-gutter md-alignment-center-space-between">

              <div class="__button md-layout-item md-size-20 md-xsmall-size-100 md-layout md-alignment-center-center">
                <md-button
                class="md-raised md-esc-darkgrey">
                    VIEW ARCHIVE
                </md-button>
              </div>
          </div> -->

          <div class="__tabs md-layout">

            <nav-tabs-card no-label tabs-plain>
                <template slot="content">
                    <md-tabs
                    class="md-darkgrey" md-alignment="centered">

                        <!-- SCHOLASTIC RECORD -->
                        <md-tab id="tab-srms" md-label="Scholastic Record Management">
                            <tab-srms/>
                        </md-tab>

                         <md-tab id="tab-con" md-label="Concern">
                            <tab-con/>
                        </md-tab>
                        <!-- EVALUATION FORM -->
                        <!-- ARCHIVE -->
                        <md-tab id="tab-archive" md-label="Archieve Scholastic Record">
                            <tab-arch/>
                        </md-tab>
                        
                    </md-tabs>
                </template>
            </nav-tabs-card>

          </div>
        </div>
        
      </div>
    </div>

    <updateModal v-if="updateModal" @close="updateModalHide"/>
    
    <vue-headful title="Dashboard | STAFF"/>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
import { NavTabsCard } from "@/components";

// modal import
import updateModal from '../Staff/AccountStaff.vue'

//tab content import
import tabSRMS from '../Staff/tab_scholasticRecord.vue';
//import tabEFMS from '../Staff/tab_evaluationForm.vue';
import tabArchTable from '../Staff/staffArchieveTable'
import tabConcern from '../Staff/tab_concern.vue'

export default {
  bodyClass: "profile-page",

   components: {
    updateModal, 
    NavTabsCard,
    "tab-srms": tabSRMS,
    "tab-arch":tabArchTable,
    "tab-con": tabConcern,
   },
   mounted(){
   this.$store.dispatch('displayuser');

   },
  data() {
    return {
       /*modal default value on load*/
      updateModal: false,
    };
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/escord-team-pictures/staff.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },

 ...mapGetters({getCurrentUser: 'getCurrentUser'}),


  },
 methods: {
     /*modal function*/
    updateModalHide() {
      this.updateModal = false;
    },

  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.__button-menu {
    margin: 1.5rem 1rem 1rem !important;
}

.md-button {
  margin-bottom: 1.5em !important;
}

#tab-srms,  #tab-efms {
    padding: 2.75em 0.75em 0.75em 0.75em !important;
}
</style>
