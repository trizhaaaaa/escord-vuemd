<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">[ADMIN] Component</div>

                    <div class="card-body">
                         Dashboard 
                    <GradesheetMainMenu/>

                    </div>
                    <div>
               <button  type="submit" class="loginbtn mt-5">LOGout</button>
<!-- add attributes @click="logout" to button   -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import GradesheetMainMenu from "./GradesheetMainMenu.vue"
  export default {
      name : 'AdminDashboard',
       components: {
    GradesheetMainMenu
  }, 

    data: () => ({
      links: [
        'ADMIN Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>