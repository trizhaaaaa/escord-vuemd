<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">guide</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="userType in guideList" :key="userType.tab">
        {{ userType.category }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="userType in guideList" :key="userType.tab">
        <v-card color="basil" flat>
          <v-card-text
          v-for="guideItem in userType.guide"
          :key="guideItem.text">
          {{ guideItem.img}}
          <v-spacer></v-spacer>
          {{ guideItem.text }}
          <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
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
            { img: "fd", text: "faculty1" },
            { img: "fd", text: "faculty2" },
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
      ]
    };
  },
};
</script>

<style scoped>
/* Helper classes */
</style>
