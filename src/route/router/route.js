import Index from "@/views/Index.vue";
import store from '../../store';

import Landing from "@/views/Landing.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";

import NotFound from "@/layout/NotFoundPage.vue";
import escHeader from "@/escord-components/esc-Header.vue";
import escFooter from "@/escord-components/esc-Footer.vue";
import Professor from "@/escord-components/Prof/Professor.vue"
import ForgotPassword from "@/escord-components/ForgotPassword/esc-Forgot.vue"
import ResetPasswordForm from "@/escord-components/ForgotPassword/ResetPassword.vue"
//import downloadArch from "@/escord-components/Prof/ProfDownload.vue"

//const escHeader = () => import("@/escord-components/esc-Header.vue");


//---| ESCORD COMPONENTS |---
//import escLogin from "../../escord-components/esc-Login.vue";
//import escLanding from "../../escord-components/esc-LandingPage.vue";
//import escStudDash from "../../escord-components/Student/studDashboard.vue";
//import escProfDash from "../../escord-components/Prof/profDashboard.vue";

//import escProf_GSPage from "../../escord-components/Prof/profGradesheetPage.vue";
//const downloadArch = () => import("../../escord-components/Prof/ProfDownload.vue");



const escStaffDash = () => import('../../escord-components/Staff/staffDashboard-2.vue');

const escLogin = () => import('../../escord-components/esc-Login.vue')
const escLanding = () => import('../../escord-components/esc-Landing.vue')
const escProfDash = () => import('../../escord-components/Prof/profDashboard.vue')
const escProf_GSPage = () => import('../../escord-components/Prof/profGradesheetPage.vue')


const escStudDash  = () => import('../../escord-components/Student/studDashboard.vue')

const escAbout  = () => import('../../escord-components/esc-About.vue')
const escContactUs  = () => import('../../escord-components/esc-ContactUs.vue')
const escStaffScholasticRecord  = () => import('../../escord-components/Staff/StaffScholasticRecord.vue')

const escRegister  = () => import('../../escord-components/esc-Register.vue')

const escStaff_SRPage   = () => import("../../escord-components/Staff/staffScholasticRecordDetail.vue")
const escAdminDash   = () => import("../../escord-components/Manager/adminDashboard.vue")

const escViewArchieveGrade   = () => import("../../escord-components/Prof/viewArchieveGradesheet")

const escProf_ArchTable   = () => import("../../escord-components/Prof/profArchieveGradesheet")
const escStaff_SRTab   = () => import("../../escord-components/Staff/ScholasticRecordTab.vue")
const escStaff_ArchTable   = () => import("../../escord-components/Staff/staffArchieveTable")

const escAdminDash2  = () => import('../../escord-components/Manager/adminDashboard-2.vue')
const escEval  = () => import('../../escord-components/Staff/Eval-2.vue')
const escEvalstud =  () => import('../../escord-components/Student/studEval-2.vue')
const escTableEval = () =>  import('../../escord-components/Student/studEvalTable.vue')
const escScholasticStud = () =>  import('../../escord-components/Student/studScholastic.vue')


/* EVAL FORM PREVIEW */
import evalprev from '../../escord-components/Staff/Eval-2.vue';
import evalprev1 from '../../escord-components/Staff/evalFormPreview.vue';

