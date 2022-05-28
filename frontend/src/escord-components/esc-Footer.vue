<template>
  <footer class="footer mx-auto">

    <div class="__footer container md-layout md-gutter md-alignment-center-center">

      <div class="__top md-layout-item md-size-100 md-layout md-gutter md-alignment-top-space-between">

        <div class="md-layout-item
        md-xsmall-size-100 md-small-size-100 md-size-33 text-left">
          <h5 class="title">About ESCORD</h5>
          <p class="md-body-1">
            ESCORD is a web-based scholastic record management system for the MIS sector of the University of Caloocan City-Congress Campus.
            <br><br>
            The main objectve of ESCORD is to eliminate the inaccuracy of grade computation which became a prominent issue in the existing system.
          </p>
        </div>

        <div class="__contact md-layout-item
        md-xsmall-size-100 md-small-size-100 md-size-33 text-left">
          <h5 class="title">Contact Us</h5>
          <p class="md-body-1">
            <md-icon class="">phone_android</md-icon> 0987 786 2314/ 0976 786 4352
          </p>
          <p class="md-body-1">
            <md-icon>call</md-icon>
            (02) 9332 4355
          </p>
          <p class="md-body-1">
            <md-icon>email</md-icon>
            ucc.escord@gmail.com 
          </p>
        </div>

        <div class="__contact md-layout-item
        md-xsmall-size-100 md-small-size-100 md-size-33 text-left">
          <h5 class="title">Be Updated</h5>
          
          <md-button
          href="https://www.facebook.com/ESCORD-113005448074793"
          class="md-just-icon md-round md-facebook text-center">
            <i class="fab fa-facebook-f"></i>
          </md-button>

          <md-button
          href="https://twitter.com/ucc_escord"
          class="md-just-icon md-round md-twitter text-center">
            <i class="fab fa-twitter"></i>
          </md-button>

          <md-button
          href="https://www.instagram.com/"
          class="md-just-icon md-round md-insta text-center">
            <i class="fab fa-instagram"></i>
          </md-button>
          
        </div>

      </div>

      <hr class="md-layout-item md-size-100">

      <div class="__bottom md-layout-item md-size-100 md-layout md-gutter md-alignment-top-space-between">

        <div class="md-layout-item
        md-xsmall-size-100 md-small-size-50">
          <a href="" class="md-body-2 text-esc-darkgrey">Terms & Condition</a>
        </div>

        <div class="md-layout-item
        md-xsmall-size-100 md-small-size-50 text-center">
          Copyright &copy; {{year}} | ESCORD. All rights reserved.
        </div>
      </div>
    
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>

.__footer {
  margin: auto !important;
  padding: 0 2em !important;
}

h5 {
  margin-bottom: 0.5em !important;
}

hr {
  margin: 1.25em 0 !important;
}

a:hover {
  color: #ef6c00 !important;
}

.__bottom div {
  margin: 0.5em 0 !important;
}

.__contact p {
  margin: 0.75em 0 !important;
}

.md-insta {
  background-color: #8331b7 !important;
}

.md-insta :hover {
  background-color: #8331b7 !important;
}

.md-button {
  margin-right: 1em !important;
}
</style>
