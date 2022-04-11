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
          <li><router-link to="/about" class="hdr-a" >ABOUT</router-link></li>
          <li><router-link to="/guide" class="hdr-a">GUIDE</router-link></li>
          <li><router-link to="/contact" class="hdr-a">CONTACT</router-link></li>
          <li>
                 <span v-if="!isAuthenticated">
            <button
              id="btn-login"
              v-bind:class="{ loggedIn: loggedIn, loggedOut: !loggedIn }"
              v-on:click="login"
            >
             Login
            </button>

                 </span>
<span v-else>
                 <button
              id="btn-login"
              v-bind:class="{ loggedIn: loggedIn, loggedOut: !loggedIn }"
              v-on:click="logout"
            >
              Logout
            </button>

</span>
          </li>
        </ul>
      </div>
    </nav>
    
   
  </header>
</template>

<script>



import { mapGetters } from 'vuex';
import axios from 'axios'




export default {
  name: 'Header',
  data() {
    return {
      showCategoryList: false,
      btnText: "LOG IN",
      loggedIn: false,
      
    };

    
  },

  computed: {
           ...mapGetters({isAuthenticated : 'isAuthenticated'}),

  },
  methods: {
    login: function () {
     // this.loggedIn = !this.loggedIn;
     // this.showCategoryList = !this.showCategoryList;
   this.$router.push({name:'AdminLogin'});
   /*    if (this.showCategoryList === true) {
        this.btnText = "LOG OUT";
      } else {
        this.btnText = "LOG IN";
     
      } */



    },
    logout:function(){
    
    axios.post('/api/logout').then((response)=>{
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      
       //  this.$router.push('/');
      this.$router.push('/', () => this.$router.go(0))
                   
      }).then(response=>{
   console.log(response);
          })
       
    },


    onClickLink: function(){
      $('.cont-toggleMenu collapse').toggleClass("");
    }
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
  z-index: 99;
}
/* LOGO */
img.logo-max {
  max-width: 170px;
  padding: 20px 20px 10px;
  float: left;
}
img.logo-max:hover {
  filter: drop-shadow(0px 0px 4px #242424);
}
/* DROPDOWN-USER CATEGORY */
div.userDropdown {
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
  float: right;
  margin: 0.4em -3em 0em 0em;
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
  padding: 0.9em 1.5em;
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
  padding: 5px 15px;
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
  height: 2.9em;
  margin-top: 0.6em;
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
  ul {
    padding: 0%;
    color: white;
  }
  nav ul li {
    display: block;
    list-style: none;
    text-align: right;
    padding-bottom: 1em;
    font-weight: bold;
  }
  a.hdr-a {
    font-size: 2.5em;
  }
  button#btn-login {
    border: none;
    color: #ff9807;
    margin-right: 0.7em;
    padding: 5px 0.7em 5px 0;
    font-size: 3em;
  }
  button.loggedOut:hover {
    box-shadow: none;
    background: none;
    text-shadow: 0px 0px 6px #242424;
  }
  button.loggedIn {
    box-shadow: none;
    background: none;
    color: #545454;
    text-shadow: 0px 0px 6px #242424;
  }
  button.loggedIn:hover {
    background-color: #545454;
    color: white;
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