const routes = [
  {
    path: "/prev",
    name: "EvalPrev",
    component: evalprev
  },

  {
    path: "/prev1/:studnum/:srmsid",
    name: "EvalPrev1",
    component: evalprev1,
    props: true
  },

  /*---| ESCORD ROUTES |----*/

  /* GENERAL PAGES */
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/",
    name: "Landing",
    //component: escLanding,
    components: {default: escLanding, header: escHeader, footer: escFooter},
  },
  {
    path: "/contact-escord",
    name: "Contact Us",
    components: {default: escContactUs, header: escHeader, footer: escFooter}
  },

  //suggest imodal to
  {
    path: "/login",
    name: "Login",
    //component: escLogin,
    components: {default: escLogin, header: escHeader, footer: escFooter},
   
  },


  {
    path: "/register",
    name: "Register",
    components: {default: escRegister, header: escHeader, footer: escFooter}
  },
  {
    path: "/about-escord",
    name: "About",
    components: {default: escAbout, header: escHeader, footer: escFooter}
  },
  /* END OF GENERAL PAGES 
   *
   * -------------------------------------------------------------------------- 
   *
   * DASHBOARDS */
  {
    path: "/admin-dashboard",
    name: "Admin Dashboard",
    components: {default: escAdminDash, header: escHeader, footer: escFooter},
    //meta: { requiresAuth: true, authorize: 'superadmin' } ,
  },
  {
    path: "/staff-dashboard",
    name: "Staff Dashboard",
    components: {default: escStaffDash, header: escHeader, footer: escFooter},
    //meta: { requiresAuth: true, authorize: 'staff' } ,

  },
  {
    path: "/student-dashboard/:student_number",
    name: "Student Dashboard",
    components: {default: escStudDash, header: escHeader, footer: escFooter},
    //meta: { requiresAuth: true, authorize: 'student' } ,

  },
 
  /* END OF DASHBOARDS 
   *
   * -------------------------------------------------------------------------- 
   *
   * PAGES FOR PROFESSOR */

  /* Professor Component
  
  {
    path: "/prof-dashboard/:userid",
    name: "Professor Dashboard",
    components: {default: escProfDash, header: escHeader, footer: escFooter},
  
   meta: { requiresAuth: true, authorize: 'professor' } ,
  
  },


  {
    path: "/gradesheet-detail/:userid/:gradeshid",
    name: "Gradesheet Detail",
    components: {default: escProf_GSPage, header: escHeader, footer: escFooter}
  },
  {
    path: "/archievegradesheet/:archievegs",
    name: "GradesheetArchieve",
    component: escViewArchieveGrade,
 
  },
  {
    path: "/archievetableprof/:userid",
    name: "ProfessorArchieve Table",
    component:  escProf_ArchTable,
 
  }, */
  /* END OF PAGES FOR PROFESSOR 
   *
   * -------------------------------------------------------------------------- 
   *
   * PAGES FOR STAFF */
  {
    path: "/Staff-scholastic-record",
    name: "Staff Scholastic-record",
    components: {default: escStaffScholasticRecord, header: escHeader, footer: escFooter}
  },
  {
    path: "/scholastic-record-detail",
    name: "Scholastic Record Detail",
    components: {default: escStaff_SRPage, header: escHeader, footer: escFooter}
  },
  {
    path: "/scholasticrecordtab",
    name: "ScholasticRecordTab",
    components: {default: escStaff_SRTab, header: escHeader, footer: escFooter}
  },
  {
    path: "/staffArchieve",
    name: "StaffArchieve",
    components: {default:  escStaff_ArchTable,  footer: escFooter}
  },
  /* END OF PAGES FOR STAFF 
   *
   * -------------------------------------------------------------------------- 
   * 
   * ADMIN PAGES (FOR PREVIEW ONLY) */
 /*  {
    path: "/overview",
    name: "Overview",
    component: escAdminOverview
  },
  {
    path: "/manage-account",
    name: "Manage Account",
    component: escAdminManageAccount
  },
  {
    path: "/audit-trail",
    name: "Audit Trail",
    component: escAdminAuditTrail
  }, */
  
  //DONE PROF
  {
    path: '/professor',
    redirect: { name: 'Professor Dashboard' },
    components: {default: Professor,header: escHeader, footer: escFooter },
    children : [
      {
        path: "/prof-dashboard/:userid",
        name: "Professor Dashboard",
        components: {default: escProfDash, header: escHeader, footer: escFooter},   
         //meta: { requiresAuth: true, authorize: 'professor' } ,
      //uncomment this to have a login validation
      },

      {
        path: "/gradesheet-detail/:userid/:gradeshid",
        name: "Gradesheet Detail",
        components: {default: escProf_GSPage, header: escHeader, footer: escFooter},
        meta: { requiresAuth: true, authorize: 'professor' } ,
      },
      {
        path: "/archievegradesheet/:archievegs",
        name: "GradesheetArchieve",
        components: {default: escViewArchieveGrade, header: escHeader, footer: escFooter},
        meta: { requiresAuth: true, authorize: 'professor' } ,
     
      },

      {
        path: "/archievetableprof/:userid",
        name: "ProfessorArchieve Table",
        component:  escProf_ArchTable,
        //meta: { requiresAuth: true, authorize: 'professor' } ,
      },

      
  
  ],
    meta: { requiresAuth: true, authorize: 'professor' } ,
   
  },

  //expirement


  { 
    path: '/sendemail-forget', 
    name: 'reset-password', 
    component: ForgotPassword, 
    
  },
  { 
    path: '/resetpassword', 
    name: 'reset-password-form', 
    component: ResetPasswordForm, 
   
  },

//staff
  { 
    path: '/eval/:studnum', 
    name: 'EscEval', 
    component: escEval, 
   
  },


  //student

  { 
    path: '/evalstud/:student_number/:srms_id', 
    name: 'EscTableEval', 
    component: escTableEval, 
   
  },

  { 
    path: '/evalstud/:student_number/:evalid', 
    name: 'EscEvalstud', 
    component: escEvalstud, 
   
  },

  { 
    path: '/scholastic/:student_number', 
    name: 'Scholastic RecordStudent', 
    component:  escScholasticStud, 
   
  },

 
  

  
]


export default routes;
