<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="//use.fontawesome.com/releases/v6.0.0/css/all.css"
    />

    <escord-header />
    
    <gs-main-menu/>
    <!-- <router-view> </router-view> -->
    <escord-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import GradesheetMainMenu from "./components/GradesheetMainMenu.vue";

export default {
  components: {
    "escord-header": Header,
    "escord-footer": Footer,
    "gs-main-menu": GradesheetMainMenu,
  },

  name: "App",

  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cuprum&display=swap");

html,
body {
  padding: 0px;
  margin: 0px;
}
div#app {
  font-family: Century Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
  max-height: 100vh;
  padding: 0px;
  margin: 5em 0 0 0;
  display: flex;
  flex-wrap: wrap;
}
h1,
h4.esc-feature-shortdesc,
h3.esc-feature-longdesctitle,
p.member-name,
div#about-escord,
.tabTitle {
  font-family: "Cuprum", sans-serif;
}
h1.landing-page-title {
  text-shadow: 0px 1px 1px #ff9807;
  text-align: left;
  padding-left: 20px;
}
div#landing,
div#about,
div#guide,
div#contact {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}
</style>
