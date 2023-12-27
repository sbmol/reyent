// router.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from './views/Home.vue';
import Leasing from './views/Leasing.vue';

const routes = [
  // {
  //   path: '/',
  //   component: Home
  // },
  {
    path: '/leasing',
    name: "Leasing",
    component: Leasing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
