import {
    createRouter,
    createWebHashHistory,
    //createWebHistory,
} from 'vue-router';

const Home = () => import('../views/Home.vue');

const routes = [{ path: '/', name: 'Home', component: Home }];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
