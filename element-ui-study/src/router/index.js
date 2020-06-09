import VueRouter from "vue-router";
import Vue from 'vue';
const Home = () => import('')
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: 'home',
        component: Home
    }
]

let router = new VueRouter({
    routes,
    model: 'history'
});

export default router;
