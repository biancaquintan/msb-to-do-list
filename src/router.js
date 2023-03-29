import { createRouter, createWebHistory } from 'vue-router'
import Home from "./views/HomePage.vue"
import Login from "./views/LoginPage.vue"
import Register from "./views/UserRegister.vue"

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({ history: createWebHistory(), routes });

export default router;
