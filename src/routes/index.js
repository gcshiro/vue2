import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: HomePage }
    ]
})

export default router;
