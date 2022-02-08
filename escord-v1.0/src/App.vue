<template>
  <div id="app">
    <escord-header />

    <escord-landing/>

    <escord-footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./components/Landing";

export default {
  components: {
    "escord-header": Header,
    "escord-footer": Footer,

    "escord-landing": Landing
  },

  name: "App",

  data() {
    return {};
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cuprum&display=swap');

#app {
  font-family: Century Gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
