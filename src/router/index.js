import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    name: "home",
    component: () => import ("../views/HomeView.vue")
  },
  {
    path: "/leasing",
    name: "leasing",
    component: () => import("../views/Leasing.vue"),
  },
  {
    path: "/terminos",
    name: "terminos",
    component: () => import("../views/Terms.vue")
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
