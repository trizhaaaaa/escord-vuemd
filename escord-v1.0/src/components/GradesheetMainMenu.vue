<template>
    <div id = "gs-mainmenu">

        <!--Return to Main Menu-->
        <div class = "btn-returnMain">
        <button type="button" class="button">
        <span class="button__text">Return to Main Menu</span>
        </button>
        </div>

        <!--Search Bar-->
        <div class="search-bar">
        <div class="fa fa-search"></div>
        <input type="text" placeholder="Search..." />
        <div class="fa fa-times"></div>
        </div>

        <!--Adding Gradesheet-->
        <div class="btn-addGS">
        <button type="button" 
        class="button"
        @click="showModal">
        <span class="button__text">Add Grade Sheet</span>
        </button>
        </div>

      <!-- <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button> -->

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
        
    </div>
</template>

<script>
import Modal from "./Modal-AddNewGradeSheet.vue"

export default {
  components: {
    Modal
  }, 
  data(){
    return{
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style scoped>
div#gs-mainmenu{
    height: 500px;
}
div.btn-returnMain, div.search-bar, div.btn-addGS{
  display: flex;  
  align-items: center;
  justify-content: space-between;
  background: #e26d5c;
  margin: 20px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0.25rem 0.25rem 0rem #f0b2a8;
}
input {
  margin: 0 0.5rem 0 5rem;
  width: 100%;
  border: none;
  outline: none;
  background: #e26d5c;
  color: white;
}

::placeholder {
  color: #f0b2a8;
}

.button {
  display: flex;
  height: 50px;
  padding: 0;
  background: #ddb374;
  border: none;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 150%;
  text-align: center;
}

.button:hover {
  background: #252727;

}

.button:active {
  background: #006e58;
}

.button__text,
.button__icon {
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: #fff;
  height: 100%;
}

.button__icon {
  font-size: 1.5em;
  background: rgba(0, 0, 0, 0.08);
}
</style>
