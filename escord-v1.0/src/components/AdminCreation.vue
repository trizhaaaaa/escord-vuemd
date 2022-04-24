
<template>
<div>
  <form @submit.prevent="addgs" class="add-form">
       <div class="form-control">
      <label>Lastname</label>
      <input type="text"  name="name" placeholder="Enter Your Name" />
    </div>
    <div class="form-control">
      <label>Firstname</label>
      <input type="text" name="age" placeholder="Enter Your Age"
      />
    </div>
    <div class="form-control">
      <label>Middlename</label>
      <input type="text" name="age" placeholder="Enter Your Age"
      />
    </div>
      <div class="form-control">
      <label>Email Address</label>
      <input type="text" name="age" placeholder="Enter Your Age"
      />
    </div>
       <div class="form-control">
      <label>Default Password</label>
      <p> {{formData.defaultpass}}</p>
    </div>
    <input type="submit" value="Save Information" class="btn btn-block" />
  </form>
</div>
</template>


<script>
import useVuelidate from '@vuelidate/core'
import { required,maxLength,email } from '@vuelidate/validators'

export default {
  name:'AdminCreation',
   data(){
    return{
      formData:{
          defaultpass : 'password123',
          

          }
    }
   }


}
</script>

<style scoped>
  

</style>