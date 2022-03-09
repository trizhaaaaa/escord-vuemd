<template>
  <v-container
    fluid
    style="margin: 0px; padding: 20px; width: 100%"
    fill
    height
  >
    <h1 class="font-weight-bold text-h2 leftPadding">guide</h1>
    <br />
    <!--START OF TABBED SELECTION-->
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="bg-color"
        grow
        class="tabTitle bg-color--text"
      >
        <v-tab
          v-for="userType in guideList"
          :key="userType.tab"
          style="font-size: 20px"
          active-class="selectedList"
        >
          {{ userType.category }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="userType in guideList" :key="userType.tab">
          <!--START OF CARD LIST-->
          <v-card
            class="card-style"
            color="bg-color"
            flat
            v-for="guideItem in userType.guide"
            :key="guideItem.text"
          >
          <v-row align="start">
            <v-col>
              <v-card-title
              style="
                color: #ff9807;
                padding: 20px 10px 10px 10px;
                font-size: 20px;
                font-weight: bold;
              "
              v-html="guideItem.title"
            ></v-card-title>
            <v-card-text
              style="
                color: #ffffff;
                padding: 0 40px 20px 40px;
                font-size: 20px;
                text-align: justify;
              "
              v-html="guideItem.text"
            ></v-card-text>
            </v-col>
            <v-col class="shrink">
              <!-- v-bind:aspect-ratio="guideItem.aspRatio" -->
              <v-img
              v-bind:max-width="guideItem.maxWidth"
              v-bind:src="guideItem.img"
              class="guide-img"
            ></v-img>
            </v-col>
          </v-row>
            

            
            <v-divider></v-divider>
          </v-card>
          <!--END OF CARD LIST-->
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <!--END OF TABBED SELECTION-->
  </v-container>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {
      tab: null,
      guideList: [
        {
          category: "Faculty",
          guide: [
            {
              title: "#1 DASHBOARD",
              img: require("../assets/sample.jpg"),
              maxWidth: 500,
              text: "Shows the overview of the current semester's class loads, as well as a button to view archived gradesheets.",
            },
            {
              title: "#2 CLASS LOADS",
              img: "",
              maxWidth: 0,
              text: "Still inside the dashboard, each semester's class loads are organized in a card view manner.<br><br>Each card displays the class's subject code, subject description, year and section of the students, and it's weekly schedule.",
            },
            {
              title: "&nbsp;&nbsp;&nbsp;&nbsp;#2.1 GRADESHEET FORM",
              img: "",
              maxWidth: 0 / 0,
              text: "Upon clicking on a card from the dashboard, you will now be redirected to the alloted gradesheet form of the selected class.<br><br>You can now edit, save, download or archive the class's gardesheet from here.",
            },
            {
              title: "&nbsp;&nbsp;&nbsp;&nbsp#2.2 GRADESHEET FORM BUTTONS",
              img: "",
              maxWidth: 0 / 0,
              text: "",
            },
          ],
        },
        {
          category: "Coordinator",
          guide: [
            { title: "#1", img: "", maxWidth: 0 / 0, text: "coor1" },
            { title: "#2", img: "", maxWidth: 0 / 0, text: "coor2" },
          ],
        },
        {
          category: "Staff",
          guide: [
            { title: "#1", img: "", maxWidth: 0 / 0, text: "staff1" },
            { title: "#2", img: "", maxWidth: 0 / 0, text: "staff2" },
          ],
        },
        {
          category: "Manager",
          guide: [
            { title: "#1", img: "", maxWidth: 0 / 0, text: "manager1" },
            { title: "#2", img: "", maxWidth: 0 / 0, text: "manager2" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-color {
  background-color: #545454 !important;
}
.selectedList {
  background-color: #545454 !important;
  font-weight: bold;
}
.bg-color--text {
  color: #ff9807 !important;
  size: 20px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.493);
}
.leftPadding {
  text-shadow: 0px 1px 1px #ff9807;
  text-align: left;
}
.card-style {
  padding: 20px 20px 0 20px;
}
.guide-img{
  margin-bottom: 20px;
}
</style>
