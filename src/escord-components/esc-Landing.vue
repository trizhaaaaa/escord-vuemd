<template>
  <div class="wrapper">
    <div class="section header-filter"> 
      <!-- removed .page-header from div above remove top alignment??? kapag sobrang haba ng content, sumasagad sa dulo -->
      <div class="container">
        <div
        class="">
            <h3 class="title"></h3>
        </div>
      </div>
    </div>
    <vue-headful title="Home | ESCORD"/>
  </div>
</template>

<script>

export default {
  bodyClass: "escord-about-page",
  data() {
    return {
        
    };
  }
};
</script>

<style lang="scss" scoped>

h3.title {
    margin-bottom: 0.5rem !important;
    color: #2d2d2d !important;
}

.__card-buttons {
    margin-top: 1.5rem !important;
}

.md-card-header {
    background-color: transparent !important;
    box-shadow: none !important;
    -webkit-box-shadow: none;
    height: 5rem !important;
    margin-bottom: 2rem !important;
}

.md-icon {
    color: #90a4ae !important;
}
</style>
