<template>
  <h1>LOGIN</h1>
  <form>
    <!-- <p v-if="errors.length">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p> -->

    <input 
      id="email"
      type="email" 
      placeholder="Email"
      v-model.trim="v$.form.email.$model"
      :state="getValidation('email')"
    />
    <!-- :class="{ error: v$.form.email.$error }"  -->
    <input
      id="password"
      type="password"
      placeholder="Password"
      v-model.trim="v$.form.password.$model"
      :state="getValidation('password')"
    />
    <!-- :class="{ error: v$.form.password.$error }"  -->
    <button type="button" @click="login">LOG IN</button>
    <button type="button" @click="register">Register</button>
    <small><a href="#">Forgot password</a></small>
  </form>
</template>

<script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, minLength, email } from '@vuelidate/validators'

  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    
    data() {
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },

    validations() {
      return {
        form: {
          email: {
            required,
            email
          },
          password: {
            required,
            minLength: minLength(6)
          },
        }
      }
    },

    methods: {
      login() {
        this.v$.$touch();
        if(this.v$.$error) {
          return;
        }
      },

      register() {
        this.$router.push({name: 'register'})
      },
      
      getValidation(field) {
        if(this.v$.form.$dirty === false) {
          return null;
        }
        return !this.v$.form[field].$error;
      }

    }
    
  }
</script>

<style lang="scss" scoped>
  // .error {
  //   border: 3px solid red;
  // }
</style>

