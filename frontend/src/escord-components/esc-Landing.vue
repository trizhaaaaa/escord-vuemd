<template>
  <div class="wrapper">
    <div class="section header-filter"> 
      <!-- removed .page-header from div above remove top alignment??? kapag sobrang haba ng content, sumasagad sa dulo -->
      <div class="container">
        <div
        class="md-layout md-alignment md-alignment-center-center __landing">
            
            <div class="md-layout-item md-size-50 md-medium-hide md-layout md-gutter">
              <img src="../assets/img/escord-landing-img.svg" />
            </div>

            <div class="md-layout-item md-size-50 md-medium-size-100 md-layout md-gutter md-alignment-center-center">

              <h2 class="md-layout-item md-size-100 title">A web-based scholastic record management system.</h2>
              <p class="md-layout-item md-size-100">Grading, evaluation, and managing in <b>one</b>.</p>
              

              <div class="md-layout-item md-size-100 md-layout md-gutter md-alignment-center-center">
                <md-button
                class="md-esc-accent md-round md-raised"
                to="/about-escord">
                  Learn More <md-icon>arrow_forward</md-icon>
                </md-button>

              </div>

                
            </div>

        </div>
      </div>
    </div>
    <vue-headful title="Home | ESCORD"/>
  </div>
</template>

<script>

export default {
  bodyClass: "escord-landing-page",
  data() {
    return {
        
    };
  }
};
</script>

<style lang="scss" scoped>
.__landing {
  height: 500px !important;
}

h3.title {
    margin-bottom: 0.5rem !important;
    color: #2d2d2d !important;
}

img {
  width: 100%;
  height: auto;
  transform: translate(-10%, 10%);
  transition: all 300ms ease;
}

p {
  font-size: 1em !important;
  margin-bottom: 2em !important;
}

@media screen and (max-width: 1279px) {

  h2, p {
    text-align: center !important;
  }
  
}
</style>
