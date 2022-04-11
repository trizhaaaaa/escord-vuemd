import VueRouter from 'vue-router';
import routes from './router/route';
import store from '../store';

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;


function loggedIn(){
    return localStorage.getItem('token')
  
  
  }

/* router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page
        console.log(store.getters.getrole);
      if (!loggedIn() ) {
        next({
          path: '/',
        })
      } else {
         next()
      }
    } else {
      next() // make sure to always call next()!
    } 
  }) */



  

 router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;
   // const currentUser = authenticationService.currentUserValue;

  const currentUser = localStorage.getItem('role');
    if (authorize) {
        if (!loggedIn()) {
            // not logged in so redirect to login page with the return url
            return next({ path: '/'});
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser)) {
            // role not authorised so redirect to home page
            
            if(currentUser === 'superadmin'){
            return next({ path: '/dashboard' });
          }
          if(currentUser === 'admin'){
            return next({ path: '/admindashboard' });
          }
          if(currentUser === 'student'){
            return next({ path: '/studentdashboard' });
          }

        }
    }

    next();
})