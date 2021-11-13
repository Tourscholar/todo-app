import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      if (isLogin === "false") {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  if (isLogin === "true" || to.name === "Login") {
    next();
  } else  {
    next({ name: "Login" });
  }
});
export default router;
