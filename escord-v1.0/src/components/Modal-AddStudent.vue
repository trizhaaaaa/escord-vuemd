<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">

      <!-- Header -->
      <header class="modal-header">
         <h1>Add Student</h1>
      </header>

     

      <!-- Body -->
      <section class="modal-body">

          <div class="body-content">

              <div class="stud-id">
                  <label for="studID" class="input__label">Student Number</label>
                  <input type="text" name="studID" id="studID" class="input__text" required>
              </div>
                  
             <div class="stud-name">
                <label for="studLN" class="input__label">Last Name</label>
                <input type="text" name="studLN" id="studLN" size="30" class="input__text" required>
             </div>

             <div class="stud-name">
                <label for="studFN" class="input__label">First Name</label>
                <input type="text" name="stuFN" id="studFN" size="30" class="input__text" required>
             </div>

             <div class="stud-name">
                <label for="studMN" class="input__label">Middle Name</label>
                <input type="text" name="studMN" id="studMN" size="30" class="input__text">
             </div>
                

             <div class="stud-prog">
                 <label for="studProg" class="input__label">Program</label>
                 <input type="text" name="studProg" id="studProg" class="input__text" required>
             </div>
              
              <div class="stud-yrsec">
                <label for="studYr" class="input__label">Year</label>
                <input type="text" name="studYr" id="studYr" size="1" maxlength="1" class="input__text charInp">

                <label for="studSec" class="input__label _sec">Section</label>
                <input type="text" name="studSec" id="studSec" size="1" maxlength="1" class="input__text charInp">
             </div>            

          </div>

      </section>
      
      <!-- Footer -->
      <footer class="modal-footer">
         <p class="p__footer">Please review your inputs before proceeding.</p><br>
          <div class="footer-btn">
            <button
            type="button"
            class="btn-footer-cancel"
            @click="close"
            >
            Cancel
            </button>
            
            <button
            type="submit"
            class="btn-footer-add"
            @click="addgs"
            >
            Add Student
            </button>
          </div>
      </footer>

    </div>
  </div>
</transition>
</template>

<script>
export default {
  
  data(){
    return{
      
    }
  },

   methods:{
    close(){
      this.$emit('close');
      }
    }
}
</script>

<style scoped>

  .body-content div {
        margin-top: 1rem;
    }
  
  .stud-id, .stud-name, .stud-prog, .stud-yrsec {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .input__label {
      font-family: "Cuprum",sans-serif;
      text-align: left;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      width: 10rem;
      margin: 0 0.5rem;
      flex-shrink: 0;
  }

  ._sec {
      width: 5rem;
  }

  .input__text {
      outline: none;
      flex: 1;
      margin: 0 0.5rem;
      width: 0;
      max-width: 30rem;
      border-bottom: 1px solid #bdbdbd;
      border-radius: 5px;
      padding: 3px 0 3px 10px;
      box-sizing: border-box;
      color: #545454;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.1rem;
  }

  .charInp {
      max-width: 9rem;
  }


  .p__text{
    float: left;
    margin-left: 20px;
    font-weight: bold;
    letter-spacing: 0.5rem;
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
    z-index: 99;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 38rem;
    height: 90%;
    max-height: 31rem;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #cccccc;
    color: #545454;
    text-shadow: 2px 2px 5px #ff9807;
    justify-content: center;
  }

  .modal-footer {
    border-top: 1px solid #cccccc;
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

  .btn-footer-cancel {
    color: #545454;
    background: #fff;
    border: 2px solid #545454;
    border-radius: 10px;
    padding: 7px 10px;
    margin-right: 1rem;
    transition-duration: 0.3s;
  }

  .btn-footer-cancel:hover{
    background: #545454;
    color: #fff;
  }

  .btn-footer-add {
    color: #545454;
    font-weight: 600;
    background: #ff9807aa;
    border: 2px solid #ff9807aa;
    border-radius: 10px;
    padding: 7px 10px;
  }

   .btn-footer-add:hover{
    background: #ff9807;
    box-shadow: 2px 2px 10px 1px #dadada;
  }

  .modal-fade-enter, 
  .modal-fade-leave-to{
    opacity: 0;
  }

  .modal-fade-enter-active, 
  .modal-fade.leave-active{
    transition: opacity 0.5s ease;
  }

  .p__footer{
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: #2d2d2d;
    background: #ff98077e;
    padding: 5px 0;
  }

  /* scrollbar */

::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-thumb{
  background: #ff9807aa;
  background-clip: padding-box;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover{
  background: #ff9807;
}


</style>