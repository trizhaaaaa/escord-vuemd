<template>
  <div id="login-form">
    <center>
      <div class="l-form">
        <div class="form">
          <h1 class="form__title _title">ESCORD Log In </h1>
    <p class="text-danger" v-text="geterror"></p>

          <!--EMAIL INPUT-->
          <div class="form__div">
            
            <input
              type="email"
              name="email"
              class="form__input-text"
              required
              aria-describedby="emailHelp"
              v-model="formData.email"
              placeholder=" "
            />
            <label for="exampleInputEmail1" class="form__label">Email</label>
            <p>
              <span v-if="v$.formData.email.$error">{{
                v$.formData.email.$errors[0].$message
              }}</span>
            </p>
          </div>

          <!--PASSWORD INPUT-->
          <div class="form__div">
            <p class="text-danger" v-text="errors.password"></p>
            <input
              type="password"
              id="exampleInputPassword1"
              class="form__input-text"
              required
              v-model="formData.password"
              placeholder=" "
            />
            <label for="exampleInputPassword1" class="form__label"
              >Password</label
            >
            <p>
              <span v-if="v$.formData.password.$error">{{
                v$.formData.password.$errors[0].$message
              }}</span>
            </p>
          </div>

          <!--CHECKBOX-->
          <div class="form__div">
            <input
              type="checkbox"
              id="exampleCheck1"
              class="form__input-checkbox checkbox-circle"
            />
            <label for="exampleCheck1" class="form__label-checkbox"
              >Remember my password</label
            >
          </div>

          <input
            type="submit"
            class="form__button"
            value="Log In"
          v-on:click="login"
      
          />
          
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";

/* axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://127.0.0.1:8000" */

export default {
  name: "AdminLogin",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      formData: {
        password: "",
        email: "",
        device_name: "browser",
      },
      errors: "",
    };
  },
  validations() {
    return {
      formData: {
        email: { required, email },
        password: { required },
      },
    };
  },
  computed: {
    ...mapGetters({ geterror: "geterror" }),
  },

  methods: {
    ...mapActions({ loginUser: "loginUser" }),
login()
 {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.loginUser(this.formData);

        //

        /*  axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/adminlogin', this.formData).then((response)=>{
        //   localStorage.setItem('isLoggedIn','true');
           localStorage.setItem('token',response.data);
         
          //   this.$router.push({name:'Dashboard'});
        this.$router.push('Dashboard', () => this.$router.go(0))

          }).catch((errors)=>{
       this.errors = errors.response.data.errors
          })

              }); //end of axios
 */
      } else {
          console.log('there are needed data');
      }
      //this.v$.$touch();
      //console.log(this.v$)
      /*  
console.log('login'); */
    },
  },
};
</script>


<style scoped>
#login-form {
  width: 100vw;
  height: 530px;
}
._title {
  margin: 0;
}

.l-form {
  padding: 25px;
  width: 360px;
  height: 350px;
  margin: 20px 0;
}

.form {
  width: 360px;
  padding: 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.form__title {
  font-weight: 400;
  margin-bottom: 3rem;
}

.form__div {
  position: relative;
  height: 48px;
  margin-bottom: 1.5rem;
}

.form__input-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  border-bottom: 1px solid #dadce0;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
}

.form__label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0 0.25rem;
  background-color: #fff;
  color: #80868b;
  border-radius: 0.2rem;
  font-size: 18px;
  transition: 0.3s;
}

.form__button {
  display: block;
  margin: auto;
  padding: 0.75rem 5rem;
  outline: none;
  border: none;
  background-color: #ff980790;
  color: #545454;
  font-family: "Cuprum", sans-serif;
  font-size: 20px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
}

.form__button:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
  background-color: #ff9807;
  font-weight: bold;
}

.form__input-text:focus + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  color: #ff9807;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 10;
}

.form__input-text:not(:placeholder-shown).form__input-text:not(:focus)
  + .form__label {
  top: -0.5rem;
  left: 0.8rem;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 10;
}

.form__input-text:focus {
  border-bottom: 1.5px solid #ff9807;
}

.form__input-checkbox {
  accent-color: #ff9807;
  cursor: pointer;
}

@media screen and (max-width: 555px) {
  .l-form {
    left: 100%;
    top: 100%;
    transform: translate(-9%, 0%);
    width: 290px;
  }

  .form {
    width: 290px;
  }
}
</style>
