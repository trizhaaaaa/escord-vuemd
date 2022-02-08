<template>
  <footer id="vue-ftr">
    <p class="disclaimer">
      This website is created for academic purposes only.
    </p>
    <p class="copyright"> © 2022 | ESCORD </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
footer {
  background: #545454;
  padding: 1px;
  width: 100vw;
}
p {
  color: #ff9807;
  text-align: center;
}
p.disclaimer {
  font-weight: bold;
}
</style>
