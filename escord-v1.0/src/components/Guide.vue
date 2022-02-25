<template>
<v-container fluid style="margin:0px; padding: 20px; width:100%" fill height>
  <h1 class="font-weight-bold text-h2 leftPadding">guide</h1>
  <br>
  <v-card class="mt-auto">
   
    <v-tabs 
    v-model="tab" 
    background-color="transparent" 
    color="basil" 
    grow
    class="tabTitle basil--text">
      <v-tab v-for="userType in guideList" :key="userType.tab">
        {{ userType.category }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="userType in guideList" :key="userType.tab">
        <v-card color="basil" flat>
          <v-card-text
            v-for="guideItem in userType.guide"
            :key="guideItem.text"
          >
            <v-img
              :aspect-ratio="300 / 70"
              :width="width"
              v-bind:src="guideItem.img"
            ></v-img>
            <v-spacer></v-spacer>
            {{ guideItem.text }}
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
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
            { img: require("../assets/sample.jpg"), text: "faculty1" },
            { img: '', text: "faculty2" },
          ],
        },
        {
          category: "Coordinator",
          guide: [
            { img: "", text: "coor1" },
            { img: "", text: "coor2" },
          ],
        },
        {
          category: "Staff",
          guide: [
            { img: "", text: "staff1" },
            { img: "", text: "staff2" },
          ],
        },
        {
          category: "Manager",
          guide: [
            { img: "", text: "manager1" },
            { img: "", text: "manager2" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.basil {
  background-color: #FFFBE6 !important;
}
.basil2 {
  background-color: #545454 !important;
}
.basil--text {
  color: #ff9807 !important;
  size: 20px;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.493);
}
.leftPadding{
   text-shadow: 0px 1px 1px #ff9807;
  text-align: left;
}
</style>
