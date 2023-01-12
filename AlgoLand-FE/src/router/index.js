import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import homePage from "../components/homePage.vue";
import loginPage from "../components/loginPage.vue";
import registerPage from "../components/registerPage.vue";
import algoritms from "../components/algoritms.vue";
import editor from "../components/editor.vue";

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
          path: "/register",
          name: "register",
          component: registerPage
      },
      {

          path: "/algorithms",
          name: "algorithms",
          component: algoritms,

      },
      {
          path: "/editor",
          name: "editor",
          component: editor
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
