<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
            
            <div class="md-layout md-gutter md-alignment-center-center">

                <div class="__name md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <h3 class="title">{{ getcurrentUser.name }}</h3>
                </div>

                <div class="__desc md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <h5>MIS Manager</h5>
                </div>

                <div class="__desc md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                    <md-button
                    class="md-simple md-dense md-esc-darkgrey"
                    @click="updateModal = true">
                        UPDATE ACCOUNT
                    </md-button>
                </div>
            </div>

            <div class="__tabs md-layout">

                <nav-tabs-card no-label tabs-plain>
                <template slot="content">
                    <md-tabs
                    class="md-darkgrey" md-alignment="centered">

                        <!-- OVERVIEW -->
                        <md-tab id="tab-overview" md-label="Overview">
                            <admin-overview/>
                        </md-tab>

                        <!-- MANAGE ACCOUNT -->
                        <md-tab id="tab-manage-account" md-label="Manage Account">
                            <admin-manage-account/>
                        </md-tab>

                        <!-- AUDIT TRAIL -->
                        <md-tab id="tab-audit-trail" md-label="Audit Trail">
                            <admin-audit-trail/>
                        </md-tab>
                        
                    </md-tabs>
                </template>
            </nav-tabs-card>

            </div>
                
            <updateModal v-if="updateModal" @close="updateModalHide"/>

        </div>
      </div>
    </div>
    <vue-headful title="Dashboard | MANAGER"/>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

// modal import
import updateModal from '../Manager/adminAccount.vue'
import { mapGetters} from "vuex"

//tab content import
import admOverview from '../Manager/adminOverview.vue';
import admManageAccount from '../Manager/adminManageAccount.vue';
import admAuditTrail from '../Manager/adminAuditTrail.vue';
import AccountMan from './AccountManage.vue' //this is with function

export default {
  bodyClass: "profile-page",
  components: {
    updateModal, 
    NavTabsCard,
    "admin-overview": admOverview,
    "admin-manage-account": AccountMan, //admin Manage Account
    "admin-audit-trail": admManageAccount //change this to audit trail
   },

   mounted(){
        this.$store.dispatch('displayuser');

   },
  data() {
    return {
        /*modal default value on load*/
      updateModal: false,

       /* ADMIN INFO */
       admName: "JUAN DELA CRUZ",

    };
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
    },

 ...mapGetters({getcurrentUser: 'getCurrentUser'}),

  },

};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.__name h3 {
    margin-bottom: 0 !important;
}

.md-button {
  margin-bottom: 1.5em !important;
}

</style>
