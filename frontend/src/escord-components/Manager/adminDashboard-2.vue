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
                    <h3 class="title">{{ admName }}</h3>
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
                            <div class="__wrap md-layout md-gutter"> 

                            <md-subheader>USERS</md-subheader> 

                            <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                                <md-card
                                class="md-layout-item md-size-30 md-xsmall-size-100 md-small-size-30"
                                v-for="cardInfo in overviewCards" :key="cardInfo.category">

                                    <md-card-content>
                                        <div class="md-layout md-gutter md-alignment-center-space-between">

                                            <div class="md-layout-item md-size-50 md-small-size-100 md-layout md-gutter md-alignment-center-center">
                                                <h3 class="title">{{cardInfo.category}}</h3>
                                            </div>

                                            <div class="md-layout-item md-size-50 md-small-size-100 md-medium-size-33 md-layout">
                                                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                                    <h3 class="__total" v-if="cardInfo.total==0">{{totalStudents}}</h3>

                                                    <h3 class="__total" v-else>{{cardInfo.total}}</h3>
                                                </div>

                                                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                                    <p class="md-caption">TOTAL</p>
                                                </div>
                                            </div>
                        
                                        </div>
                                    </md-card-content>
                                </md-card>
                                </div>

                                <md-subheader>STUDENTS</md-subheader>

                                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                                <md-card
                                class="md-layout-item md-size-20 md-xsmall-size-45 md-small-size-45"
                                v-for="studentInfo in studentCards" :key="studentInfo.program">

                                    <md-card-content>
                                        <div class="md-layout md-gutter md-alignment-center-space-between">

                                            <div class="md-layout-item md-size-50 md-small-size-100 md-layout md-gutter md-alignment-center-center">
                                                <h3 class="title">{{studentInfo.program}}</h3>
                                            </div>

                                            <div class="md-layout-item md-size-50 md-small-size-100 md-medium-size-33  md-layout">
                                                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                                    <h3 class="__total">{{studentInfo.total}}</h3>
                                                </div>

                                                <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                                                    <p class="md-caption">TOTAL</p>
                                                </div>
                                            </div>
                        
                                        </div>
                                    </md-card-content>
                                </md-card>
                                </div>

                            </div>
                        </md-tab>

                        <!-- MANAGE ACCOUNT -->
                        <md-tab id="tab-manage-account" md-label="Manage Account">
                        <div class="__tableDiv">

                            <div class="md-layout md-gutter md-alignment-center-center">

                                <div class="__addButtons md-layout-item md-size-100 md-layout md-gutter md-alignment-center-space-between">

                                    <div class="md-layout-item md-size-50 md-layout md-gutter md-alignment-center-center">
                                        <md-button
                                        class="md-round md-raised md-dense md-wd md-esc-darkgrey"
                                        @click="addNewStudent = true">
                                            ADD STUDENT
                                        </md-button>
                                    </div>

                                    <div class="md-layout-item md-size-50 md-layout md-gutter md-alignment-center-center">
                                        <md-button
                                        class="md-round md-raised md-dense md-wd md-esc-darkgrey"
                                        @click="addNewStaff = true">
                                            ADD STAFF
                                        </md-button>
                                    </div>
                                </div>
                                
                                <div class="md-layout-item md-size-33
                                md-xsmall-size-100 md-layout md-gutter md-alignment-center-center">
                                    <pagination 
                                    type = "esc-accent"
                                    no-arrows v-model="manageAccountDefaultPagination" :page-count="5">
                                    </pagination>
                                </div>

                                <div class="md-layout-item md-size-66 md-xsmall-size-100 md-layout md-gutter md-alignment-center-space-between">
                                    <div class="md-layout-item md-size-85">
                                        <md-field
                                        class="has-esc-accent">
                                            <label>Search..</label>
                                            <md-input></md-input>
                                        </md-field>
                                    </div>

                                    <div class="md-layout-item md-size-15 md-layout md-gutter md-alignment-center-center">
                                        <md-button class="md-just-icon md-round md-esc-accent md-raised">
                                            <md-icon>search</md-icon>
                                        </md-button>
                                    </div>
                                    
                                </div>
                            </div>

                            

                            <md-table 
                                v-model="userList"
                                class="__tableMain mx-auto">

                                <md-table-row class="title">
                                    <!-- <md-table-head class="text-center">Actions</md-table-head> -->
                                    <md-table-head class="manAcc">Name</md-table-head>
                                    <md-table-head class="manAcc">Category</md-table-head>
                                </md-table-row>

                                <md-table-row
                                v-for="(user, index) in userList" :key="index">

                                    <!-- <div class="md-layout md-gutter md-alignment-center-center">
                                        <md-button
                                        class="md-danger md-raised md-simple md-just-icon">
                                            <md-icon>delete</md-icon>
                                            <md-tooltip md-direction="bottom">Remove User</md-tooltip>
                                        </md-button>
                                    </div> -->

                                    <md-table-cell class="text-left manAcc">
                                        {{user.name}}
                                    </md-table-cell>

                                    <md-table-cell class="text-left manAcc">
                                        {{user.category}}
                                    </md-table-cell>

                                </md-table-row>
                            </md-table>
                        </div>
                        </md-tab>

                        <!-- AUDIT TRAIL -->
                        <md-tab id="tab-audit-trail" md-label="Audit Trail">
                            <div class="__tableDiv">

                            <div class="md-layout md-gutter md-alignment-center-center">
                                <div class="md-layout-item md-layout md-gutter md-alignment-center-center">
                                    <pagination 
                                    type = "esc-accent"
                                    no-arrows v-model="auditTrailDefaultPagination" :page-count="5">
                                    </pagination>
                                </div>
                            </div>

                            <!-- not sorted by date && time -->
                            <md-table 
                                v-model="activityList"
                                class="__tableMain mx-auto">

                                <md-table-row class="title">
                                    <!-- <md-table-head class="text-center">Actions</md-table-head> -->
                                    <md-table-head class="manAcc">Date</md-table-head>
                                    <md-table-head class="manAcc">Name</md-table-head>
                                    <md-table-head class="manAcc">Category</md-table-head>
                                    <md-table-head class="manAcc">Activity</md-table-head>
                                </md-table-row>

                                <md-table-row
                                v-for="(activity, index) in activityList" :key="index">

                                    <!-- <div class="md-layout md-gutter md-alignment-center-center">
                                        <md-button
                                        class="md-danger md-raised md-simple md-just-icon">
                                            <md-icon>delete</md-icon>
                                            <md-tooltip md-direction="bottom">Remove User</md-tooltip>
                                        </md-button>
                                    </div> -->
                                    <md-table-cell class="text-left manAcc">
                                        {{activity.activityDate}}  {{activity.activityTime}}
                                    </md-table-cell>

                                    <md-table-cell class="text-left manAcc">
                                        {{activity.name}}
                                    </md-table-cell>

                                    <md-table-cell class="text-left manAcc">
                                        {{activity.category}}
                                    </md-table-cell>

                                    <md-table-cell class="text-justify manAcc">
                                        {{activity.activityDesc}}
                                    </md-table-cell>

                                </md-table-row>
                            </md-table>
                        </div>
                        </md-tab>
                        
                    </md-tabs>
                </template>
            </nav-tabs-card>

            </div>
                
            <updateModal v-if="updateModal" @close="updateModalHide"/>

            <!-- ADD NEW USER MODALS -->

            <add-new-student-modal v-if="addNewStudent" @close="addNewStudentHide"/>
            <add-new-staff-modal v-if="addNewStaff" @close="addNewStaffHide"/>

        </div>
      </div>
    </div>
    <vue-headful title="Dashboard | MANAGER"/>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";
