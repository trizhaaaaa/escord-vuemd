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
              <router-link  to="/staff-dashboard">  <md-button class="md-primary"><md-icon >arrow_back_ios</md-icon> RETURN TO MAIN MENU</md-button> </router-link>
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

            <div>
                <md-table v-model="users" md-sort="studentNo" md-sort-order="asc" md-card md-fixed-header>
                  <md-table-toolbar></md-table-toolbar>
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="STUDENT #" md-sort-by="StudentNo" md-numeric >{{ item.studentNo }}</md-table-cell>
                    <md-table-cell md-label="LAST NAME" >{{ item.lastName }}</md-table-cell>
                    <md-table-cell md-label="FIRST NAME" >{{ item.firstName }}</md-table-cell>
                    <md-table-cell md-label="MIDDLE NAME" >{{ item.middleName }}</md-table-cell>        
                  </md-table-row>
                </md-table>
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

  name: 'TableFixed',
    data: () => ({
      users: [
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        {
          studentNo: "**************",
          lastName: "**************",
          firstName: "**************",
          middleName: "**************"
        },
        

      ]
    })
};

    
  
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}

.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
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



</style>
