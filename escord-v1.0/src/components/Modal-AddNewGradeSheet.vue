<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">

      <!-- Header -->
      <header class="modal-header">
         <h1>Add New Grade Sheet</h1>
         <!-- <button
         type="button"
         class="btn-close fa fa-times"
         @click="close"
         ></button> -->
      </header>

      <!-- Body -->
      <section class="modal-body">
        <table>
          <tr>
            <td class="input__label" colspan="1"><label for="gs-id">Grade Sheet ID</label></td>
            <td colspan="3"><p class="p__text">This is a gradesheet ID.</p></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjCode">Subject Code</label></td>
            <td class="input__text" colspan="1"><input type="text" name="subjCode" id="subjCode"></td>

            <td class="input__label" colspan="1"><label for="subjUnit">Units</label></td>
            <td class="input__text" colspan="1"><input type="text" name="subjUnit" id="subjUnit"></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjDesc">Subject Description</label></td>
            <td class="input__text" colspan="3"><input type="text" name="subjDesc" id="subjDesc"></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1">Schedule</td>
            <td class="input__text" colspan="2"><input type="text" name="subjTime" id="subjTime" placeholder="Time"></td>
            <td class="input__text" colspan="2"><input type="text" name="subjDay" id="subjDay" placeholder="Day"></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjProf">Instructor</label></td>
            <td class="input__text" colspan="3"><input type="text" name="subjProf" id="subjProf"></td>
          </tr>

          <tr class="classInfo">
            <td class="input__label" colspan="1">Class Information</td>

            <td class="input__text" colspan="3"><input type="text" name="classProg" id="classProg" placeholder="Program"></td> <!-- make this a dropdown list -->
          </tr>

          <tr>
            <td class="space" colspan="1"> </td>
            <td class="input__text" colspan="2"><input type="text" name="classYr" id="classYr" placeholder="Year"></td>
            <td class="input__text" colspan="2"><input type="text" name="classSec" id="classSec" placeholder="Section"></td>
          </tr>

          <tr>
            <td class="space" colspan="1"> </td>
            <td class="input__text" colspan="2"><input type="text" name="classSem" id="classSem" placeholder="Semester"></td>
            <td class="input__text" colspan="2"><input type="text" name="classSY" id="classSY" placeholder="Academic Year"></td>
          </tr>
        </table>
      </section>
      
      <!-- Footer -->
      <footer class="modal-footer">
         <p>Please review your inputs before proceeding.</p>
          <div class="footer-btn">
            <button
            type="button"
            class="btn-footer"
            @click="close"
            >
            Cancel
            </button>
            
            <button
            type="button"
            class="btn-footer"
            @click="add"
            >
            Add Grade Sheet
            </button>
          </div>
      </footer>

    </div>
  </div>
</transition>
</template>

<script>

export default {
  name: 'Modal',
  methods:{
    close(){
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  table{
    width: 100%;
  }
  
  .input__label{
    float: left;
    font-weight: 700;
  }

  input{
    width: 90%;
    margin: 0 0 0 10px;
    float: left;
  }

  .p__text{
    float: left;
    margin-left: 5px;
  }


  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .footer-btn{
    margin-top: 5px;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 25%;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-footer {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    padding: 5px;
  }

  .modal-fade-enter, 
  .modal-fade-leave-to{
    opacity: 0;
  }

  .modal-fade-enter-active, 
  .modal-fade.leave-active{
    transition: opacity 0.5s ease;
  }

  p{
    font-size: 0.8rem;
    color: rgb(224, 224, 22);
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }
</style>