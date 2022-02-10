<template>
  <header id="vue-hdr">
    <a href="/"
      ><img src="@/assets/logo-max.svg" alt="logo-max" class="logo-max"
    /></a>

    <nav>
      <!--USER CATEGORIES, show: false (initial value)-->
      <select name="userCategory" id="userCategory" v-show="showCategoryList">
        <option value="blank"></option>
        <option value="faculty">FACULTY</option>
        <option value="coordinator">COORDINATOR</option>
        <option value="mis-staff">MIS STAFF</option>
        <option value="mis-manager">MIS MANAGER</option>
      </select>

      <a href="/about" class="hdr-a">ABOUT</a>

      <a href="/guide" class="hdr-a">GUIDE</a>

      <a href="/contact" class="hdr-a">CONTACT</a>

      <button
        v-bind:class="{ loggedIn: loggedIn, loggedOut: loggedOut }"
        v-on:click="login"
      >
        {{ btnText }}
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showCategoryList: false,
      btnText: "LOG IN",
      loggedIn: false,
      loggedOut: true,
    };
  },
  methods: {
    login: function () {
      this.loggedIn = !this.loggedIn;
      this.loggedOut = !this.loggedOut;
      this.showCategoryList = !this.showCategoryList;

      if (this.showCategoryList === true) {
        this.btnText = "LOG OUT";
      } else {
        this.btnText = "LOG IN";
      }
    },
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
  filter: drop-shadow(0px 0px 4px #242424);
}
nav {
  margin-right: 5%;
}
select {
  border: none;
  font-family: "Cuprum", sans-serif;
  background: #545454;
  box-shadow: 0px -2px 6px #2d2d2d;
  outline: 0px;
  border-radius: 5px;
  padding: 2px;
  width: 150px;
  text-align: center;
  letter-spacing: 2px;
}
select,
a.hdr-a {
  margin-right: 60px;
  font-size: 18px;
  color: #ffffff;
}
a.hdr-a {
  text-decoration: none;
}
a.hdr-a:hover {
  color: #ff9807;
  text-shadow: 0px 0px 4px #242424;
}
button.loggedIn,
button.loggedOut {
  font-family: Century Gothic;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #ff9807;
  border-radius: 25px;
}
button.loggedOut {
  color: white;
  background-color: #545454;
}
button.loggedOut:hover {
  background-color: #ff9807;
  color: #545454;
  box-shadow: 0px 0px 6px #242424;
}
button.loggedIn {
  background: #ff9807;
  color: #545454;
  box-shadow: 0px 0px 6px #242424;
}
button.loggedIn:hover {
  background-color: #545454;
  color: white;
}
</style>
