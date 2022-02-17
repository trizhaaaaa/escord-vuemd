<template>
  <div id="landing">
    <div id="landing-img">
      <img src="../assets/landing-img.svg" />
    </div>

    <div id="landing-content">
      <h1>A web-based scholastic<br />record management system.</h1>
      <p>Grading, evaluation, and managing in <b>one</b>.</p>
      <button id="learn-more">Learn More →</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {};
  },
};
</script>

<style scoped>
div#landing {
  position: relative;
  height: 500px;
  overflow: hidden;
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
img {
  width: 90%;
  height: auto;
  transform: translate(-30%, 0%);
  transition: all 300ms ease;
}
div#landing-content {
  position: absolute;
  right: 5%;
  top: 30%;
}
@media screen and (max-width: 976px) {
  div#landing {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div#landing-img {
    filter: blur(4px);
  }
  img {
    padding-top: 5%;
    min-width: 800px;
    transform: translate(0%, 0%);
    transition: all 300ms ease;
  }
  div#landing-content {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    width: 350px;
    height: 250px;
    background-color: #ffffff80;
  }
}
</style>
