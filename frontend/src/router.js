//do not use this router


import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

/*---| ESCORD COMPONENTS |---*/
import escHeader from "./escord-components/esc-Header.vue";
import escFooter from "./escord-components/esc-Footer.vue";
import escLogin from "./escord-components/esc-Login.vue";
import escRegister from "./escord-components/esc-Register.vue";
import escLanding from "./escord-components/esc-Landing.vue";
import escLanding2 from "./escord-components/esc-Landing-2.vue";
import escAbout from "./escord-components/esc-About.vue";
import escContactUs from "./escord-components/esc-ContactUs.vue";
import escStudDash from "./escord-components/Student/studDashboard.vue";
import escProfDash from "./escord-components/Prof/profDashboard.vue";
import escStaff_SRPage from "./escord-components/Staff/staffScholasticRecordDetail.vue";
import escProf_GSPage from "./escord-components/Prof/profGradesheetPage.vue";
import escStaffDash from "./escord-components/Staff/staffDashboard.vue";
import EvaluationFormTab from "./escord-components/Staff/EvaluationFormTab.vue";
import ScholasticRecordTab from "./escord-components/Staff/ScholasticRecordTab.vue";

Vue.use(Router);


function loggedIn(){
  return localStorage.getItem('token');
 
}

function guardMyroute(to, from, next){


  // redirect to login page if not logged in and trying to access a restricted page
const { authorize, requiresAuth } = to.meta;
 // const currentUser = authenticationService.currentUserValue;

const currentUser = localStorage.getItem('role');

  if (requiresAuth) {
      if (!loggedIn()) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/login-to-escord'});
      }

      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser)) {
          // role not authorised so redirect to home page
          console.log(currentUser);
          if(currentUser === 'superadmin'){
          return next({ path: '/dashboard' }); //no component
        }
        if(currentUser === 'staff'){

          return next({ path: '/staff' }); //mno component
        }
        if(currentUser === 'student'){
          return next({ path: '/student-dashboard' });
        }
        if(currentUser === 'professor'){
          return next({ path: '/prof-dashboard' });
        }

      }
  }




}



export default new Router({
  routes: [
    // {
    //   path: "/index",
    //   name: "index",
    //   components: { default: Index, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/landing",
    //   name: "landing",
    //   components: { default: Landing, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   components: { default: Login, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 }
    //   }
    // },
    // {
    //   path: "/profile",
    //   name: "profile",
    //   components: { default: Profile, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: "black" }
    //   }
    // },

    //---| ESCORD ROUTES |----
    {
      path: "/",/*"/welcome-to-escord",*/
      name: "Landing",
      components: {default: escLanding, header: escHeader, footer: escFooter}
    },
    {
      path: "/landing-og",/*"/welcome-to-escord",*/
      name: "Landing OG",
      components: {default: escLanding2, header: escHeader, footer: escFooter}
    },
    {
      path: "/about-escord",
      name: "About",
      components: {default: escAbout, header: escHeader, footer: escFooter}
    },
    {
      path: "/contact-escord",
      name: "Contact Us",
      components: {default: escContactUs, header: escHeader, footer: escFooter}
    },
    {
      path: "/login-to-escord",
      name: "Login",
      components: {default: escLogin, header: escHeader, footer: escFooter}
    },
    {
      path: "/register-to-escord",
      name: "Register",
      components: {default: escRegister, header: escHeader, footer: escFooter}
    },
    {
      path: "/student-dashboard",
      name: "Student Dashboard",
      components: {default: escStudDash, header: escHeader, footer: escFooter}
    },
    {
      path: "/prof-dashboard",
      name: "Professor Dashboard",
      components: {default: escProfDash, header: escHeader, footer: escFooter}
    },
    {
      path: "/staff-dashboard",
      name: "Staff Dashboard",
      components: {default: escStaffDash, header: escHeader, footer: escFooter}
    },
    {
      path: "/scholastic-record-detail",
      name: "Scholastic Record Detail",
      components: {default: escStaff_SRPage, header: escHeader, footer: escFooter}
    },
    {
      path: "/gradesheet-detail",
      name: "Gradesheet Detail",
      components: {default: escProf_GSPage, header: escHeader, footer: escFooter}
    },
    {
      path: "/staff-evaluationformtab",
      name: "EvaluationFormTab",
      component: EvaluationFormTab
    },
    {
      path: "/staff-scholasticrecordtab",
      name: "ScholasticRecordTab",
      component: ScholasticRecordTab
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});



