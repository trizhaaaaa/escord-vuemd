<template>
  <div id="landing">
    <table>
      <tr>
        <td>
          <div id="landing-img">
            <img src="../assets/landing-img.svg" />
          </div>
        </td>

        <td>
          <div id="landing-content">
            <h1>A web-based scholastic record management system.</h1>
            <p>Grading, evaluation, and managing in <b>one</b>.</p>
          </div>
          <button id="learn-more">Learn More →</button>
        </td>
      </tr>
    </table>
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
  width: 500px;
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
