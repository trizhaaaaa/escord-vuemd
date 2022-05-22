<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">

            <div class="content1">
              <div class="md-layout-item" align="left">
                <md-button class="Button1 md-primary md-sm"><md-icon >arrow_back_ios</md-icon> RETURN TO MAIN MENU</md-button>
              </div>
              
              <div class="md-layout-item" align="right">
                <md-card class="searchBtn">
                  <md-field>
                    <md-icon align="left">search</md-icon>
                      <label>Search</label>
                      <br>
                      <md-input v-model="type"></md-input>
                  </md-field>
                </md-card>
              </div>      
            </div>

            <div class="space-100"></div>

            <!-- CARDS -->
  
            <div class="content2 md-layout">

               <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>

              <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>

              <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>

              <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>

              <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>

              <md-card class="card1 md-accent">
                  <md-card-header class="cardHeader">
                    <div class="title md-title ">#</div>
                    <md-icon class="icon1">
                      <h6>Icon here</h6>
                    </md-icon>
                  </md-card-header>
                  <div class="text md-title">PROG/YEAR/SEC</div>
              </md-card>
            </div>
       
        </div>
      </div>
    </div>
    <vue-headful title="Scholastic Record Main menu"/>
  </div>
</template>

<script>

export default {
  bodyClass: "profile-page",
  data() {
    return {
      
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg-545454.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
.content1{
  justify-content: space-around;
  display: inline-flex !important;
  margin-left: 10px !important;
  margin-right: 10px !important; 
}
.content2{
  justify-content: space-evenly;
}
.md-button{
  min-width: 50px !important;
  height: 45px;
  margin-top: 20px;
  display: flex!important;
}
.searchBtn{
  margin-top: 20px;
  max-width: 250px;
  height: 45px;
  border-left: 2px solid #9C27B0;
  border-right: 2px solid #9C27B0;
  border-top: 2px solid #9C27B0;
}
.md-field {
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  height: 46px;
  width: 90%;
  align-content: center !important;
}
.card1{
  height: 200px;
  width: 300px;
}
.icon1{
  width: 90px;
  height: 90px;
  margin-left: 190px !important;
  margin-top: -50px !important;
  background-color: bisque;
  color: grey;
  text-align: center !important;
  border: 3px solid white;
}
.cardHeader{
  margin: 5px !important;
  height: 65%;
  
}
.title{
  margin-left: 30px !important;
  font-size: 30px !important;
}
.text{
  margin-top: 20px !important;
  text-align: center;
}
</style>
