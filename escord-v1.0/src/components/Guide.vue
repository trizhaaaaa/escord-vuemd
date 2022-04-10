<template>
  <v-container
    fluid
    style="margin: 0px; padding: 0 20px 20px 20px; width: 100%"
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

      <v-tabs-items v-model="tab" class="tab-color">
        <v-tab-item v-for="userType in guideList" :key="userType.tab">
          <!--START OF CARD LIST-->
          <v-card
            class="card-style"
            color="bg-color"
            flat
            v-for="guideItem in userType.guide"
            :key="guideItem.text"
          >
            <v-card-title
              style="
                color: #ff9807;
                padding: 20px 10px 10px 10px;
                font-size: 20px;
                font-weight: bold;
              "
              v-html="guideItem.title"
            ></v-card-title>
            <div class="cardDesc" v-html="guideItem.text"></div>

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
          category: "Student",
          guide: [
            {
              title: "#1 SCHOLASTIC RECORD",
              img: "",
              text: '<p>The updated scholastic record form can be viewd on the site or downloaded for offline use. </p><p style=" text-shadow: 0px 1px 1px #ff9807;font-size: 0.7em; margin-top: 10px;">Any concerns about its details or suggested revision shall be forwarded to the authorized personnel.</p>',
            },
            {
              title: "#2 EVALUATION FORM",
              img: "",
              text: '<p>The updated evaluation form is displayed only for reviewing purposes.</p><p style=" text-shadow: 0px 1px 1px #ff9807;font-size: 0.7em; margin-top: 10px;">Any concerns about its details or suggested revision shall be forwarded to the authorized personnel.</p>',
            },
          ],
        },
        {
          category: "Admin",
          guide: [
            {
              title: "#1 GRADESHEET FORM",
              img: require("../assets/sample.jpg"),
              text: "<p>Shows the overview of the current semester's class loads, as well as a button to view archived gradesheets.</p><br>&nbsp;&nbsp;&nbsp;<p style=' color: #ff9807;font-size: 20px;font-weight: bold;'>ADD/ VIEW GRADESHEETS</p><br><p>Upon clicking on a card from the dashboard, you will now be redirected to the alloted gradesheet form of the selected class.<br><br>You can now edit, save, download or archive the class's gradesheet from here.</p><br>&nbsp;&nbsp;&nbsp;<p style=' color: #ff9807;font-size: 20px;font-weight: bold;'>BUTTONS</p><br><p><b>SAVE:</b>&nbsp;&nbsp;&nbsp;Overwrites the last saved inputs with the recent changes made by the user.<br><br><b>DOWNLOAD:</b>&nbsp;&nbsp;&nbsp;Downloads the displayed gradesheet in excel format.<br><br><b>ARCHIVE:</b>&nbsp;&nbsp;&nbsp;Archives the displayed gradesheet.<br></p>",
            },
            {
              title: "#2 EVALUATION FORM",
              img: "",
              text: "<p>Still inside the dashboard, each semester's class loads are organized in a card view manner.<br><br>Each card displays the class's subject code, subject description, year and section of the students, and its weekly schedule.</p>",
            },
            {
              title: "#3 SCHOLASTIC RECORD MANAGEMENT",
              img: "",
              text: "<p>Still inside the dashboard, each semester's class loads are organized in a card view manner.<br><br>Each card displays the class's subject code, subject description, year and section of the students, and its weekly schedule.</p>",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .tab-color{
   border: 2px solid #ff9807 !important;
}  */
p.note {
  font-size: 1em;
  color: #ff9807;
}
.bg-color {
  border: 3px solid #545454 !important;
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
  margin: 10px 15px;
}
.guide-img {
  margin-bottom: 20px;
}
div.cardDesc {
  color: #2d2d2d;
  padding: 0 40px 20px 40px;
  font-size: 20px;
  text-align: left;
}
</style>
