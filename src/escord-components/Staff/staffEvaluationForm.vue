<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container"></div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item" align="left">
              <md-button class="md-primary"><md-icon >arrow_back_ios</md-icon> RETURN TO MAIN MENU</md-button>
            </div>

            <div class="md-layout-item" align="right">
              <md-card class="card1">
                <md-field>
                  <md-icon class="" align="left">search</md-icon>
                    <label>Search</label>
                    <br>
                    <md-input v-model="type"></md-input>
                </md-field>
              </md-card>
            </div>      
          </div>
          <div class="space-100"></div>

          <div class="md-layout">
             <div class="md-layout-item" align="center">
              <div class="btn">
                <md-button class="md-primary md-block md-lg md-info"><md-icon >archive</md-icon> ARCHIVE</md-button>
              </div>
             </div>
             <div class="md-layout-item" align="center">
               <div class="btn">
                <md-button class="md-primary md-block md-lg md-success"><md-icon >file_download</md-icon> DOWNLOAD</md-button>
               </div>
             </div>
          </div>

          <div class="space-50"></div>
            
            <div>
              <div>
                <md-table md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Users</h1>
                  </md-table-toolbar>

                  <md-table-row class="row1" md-card>
                    <md-table-head md-numeric >STUDENT NO.</md-table-head>
                    <md-table-head>LAST NAME</md-table-head>
                    <md-table-head>FIRST NAME</md-table-head>
                    <md-table-head>MIDDLE NAME</md-table-head>
                    <md-table-head>PROGRAM</md-table-head>
                    <md-table-head>YEAR</md-table-head>
                    <md-table-head>SECTION</md-table-head>
                    <md-table-head>GWA</md-table-head>
                    <md-table-head>STATUS</md-table-head>
                  </md-table-row>
                  
                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>

                    <md-table-row >
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>
                    <md-table-row >
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>***</md-table-cell>
                      <md-table-cell>*************</md-table-cell>
                    </md-table-row>
                  
                </md-table>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },

    


}
  
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}

.contact-form {
  margin-top: 30px;
}


/* Escord CSS */

.md-field {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  align-content: center !important;
}
.btn{
  margin-right: 20px;
  margin-left: 20px;
  max-width: 400px;
}
.card1{
  margin-top: 5px;
  padding-left: 10px;
  max-width: 250px;
  height: 45px;
}
.md-button{
  align-items: center !important;
}
.row1{
  border-bottom: 1.5px solid grey!important;
}


 

</style>
