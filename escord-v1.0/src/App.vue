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
import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./components/Landing";
import About from "./components/About";
import Guide from "./components/Guide";
import Contact from "./components/Contact";

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
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-family: "Cuprum", sans-serif;
}
div.home, div.about, div.guide, div.contact{
  padding: 30px 5px 10px 5px;
}
</style>
