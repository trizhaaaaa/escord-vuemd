<template>
  <div id="app">
    <escord-header />

    <escord-landing/>
    <escord-about/>
    <escord-guide/>
    <escord-contact/>

    <escord-footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Guide from "./components/Guide.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    "escord-header": Header,
    "escord-footer": Footer,

    "escord-landing": Landing,
    "escord-about": About,
    "escord-guide": Guide,
    "escord-contact": Contact
  },

  name: "App",

  data() {
    return {
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cuprum&display=swap');

#app {
  font-family: Century Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}
h1, h4.esc-feature-shortdesc, h3.esc-feature-longdesctitle, div#about-escord{
  font-family: 'Cuprum', sans-serif;
}
h1.landing-page-title{
  text-shadow: 0px 1px 1px #ff9807;
  text-align: left;
}
div#landing, div#about, div#guide, div#contact{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
