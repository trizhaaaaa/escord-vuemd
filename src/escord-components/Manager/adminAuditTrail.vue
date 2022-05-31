<template>
  <div class="">

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

                <md-table-cell class="manAcc">
                    {{activity.activityDesc}}
                </md-table-cell>

            </md-table-row>
        </md-table>
    </div>
      
  </div>
</template>

<script>
import { Pagination } from "@/components";

export default {
    components: {
        Pagination
    },

    data() {
        return {
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
        }
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
</style>