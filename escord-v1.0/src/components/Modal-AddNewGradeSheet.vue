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
           <p class="text-danger"> <span v-if="error.message"> {{error.message}}</span></p>
        <table>
          <tr>
            <td class="input__label" colspan="1"><label for="gs-id">Grade Sheet ID</label></td>
            <td colspan="3"><p class="p__text">This is a unique and randomized gradesheet ID.<br>EXAMPLE-->{{formData.gradesheetid}}</p></td>
          </tr>

          <tr class="hr">
            <td colspan="4"></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjCode">Subject Code</label></td>
            <td class="input__text" colspan="1"><input type="text" name="subjCode" id="subjCode" required v-model="formData.subjectcode"></td>

            <td class="input__label" colspan="1"><label for="subjUnit">Units</label></td>
            <td class="input__text" colspan="1"><input type="text" name="subjUnit" id="subjUnit" v-model="formData.units" required></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjDesc">Subject Description</label></td>
            <td class="fullLine" colspan="3"><input type="text" name="subjDesc" id="subjDesc" v-model="formData.subjectdesc" required></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1">Schedule</td>
            <td class="input__text" colspan="2"><input type="text" name="subjTime" id="subjTime" placeholder="Time" v-model="formData.time" required></td>
            <td class="input__text" colspan="2"><input type="text" name="subjDay" id="subjDay" placeholder="Day" v-model="formData.day" required></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1"><label for="subjProf">Instructor</label></td>
            <td class="fullLine" colspan="3"><input type="text" name="subjProf" id="subjProf" placeholder="Professor" v-model="formData.professor" required></td>
           
          </tr>
             <tr>
            <td class="input__label" colspan="1"></td>
               <p> <span v-if="v$.formData.facultyrank.$error">{{ v$.formData.facultyrank.$errors[0].$message  }}</span> <!--THIS IS THE ERROR MESSAGE NEED TO DESIGN -->

            
            </p>
            <td class="fullLine" colspan="3"><input type="text" name="subjProf" id="subjProf" placeholder="faculty rank" v-model="formData.facultyrank" required></td>
           
          </tr>

          <tr class="hr">
            <td colspan="4"></td>
          </tr>

          <tr>
            <td class="input__label" colspan="1">Class Information</td>

            <td class="fullLine" colspan="3"><input type="text" name="classProg" id="classProg" placeholder="Program" v-model="formData.course_short"  required></td> <!-- make this a dropdown list -->
          </tr>

          <tr>
            <td class="space" colspan="1"> </td>
            <td class="input__text" colspan="2"><input type="text" name="classYr" id="classYr" placeholder="Year" v-model="formData.course_year"  required></td>
            <td class="input__text" colspan="2"><input type="text" name="classSec" id="classSec" placeholder="Section" v-model="formData.course_section" ></td>
          </tr>

          <tr>
            <td class="space" colspan="1"> </td>
            <td class="input__text" colspan="2"><input type="text" name="classSem" id="classSem" placeholder="Semester" v-model="formData.semester"  required></td>
          
          </tr>
            <tr>
            <td class="space" colspan="1"> </td>
              <td class="input__text" colspan="2"><input type="text" name="classSY" id="classSY" placeholder="Start Acad Year" v-model="formData.sem_startyear" required></td>
              <td class="input__text" colspan="2"><input type="text" name="classSY" id="classSY" placeholder="End Acad Year"  v-model="formData.sem_endyear" required></td>
          </tr>


        </table>
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
            Add Grade Sheet
            </button>
          </div>
      </footer>

    </div>
  </div>
</transition>
</template>

<script>


import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapActions} from "vuex";



export default {
  name: 'Modal',
setup: () => ({ v$: useVuelidate() }),
  data(){
    return{
      formData:{
      gradesheetid: 'GS-' + Math.ceil(Math.random()*10000000),
      subjectcode : '',
      units:'',
      subjectdesc:'',
      time:'',
      day:'',
      professor:'',
      course_short:'',
      course_year:'',
      course_section:'',
      semester:'',
      sem_startyear:'',
      sem_endyear:'',
      facultyrank:'',
        },
        error:{
        }
    }
  },

  validations(){
 return {
      formData:{
      gradesheetid: {required},
      subjectcode :{required} ,
      units:{required},
      subjectdesc:{required},
      time:{required},
      day:{required},
      professor:{required},
      course_short:{required},
      course_year:{required},
      course_section:{required},
      semester:{required},
      sem_startyear:{required},
      sem_endyear:{required},
      facultyrank:{required},
       }
    }
  },

   methods:{
       ...mapActions({ addgsinfo: "addgsinfo" }),
     addgs(){
            this.v$.$validate()

            if(!this.v$.$error){

              
      this.addgsinfo(this.formData);

            }else{
              console.log(this.v$);
            }

     },
    close(){
      this.$emit('close');
    
      }
    },

 
}
</script>

<style scoped>
  table{
    width: 100%;
  }
  
  tr td{
    padding: 5px 0 8px 0;
  }

  tr.hr td{
    border-bottom: 1px solid #eeeeee;
  }

  .input__label{
    float: left;
    text-transform: uppercase;
    text-shadow: 2px 2px 20px #ff9807;
    font-family: "Cuprum", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  .input__text input{
    width: 85%;
  }

  .fullLine input{
    width: 93%;
  }

  input{
    margin: 0 0 0 10px;
    float: left;
    border-bottom: 1px solid #bdbdbd;
    border-radius: 5px;
    outline: none;
    padding: 3px 0 3px 10px;
    box-sizing: border-box;
    color:#545454d5;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }

  input:focus{    
    border-bottom: 1px solid #ff9807;
    background-color: #ff980746;
  }

  input:hover:not(:focus){
    background-color: #ff98071a;
  }

  ::placeholder{
    text-transform: capitalize;
    padding: 10px 0 5px 5px;
    font-weight: 500;
  }

  .p__text{
    float: left;
    margin-left: 10px;
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
    min-width: max-content;
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
    font-weight: 600;
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
</style>