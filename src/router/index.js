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
  },
  {
    path: "/flota",
    name: "flota",
    component: () => import("../views/Flota.vue")
  },
  // {
  //   path: "/available",
  //   component: () => import("../views/AvailabilityView.vue")
  // },
  {
    path:"/connections",
    component: () => import('../components/Connection.vue')
  },
  {
    path: "/reservations/cotizar",
    name: "cotizar",
    component: () => import("../components/reservations/Reservation.vue")
  },
  {
    path: '/reservations/additional',
    name: "additional",
    component: () => import("../components/reservations/Additional.vue")
  },
  {
    path: '/reservations/registration',
    name: "registration",
    component: () => import("../components/reservations/Registration.vue")

  }


  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
