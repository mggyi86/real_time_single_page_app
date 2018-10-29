import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import SignUp from '../components/login/signup'
import Forum from '../components/forum/forum'
import Logout from '../components/login/logout'
import Read from '../components/forum/read'

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: Read, name: 'read' }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang: false,
  mode: 'history'
});

export default router;
