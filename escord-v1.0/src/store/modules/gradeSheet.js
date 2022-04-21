import axios from "axios"


const state = {
   

}
const getters = {
      
}
const actions = {
     addgsinfo({commit},formData) {
        axios.post('/api/gradesheetinfo', formData).then((response)=>{
        

          this.formData = {
            subjectcode :null ,
          units:null,
          subjectdesc:null,
          time:null,
          day:null,
          professor:null,
          course_short:null,
          course_year:null,
          course_section:null,
          semester:null,
          sem_startyear:null,
          sem_endyear:null,
          facultyrank:null,
        };

            console.log('adding successful' , response.data);

            
             }).catch((errors)=>{
       //   this.errors = errors.response.data.errors
             this.error =  errors.response.data;
             console.log('error in adding');
             })
     }

}


const mutations = {

}


export default {
    namespace:true,
    state,
    getters,
    actions,
    mutations
}