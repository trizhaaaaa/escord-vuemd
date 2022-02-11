<template>
  <header id="vue-hdr">
    <a href="/"
      ><img src="@/assets/logo-max.svg" alt="logo-max" class="logo-max"
    /></a>

    <button class="btn-toggleMenu">
      <i class="fa-solid fa-bars toggleMenu"></i>
    </button>

    <nav>
      <!--USER CATEGORIES, show: false (initial value)-->
      <div class="userDropdown">
        <select name="userCategory" id="userCategory" v-show="showCategoryList">
          <option disabled selected value="blank">Select Category</option>
          <option value="faculty">FACULTY</option>
          <option value="coordinator">COORDINATOR</option>
          <option value="mis-staff">MIS STAFF</option>
          <option value="mis-manager">MIS MANAGER</option>
        </select>
      </div>

      <div class="cont-toggleMenu">
        <ul>
          <li><a href="/about" class="hdr-a">ABOUT</a></li>
          <li><a href="/guide" class="hdr-a">GUIDE</a></li>
          <li><a href="/contact" class="hdr-a">CONTACT</a></li>
          <li>
            <button id="btn-login"
              v-bind:class="{ loggedIn: loggedIn, loggedOut: !loggedIn }"
              v-on:click="login"
            >
              {{ btnText }}
            </button>
          </li>
        </ul>
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
    };
  },
  methods: {
    login: function () {
      this.loggedIn = !this.loggedIn;
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
  align-items: center;
  justify-content: space-between;
}
/* LOGO */
img.logo-max {
  max-width: 120px;
  padding: 20px 20px 10px;
  float: left;
}
img.logo-max:hover {
  filter: drop-shadow(0px 0px 4px #242424);
}
/* DROPDOWN-USER CATEGORY */
div.userDropdown{
  display: inline-block;
}
select {
  border: none;
  font-family: "Cuprum", sans-serif;
  background: #545454;
  box-shadow: 0px -2px 6px #2d2d2d;
  outline: 0px;
  border-radius: 5px;
  margin: 0.7em 0.2em;
  width: 170px;
  text-align: center;
  letter-spacing: 2px;
  padding: 0.2em;
  font-size: 18px;
  color: #ffffff;
}

/* NAVIGATION BAR */
nav {
  margin-right: 5%;
}
/* NAVIGATION BAR - LINKS */
div.cont-toggleMenu {
  float:right;
  margin-top: 0.2em;
}
ul {
  margin: 0%;
}
nav ul li {
  list-style: none;
  display: inline;
  padding-right: 10px;
  padding-left: 20px;
}
a.hdr-a {
  padding: 0.9em 0.7em;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
}
a.hdr-a:hover {
  color: #ff9807;
  text-shadow: 0px 0px 4px #242424;
}

/* LOGIN BUTTON */
button.loggedIn,
button.loggedOut {
  font-family: Century Gothic;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #ff9807;
  padding: 5px 10px;
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
/* TOGGLE BUTTON */
button.btn-toggleMenu {
  float: right;
  width: 3em;
  height: 3em;
  margin-top: 0.5em;
  margin-right: 1.5em;
  background-color: transparent;
  color: #ff9807;
  border: 2px solid #ff9807;
  cursor: pointer;
  border-radius: 5px;
  display: none;
}
button.btn-toggleMenu:hover {
  color: #545454;
  background-color: #ff9807;
}

@media screen and (max-width: 976px) {
  button.btn-toggleMenu {
    display: inline-block;
  }
  ul{
    padding:0%;
    color: white;
  }
  nav ul li {
    display: block;
    list-style: none;
    text-align: right;
    padding-bottom: 1em;
    font-weight: bold;
  }
  a.hdr-a, button#btn-login{
    font-size: 2em;
  }
  button#btn-login{
    border: none;
    margin-right: 0.8em;
  }


  div.cont-toggleMenu {
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
