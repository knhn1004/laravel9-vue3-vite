import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Page = () => import('../views/Page.vue');

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/page/:id', name: 'Page', component: Page },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
