import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import homePage from "../components/homePage.vue";
import loginPage from "../components/loginPage.vue";
import algoritms from "../components/algoritms.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/login",
      name: "login",
      component: loginPage,
    },
    {
      path: "/algoritms",
      name: "algoritms",
      component: algoritms
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
