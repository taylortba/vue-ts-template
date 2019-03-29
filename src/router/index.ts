/**
 * Created by TaylorTang on 2019/3/29.
 */
import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: App,
    }],
});
