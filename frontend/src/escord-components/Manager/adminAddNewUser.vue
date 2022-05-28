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
          <md-button @click="Addnewusermodal = true">Admin</md-button>  <!-- STAFFF -->
           <md-button @click="AddCreateStudent = true">Student</md-button> <!--STUDENT-->

        
        </div>
      </div>
    </div>
    <Addnewusermodal v-if="Addnewusermodal" @close="AddnewusermodalHide"/>

    <AddCreateStudent v-if="AddCreateStudent" @close="AddfuncCreateStudentHide" />
    
    <vue-headful title="SR Detail"/>
  </div>
</template>

<script>
import Addnewusermodal from "./adminCreateAccount.vue"
import AddCreateStudent from './adminCreateStudent.vue'
export default {
bodyClass: "profile-page",
name:'Addnewuser',
components: {
    Addnewusermodal,
    AddCreateStudent
},
  data() {
    return {
      Addnewusermodal:false,
        AddCreateStudent:false

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
  },
  methods: {
      AddnewusermodalHide(){
          this.Addnewusermodal = false;
      },

       AddfuncCreateStudentHide(){
          this.AddCreateStudent = false;
      }
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>