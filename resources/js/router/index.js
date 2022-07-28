import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Page = () => import('../views/Page.vue');
const Admin = () => import('../views/Admin/index.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/admin', name: 'Admin', component: Admin }, // change route in production
    { path: '/page/:id', name: 'Page', component: Page },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
