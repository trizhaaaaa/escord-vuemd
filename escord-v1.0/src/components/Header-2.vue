<template>
  <header id="vue-hdr">
    <nav>
      <div class="navbar">
        <a href="/"
          ><img src="@/assets/logo-max.svg" alt="logo-max" class="logo-max"
        /></a>
        <button class="toggle-collapse">
          <i class="fas fa-home"></i>
        </button>

        <!--USER CATEGORIES, show: false (initial value)-->
        <select name="userCategory" id="userCategory" v-show="showCategoryList">
          <option value="blank"></option>
          <option value="faculty">FACULTY</option>
          <option value="coordinator">COORDINATOR</option>
          <option value="mis-staff">MIS STAFF</option>
          <option value="mis-manager">MIS MANAGER</option>
        </select>

        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/about" class="hdr-a">ABOUT</a>
            </li>
            <li class="nav-item">
              <a href="/guide" class="hdr-a">GUIDE</a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="hdr-a">CONTACT</a>
            </li>
            <li class="nav-item">
              <button
                v-bind:class="{ loggedIn: loggedIn, loggedOut: loggedOut }"
                v-on:click="login"
              >
                {{ btnText }}
              </button>
            </li>
          </ul>
        </div>
      </div>
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
body {
  margin: 0%;
  padding: 0%;
}
img.logo-max {
  max-width: 120px;
  padding: 20px 20px 10px;
  float: left;
}
img.logo-max:hover {
  filter: drop-shadow(0px 0px 4px #242424);
}
div.navbar {
  width: 100vw;
  background-color: #130404;
  color: white;
}
ul.navbar-nav {
  margin: 0%;
}
div.navbar ul.navbar-nav li.nav-item {
  display: inline;
  list-style: none;
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
  padding: 0.9em 0.7em;
  font-size: 18px;
  color: #ffffff;
}
a.hdr-a {
  text-decoration: none;
  display: inline-block;
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
button.toggle-collapse {
  float: right;
  width: 3.5em;
  margin: 0.4em 2em;
  background-color: transparent;
  color: rgba(153, 35, 35, 0.7);
  border: 1px solid rgba(255, 25, 236, 0.3);
  border-radius: 3px;
  cursor: pointer;
  display: none;
}
button.toggle-collapse:hover {
  color: rgb(232, 232, 232);
}

@media screen and (max-width: 456px) {
  img.logo-max {
    display: inline-block;
    float: none;
  }
  button.toggle-collapse {
    display: inline-block;
  }
  ul.navbar-nav {
    color: white;
    padding: 0%;
  }
  div.navbar ul.navbar-nav li.nav-item {
    display: block;
    list-style: none;
  }
  div.navbar-collapse {
    width: 100%;
    overflow: hidden;
    text-align: center;
    height: 0vh;
    transition: all 499ms ease;
  }

  div.collapse {
    height: 100vh;
  }
}
</style>
