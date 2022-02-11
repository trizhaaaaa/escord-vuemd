<template>
  <div id="landing">
    <div id="landing-img">
      <img src="../assets/landing-img.svg" />
    </div>
    <div id="landing-content">
      <h1>A web-based scholastic<br />record management system.</h1>
      <p>Grading, evaluation, and managing in <b>one</b>.</p>
    </div>
    <button id="learn-more">Learn More →</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
div.home {
  padding: 30px 5px 10px 5px;
}
img {
  width: 20em;
}
div#landing-content h1 {
  font-weight: 100;
}
button#learn-more {
  font-family: "Cuprum", sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  color: #545454;
  background-color: #ff9807;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
}
button#learn-more:hover {
  color: #ff9807;
  background-color: #545454;
  border-radius: 10px;
  padding: 5px 10px;
}
</style>
