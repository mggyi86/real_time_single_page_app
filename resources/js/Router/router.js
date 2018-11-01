import Vue from 'vue'
import VueRouter from 'vue-router'
import Read from '../components/forum/read'
import Login from '../components/login/Login'
import Forum from '../components/forum/forum'
import SignUp from '../components/login/signup'
import Logout from '../components/login/logout'
import Create from '../components/forum/create'
import CreateCategory from '../components/category/CreateCategory'

Vue.use(VueRouter);

const routes = [
    { path: '/ask', component: Create },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/category', component: CreateCategory },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/question/:slug', component: Read, name: 'read' }
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  hashbang: false,
  mode: 'history'
});

export default router;
