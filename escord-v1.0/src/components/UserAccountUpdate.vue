<template>
  <div>
  <form @submit.prevent="addgs" class="add-form">
       <div class="form-control">
      <label>Lastname</label>
      <input type="text"  name="name" placeholder="Lastname" />
    </div>
    <div class="form-control">
      <label>Firstname</label>
      <input type="text" name="age" placeholder="Firstname"
      />
    </div>
    <div class="form-control">
      <label>Middlename</label>
      <input type="text" name="age" placeholder="Middlename"
      />
    </div>
      <div class="form-control">
      <label>Email Address</label>
      <input type="text" name="age" placeholder="Email"
      />
    </div>
    <div class="form-control">
      <label>Old Password</label>
      <input type="password" name="age" placeholder="Password"
      />
    </div>
         <div class="form-control">
      <label>New Password</label>
      <input type="password" name="age" placeholder="Password"
      />
    </div>
    <input type="submit" value="Save Information" class="btn btn-block" />
  </form>
</div>
</template>

<script>
export default {
    name:'UserAccountUpdate',

}
</script>

<style>

</style>