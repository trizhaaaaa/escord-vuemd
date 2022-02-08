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
  padding: 1px;
  width: 100vw;
}
p {
  color: #545454;
  text-align: center;
  text-shadow: 0px 3px 2px #5454547c;
}
p.disclaimer {
  font-weight: bold;
}
</style>
