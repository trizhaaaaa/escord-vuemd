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




  

 router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize, requiresAuth } = to.meta;
   // const currentUser = authenticationService.currentUserValue;

  const currentUser = localStorage.getItem('role');
    if (requiresAuth) {
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
          if(currentUser === 'staff'){

            return next({ path: '/staff' });
          }
          if(currentUser === 'student'){
            return next({ path: '/studentdashboard' });
          }

        }
    }

    next();
})