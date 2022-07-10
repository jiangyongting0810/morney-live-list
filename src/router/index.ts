import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/labels.vue';
import Statistics from '@/views/statistics.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/Money',
    },
    {
        path: '/money',
        component: Money,
    },
    {
        path: '/labels',
        component: Labels,
    },
    {
        path: '/statistics',
        component: Statistics,
    },
];

const router = new VueRouter({
    routes
});

export default router;
