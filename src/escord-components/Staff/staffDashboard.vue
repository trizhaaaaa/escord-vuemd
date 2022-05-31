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

          <div class="__button-menu md-layout md-gutter md-alignment-center-space-between">

              <div class="__button md-layout-item md-size-20 md-xsmall-size-100 md-layout md-alignment-center-center">
                <md-button
                class="md-raised md-esc-darkgrey">
                    VIEW ARCHIVE
                </md-button>
              </div>

              
                  <!-- <md-button class="md-esc-accent md-wd md-round"   type="submit" @click="loggingout">
                    <md-icon>logout</md-icon>logout
            </md-button> -->

              
              <!-- <div class="__search-bar md-layout-item md-size-60 md-xsmall-size-100">
                  <md-field
                  class="has-esc-accent">
                    <md-input
                    placeholder="Search...">
                    </md-input>
                        
                    <md-button
                    class="__searchbtn md-just-icon md-simple md-esc-accent">
                        <md-icon  class="md-size-2x">search</md-icon>
                    </md-button>
                </md-field>
              </div> -->
          </div>

          <div class="profile-content">
            <div class="cards md-layout md-alignment-center-center">
              
              <div class="md-layout-item md-xlarge-size-50 
              md-small-size-50 md-xsmall-size-100">
                 <router-link  to="/scholastic-record-detail">
                  <md-card class="md-with-hover">
                      <md-card-content
                      class="md-layout md-alignment-center-center">
                        <md-icon
                        class="md-size-5x">school</md-icon>
                     <p class="md-title title text-center">
                             
                           Scholastic Record Management </p>
                      </md-card-content>
                  </md-card>
                  </router-link>
                </div>
                
                <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                  <md-card  class="md-with-hover">
                      <md-card-content
                      class="md-layout md-alignment-center-center">
                        <md-icon
                        class="md-size-5x">task</md-icon>
                        <p class="md-title title text-center">Evaluation Form Management</p>
                      </md-card-content>
                  </md-card>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <updateModal v-if="updateModal" @close="updateModalHide"/>
    
    <vue-headful title="Dashboard | STAFF"/>
  </div>
</template>

<script>
// modal import
import updateModal from '../Staff/AccountStaff.vue'
import mapGetters from 'vuex'

export default {
  bodyClass: "profile-page",

   components: {
    updateModal, 
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

.__searchbtn {
    height: 1.5rem !important;
}

.md-with-hover {
    cursor: pointer !important;
}
</style>
