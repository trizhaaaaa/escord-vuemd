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
import escLanding from "./escord-components/esc-Landing.vue";
import escLanding2 from "./escord-components/esc-Landing-2.vue";
import escAbout from "./escord-components/esc-About.vue";
import escContactUs from "./escord-components/esc-ContactUs.vue";
import escStudDash from "./escord-components/Student/studDashboard.vue";
import escProfDash from "./escord-components/Prof/profDashboard.vue";
import escStaffScholasticRecord from "./escord-components/Staff/StaffScholasticRecord.vue";
<<<<<<< HEAD
import escStaffEvaluationForm from "./escord-components/Staff/staffEvaluationForm.vue";
=======
import escProf_GSPage from "./escord-components/Prof/profGradesheetPage.vue";
import escStaffDash from "./escord-components/Staff/staffDashboard.vue";

>>>>>>> 8b2d631dc5a8b8c40613d286db48bf1d85b6ae57

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
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
      path: "/student-dashboard",
      name: "Student Dashboard",
      component: escStudDash
    },
    {
      path: "/prof-dashboard",
      name: "Professor Dashboard",
      components: {default: escProfDash, header: escHeader, footer: escFooter}
    },
    {
      path: "/Staff-scholastic-record",
      name: "Staff Scholastic-record",
      component: escStaffScholasticRecord
    },
    {
<<<<<<< HEAD
      path: "/staff-evaluation-form",
      name: "Staff Evaluation form",
      component: escStaffEvaluationForm
=======
      path: "/gradesheet-detail",
      name: "Gradesheet Detail",
      component: escProf_GSPage
    },
    {
      path: "/staff-dashboard",
      name: "Staff Dashboard",
      component: escStaffDash

>>>>>>> 8b2d631dc5a8b8c40613d286db48bf1d85b6ae57
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
