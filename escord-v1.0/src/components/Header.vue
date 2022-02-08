<template>
  <header id="vue-hdr">
    <a href="/"
      ><img src="@/assets/logo-max.svg" alt="logo-max" class="logo-max"
    /></a>

    <nav>
      <a href="/about" class="hdr-a">ABOUT</a>

      <a href="/guide" class="hdr-a">GUIDE</a>

      <a href="/contact" class="hdr-a">CONTACT</a>

      <button class="btn-login" v-on:click="login">LOG IN</button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  background-color: #545454;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img.logo-max {
  max-width: 120px;
  padding: 20px 20px 10px;
}
img.logo-max:hover {
  filter: drop-shadow(-3px 8px 1px rgba(248, 190, 0, 0.233));
}
nav {
  margin-right: 5%;
}
a.hdr-a {
  padding-right: 60px;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
}
a.hdr-a:hover {
  color: #ff9807;
}
button.btn-login {
  font-family: Century Gothic;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #ff9807;
  border-radius: 25px;
  background-color: transparent;
}
button.btn-login:hover {
  background-color: #ff9807;
}
</style>
