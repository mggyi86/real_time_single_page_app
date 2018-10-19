import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import SignUp from '../components/login/signup'

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang: false,
  mode: 'history'
});

export default router;
