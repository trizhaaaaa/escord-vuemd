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

                <div class="name">
                  <h3 class="title">{{studLN}}, {{studFN}} {{studMN}}</h3>
                  <h5>{{studProg}} | {{studYr}}{{studSec}}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <h2 class="md-display-1">YOUR FILES</h2>
          </div>

          <div class="profile-content">
            <div class="cards md-layout md-alignment-center">
              
              <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100">
                  <md-card class="md-with-hover">
                      <md-card-content>
                        <p class="md-title title text-center">Scholastic Record</p>
                        <p class="text-center">Click to view your scholastic record form</p>
                      </md-card-content>
                  </md-card>
                </div>
                
                <div class="md-layout-item md-medium-size-50 md-small-size-75 md-xsmall-size-100">
                  <md-card  class="md-with-hover">
                      <md-card-content>
                        <p class="md-title title text-center">Summary of Grades</p>
                        <p class="text-center">Click to view and download your evaluation form</p>
                      </md-card-content>
                  </md-card>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-headful title="Dashboard | STUDENT"/>
  </div>
</template>

<script>

export default {
  bodyClass: "profile-page",
  data() {
    return {
      studLN: "DELA CRUZ",
      studFN: "JUAN",
      studMN: "GONZALES",
      studProg: "Bachelor of Science in Computer Science",
      studYr: "3",
      studSec:"A"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
