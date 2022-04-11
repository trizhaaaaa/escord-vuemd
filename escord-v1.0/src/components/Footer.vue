<template>

  <footer id="vue-ftr">
    <p class="disclaimer">
      This website is created for academic purposes only.
    </p>
    <p class="copyright">© 2022 | ESCORD</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {};
  },
};
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #5454541e;
  height: 80px;
  /* z-index: 199; */
}
p {
  
  color: #545454;
  text-align: center;
  text-shadow: 0px 3px 2px #5454547c;
}
p.disclaimer {
  font-weight: bold;
  padding: 10px;
}

</style>
