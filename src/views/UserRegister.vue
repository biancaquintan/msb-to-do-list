<template>
  <h1>REGISTER</h1>
  <form>
    <!-- <p v-if="errors.length">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p> -->

    <input
      type="text" 
      placeholder="Name"
      v-model.trim="v$.form.name.$model"
      :state="getValidation('name')"
    />
    <input
      type="email" 
      placeholder="Email"
      autocomplete="off"
      v-model.trim="v$.form.email.$model"
      :state="getValidation('email')"
    />
    <!-- :class="{ error: v$.form.email.$error }"  -->
    <input
      type="password"
      placeholder="Password"
      v-model.trim="v$.form.password.$model"
      :state="getValidation('password')"
    />
    <!-- :class="{ error: v$.form.password.$error }"  -->
    <input
      type="password"
      placeholder="Confirm password"
      v-model.trim="v$.form.confirmPassword.$model"
      :state="getValidation('confirmPassword')"
    />
    <button type="button" @click="register">Register</button>
    <button type="button" @click="goToLogin">VOLTAR</button>
    <small><a href="#">Forgot password</a></small>
  </form>
</template>

<script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, minLength, email, sameAs } from '@vuelidate/validators'

  export default {
    setup () {
      return { v$: useVuelidate() }
    },
    
    data() {
      return {
        form: {
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        }
      }
    },

    validations() {
      return {
        form: {
          name: {
            required,
            minLength: minLength(3)
          },
          email: {
            required,
            email
          },
          password: {
            required,
            minLength: minLength(6)
          },
          confirmPassword: {
            required,
            sameAsPassword: sameAs('password')
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
        
      },

      goToLogin() {
        this.$router.push({name: 'login'})
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

