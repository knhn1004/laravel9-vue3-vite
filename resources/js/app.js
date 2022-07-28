import './bootstrap';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import layui from '@layui/layui-vue';
import '@layui/layui-vue/lib/index.css';

createApp(App).use(router).use(layui).mount('#app');