import { Pagination } from "@/components";

// modal import
import updateModal from '../Manager/adminAccount.vue'

//add user modals
import addNewStudentModal from "./adminCreateStudent.vue";
import addNewStaffModal from "./adminCreateAccount.vue";

export default {
  bodyClass: "profile-page",
  components: {
    updateModal, 
    NavTabsCard,
    Pagination,
    addNewStudentModal,
    addNewStaffModal
   },
  data() {
    return {
        /*modal default value on load*/
      updateModal: false,

       /* ADMIN INFO */
       admName: "JUAN DELA CRUZ",

       /* OVERVIEW  DATA*/
       overviewCards: [
                {
                    category: "Student",
                    total: 0
                },
                {
                    category: "Professor",
                    total: 7
                },
                {
                    category: "Staff",
                    total: 7
                }
            ],

            studentCards: [
                {
                    program: "BSCS",
                    total: 7
                },
                {
                    program: "BSIS",
                    total: 7
                },
                {
                    program: "BSIT",
                    total: 7
                },
                {
                    program: "BSEMC",
                    total: 7
                }
            ],
            /* END OF OVERVIEW DATA */

            /* MANAGE ACCOUNT DATA */

            //default modal state
            addNewStudent: false,
            addNewStaff: false,

            manageAccountDefaultPagination: 1,

            userList: [
                {
                    name: "NIKKI E. BA-ALAN",
                    category: "STAFF"
                },
                {
                    name: "JACQUELINE C. PORRAL",
                    category: "PROFESSOR"
                },
                {
                    name: "TRIZHALYN L. MAGLANGIT",
                    category: "STAFF"
                },
                {
                    name: "GABRIELLE D. NAPOTO",
                    category: "STAFF"
                },
                {
                    name: "GERALD T. CHAVEZ",
                    category: "PROFESSOR"
                },
                {
                    name: "MIKKI GREGORIO",
                    category: "STAFF"
                }
            ],
            /* END OF MANAGE ACCOUNT DATA */

            /* AUDIT TRAIL DATA */
            auditTrailDefaultPagination: 1,

            activityList: [
                {
                    activityDate: "05-02-19",
                    activityTime: "14:06",
                    name: "NIKKI E. BA-ALAN",
                    category: "STAFF",
                    activityDesc: "Added student",
                },
                {
                    activityDate: "05-02-19",
                    activityTime: "14:05",
                    name: "JACQUELINE C. PORRAL",
                    category: "PROFESSOR",
                    activityDesc: "Added gradesheet",
                },
                {
                    activityDate: "05-02-19",
                    activityTime: "13:05",
                    name: "TRIZHALYN L. MAGLANGIT",
                    category: "PROFESSOR",
                    activityDesc: "Added gradesheet",
                },
                
            ]
            /* END OF AUDIT TRAIL DATA */

    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    }
  },
  computed: {

    totalStudents() {
        return this.studentCards.reduce((acc, item) => acc + item.total, 0);
    },

    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

  methods: {
    /*modal function*/
    updateModalHide() {
      this.updateModal = false;
    },

    addNewStudentHide() {
        this.addNewStudent = false;
    },

    addNewStaffHide() {
        this.addNewStaff = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.__name h3 {
    margin-bottom: 0 !important;
}

.__tabs {
    margin: 1.75em 1em 1.5em 1em !important;
}

.__wrap {
    padding: 2em !important;
}

.title {
    margin-bottom: 0 !important;
}

.__total {
    margin: 0.25em 0 !important;
    font-size: 3em;
}

.__tableDiv {
    padding: 2em !important;
}

.manAcc {
    padding-left: 2em !important;
    margin: auto !important;
}

.__tableMain {
    margin-top: 2em !important;
    max-width: 625px !important;
}

.__addButtons {
    margin-bottom: 2em !important;
}
</style>
