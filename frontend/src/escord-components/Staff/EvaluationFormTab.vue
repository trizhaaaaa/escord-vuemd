<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">

            
          <!-- START YOUR CODE HERE -->
          <!-- START YOUR CODE HERE -->
    <div>

     <div class = "md-layout escord md-gutter md-alignment-center-center">
         <div class = "md-layout-item md-size-33 md-layout md-gutter md-alignment-center-center">
             <md-button @click="showevaluationtable">EVALUATION FORM</md-button>
         </div>
         <div class = "md-layout-item md-size-33 md-layout md-gutter md-alignment-center-center">
                <md-button @click="showscholastictable">SCHOLASTIC RECORD</md-button>
         </div>

  <!--<md-button @click="showevaluationtable">EVALUATION FORM</md-button>
  <md-button @click="showscholastictable">SCHOLASTIC RECORD</md-button>-->
  
  </div>
<!---Evaluation Form Tab-->
  <div v-if="defaultvalbutton ==='evaluation'">

  <!--Start..-->
    <md-table v-model="users" md-sort="name" md-sort-order="asc" >
  
   
        <md-table-row class="sec">
                <md-table-head class="text-center">Student no.</md-table-head>
                <md-table-head class="text-center">Student Name</md-table-head>
                <md-table-head class="text-center">Program</md-table-head>
                <md-table-head class="text-center">Year</md-table-head>
                <md-table-head class="text-center">Section</md-table-head>

                
              </md-table-row>

       <md-table-row v-for="(_, index) in users" :key="index">

            
                    <md-table-cell class="text-center">
                      {{users[index].studno}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{users[index].studname}}
                </md-table-cell>

                   <md-table-cell class="text-center">
                      {{users[index].program}}
                </md-table-cell>

                <md-table-cell class="text-center">
                      {{users[index].year}}
                </md-table-cell>

              <md-table-cell class="text-center">
                      {{users[index].section}}
                </md-table-cell>
        
      </md-table-row>

    </md-table>
<!--END-->

  </div>

  <!---gradesheet-->


<!---scholastic-->
  <div  v-else-if="defaultvalbutton ==='schol'">
  </div>

<!---scholastic-->


   <!---evaluation-->
   <div v-else>

  </div>
   <!---evaluation-->

  </div>

        
        </div>
      </div>
    </div>
    <vue-headful title="SR Detail"/>
  </div>
</template>

<script>

export default {
  bodyClass: "profile-page",
   name: 'TableSearch',
    data: () => ({
      defaultvalbutton: '',
      users: [
        {
          studno: 20191299,
          studname: "Ba-alan, Nikki E.",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191222,
          studname: "Maglangit, Trizha",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191223,
          studname: "Porral, Jacqueline C.",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191224,
          studname: "Lonnie Izkovitz",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191225,
          studname: "Thatcher Stave",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191226,
          studname: "Karim Chipping",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191227,
          studname: "Helge Holyard",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191228,
          studname: "Rod Titterton",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191229,
          studname: "Gawen Applewhite",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191230,
          studname: "Nero Mulgrew",
           program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191231,
          studname: "Cybill Rimington",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191232,
          studname: "Maureene Eggleson",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191233,
          studname: "Cortney Caulket",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191234,
          studname: "Selig Swynfen",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191235,
          studname: "Ingar Raggles",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191236,
          studname: "Karmen Mines",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191237,
          studname: "Salome Judron",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191238,
          studname: "Clarinda Marieton",
         program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191239,
          studname: "Paxon Lotterington",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
        {
          studno: 20191240,
          studname: "Maura Thoms",
          program: "Software Engineer",
          year: "3",
          section: "A"
        },
      ]
    }),
    methods:{
        showscholastictable(){
            this.defaultvalbutton = '';
           
        },
        showgradesheettable(){
            this.defaultvalbutton = '';
        },
        showevaluationtable(){
            this.defaultvalbutton = 'evaluation';
        },
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
.escord{
    margin: 1.5em 0 !important;
}
</style>