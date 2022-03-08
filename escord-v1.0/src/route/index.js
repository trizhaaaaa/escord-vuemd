import VueRouter from 'vue-router';
import routes from './router/route';

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;