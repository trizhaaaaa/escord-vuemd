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
          <md-button @click="Addnewusermodal = true">Add new User</md-button>

        
        </div>
      </div>
    </div>
    <Addnewusermodal v-if="Addnewusermodal" @close = "AddnewusermodalHide"/>
    <vue-headful title="SR Detail"/>
  </div>
</template>

<script>
import Addnewusermodal from "@/escord-components/Manager/New.vue";
export default {
bodyClass: "profile-page",
components: {
    Addnewusermodal
},
  data() {
    return {
      Addnewusermodal:false
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
      }
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
