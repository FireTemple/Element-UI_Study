import VueRouter from "vue-router";
import Vue from 'vue';
const Home = () => import('../view/Home')
import Test from "../view/test/Test";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    }
]

let router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
