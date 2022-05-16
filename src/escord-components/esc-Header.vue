<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-absolute md-esc-dark"
    :class="extraNavClasses"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <!-- logo -->
        <router-link to="/">
            <div class="__logo md-layout md-alignment-center-center">
                <img src="../assets/img/escord-logo-max.svg" alt="escLogo" width="150rem"
                class="logo">
                <!-- <h3 class="md-title title">ESCORD</h3> -->
            </div>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <!-- burger button -->
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>

            <md-list>

              <md-list-item
                to="/about-escord"
                v-if="showMenu"
              >
                <p>About</p>
              </md-list-item>
             
              <md-list-item
                to="/contact-escord"
                v-if="showMenu"
              >
                <p>Contact Us</p>
              </md-list-item>

              <md-list-item
                to="/login-to-escord"
                v-if="showMenu"
              >
                <p class="__login">Login</p>
              </md-list-item>
              
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      showMenu: true
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style lang="scss" scoped>

.md-title, .logo {
    margin-left: 1.25rem !important;
}

.logo {
    padding-top: 0.5rem !important;
}

p {
  font-size: 0.9rem !important;
}

.__login {
  color: #ef6c00;
  font-size: 1rem !important;
  font-weight: bolder !important;
}
</style>