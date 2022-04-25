<template>

  <v-container class="container">
    <v-row>
      <v-col class="archiveDiv">
        <v-btn class="archiveBtn" outlined>VIEW ARCHIVE</v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="account">
        <h1>Name</h1>
        <hr class="divider">
        <h1>Staff</h1>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>

    <v-row class="rowComponent">
      <v-col xs="8" sm="11" offset-sm="2" md="12" lg="10">
        <v-row class="cardRow">
          <v-col 
            xs="2"
            sm="6"
            md="4"
            lg="4"
            xl="3"
            v-for="option in options"
            :key="option.options"
          >
            <v-card class="card1" outlined shaped>
              <v-icon 
                class="icon"
                size="150"
              >{{option.iconComponent}}</v-icon>
              <br>
              <v-btn class="cardBtn"   outlined>{{ option.btn }}</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

 <script>
    export default {
        name:'staffdash',
      data() {
      
        return {
          options: [
            {
              iconComponent:  'mdi-file-edit-outline',
              btn: "GRADESHEET", 
              btnid:1,
           
            },
            {
              iconComponent:  'mdi-form-select',
              btn: "EVALUATION FORM", 
            btnid:2,
             
            },
            {
              iconComponent:  'mdi-file-account',
              btn: "SCHOLASTIC RECORD",   
               btnid:3,
        
            },  
          ]
        };
      },

      methods : {
      gradesheet(){
       
      
             
            
        
            
          }
      }
    }

</script>
<style scoped>

.container{
  height: 100%;
  min-height: 85vh;  
}
.archiveDiv{
 margin: 10px;
}
.archiveBtn{
  color: #FF9807;
  background-color: #545454;
  margin-top: 10px;
  padding: 20px !important;
  font-size: 25px;
}

.divider {
  border-top: 2px solid #FF9807;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 300px;
  min-width: 150px; 
}
.cardBtn {
  border: none;
  margin: 30px 10px 20px 10px;
  color: orange;
  padding: 20px !important;
  font-size: 16px;
  text-align: center !important; 

}
.cardBtn :hover {
  box-shadow: rgba(255, 255, 255, .2);
  transform: scale(1.15);
}
.cardBtn::before{
    background-color: transparent !important;
}
.rowComponent{
 justify-content: center;
 margin-top: 80px;
}
.cardRow{
  margin-left: 14px !important;
  justify-content: center;
}
.icon{
  margin: 20px;
  justify-content: center;
  color: #FCF8ED;  
}
.card1{
  background-color: #545454;
  justify-content: center !important;
  margin-left: 20px;
  padding: 5px;
  max-width: 350px;
  min-width: 250px;
  border-radius: 16px;
}

</style>
     