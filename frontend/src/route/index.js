import VueRouter from 'vue-router';
import routes from './router/route';
import store from '../store';

const router = new VueRouter({
   
    routes,

   
})

export default router;


function loggedIn(){
    return localStorage.getItem('token')
  
   
  }




  

 router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize, requiresAuth,requiresVisitor } = to.meta;
   // const currentUser = authenticationService.currentUserValue;

  const currentUser = localStorage.getItem('role');

  const isAuthenticated = store.state.currentUser.isAuthenticated;
    if (requiresAuth) {
        if (!loggedIn()) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/'});
        }
     

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser)) {
            // role not authorised so redirect to home page
            
            if(currentUser === 'superadmin'){
            return next({  name: "Admin Dashboard" });
          }
          if(currentUser === 'student'){

            return next({name: "Student Dashboard" });
          }
          if(currentUser === 'professor'){
            return next({  name: "Professor Dashboard" });
          }
          if(currentUser === 'staff'){
            return next({  name: "Staff Dashboard" });
          }

        }
    }

    next();

})



/* beforeEnter: async (to, from, next) => {
  const isAuthenticated = store.state.currentUser.isAuthenticated;

  if (isAuthenticated) {
      return next("/prof-dashboard/:userid");
  }

  next();
}, */