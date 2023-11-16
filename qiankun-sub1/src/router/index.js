import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../views/HomePage.vue'

const routes = [
  { path: '/', component: Home },
]


const router = new VueRouter({
  mode: "history",
  base: window.__POWERED_BY_QIANKUN__ ? '/vueApp/' : '/child/vue-app/',
  routes
})

export default router
