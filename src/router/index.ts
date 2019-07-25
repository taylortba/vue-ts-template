/**
 * Created by TaylorTang on 2019/3/29.
 */
import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Layout from '@/views/Layout.vue';
// import FlowSettings from '@/views/flowManage/flowSettings.vue';
// import TaskList from '@/views/taskManage/taskList.vue';

Vue.use(Router);
console.log('router')

export const constRouter: any = [{
    path: '/',
    name: 'Layout',
    component: Layout,
}, {
    path: '/flow',
    name: 'Flow',
    meta: {title: '流程管理', icon: 'pie-chart'},
    component: Layout,
    children: [{
        path: 'flowSettings',
        name: 'FlowSettings',
        meta: {title: '流程配置'},
        component: () => import(/* webpackChunkName: "about" */ '../views/flowManage/flowSettings.vue'),
    }],
}, {
    path: '/task',
    name: 'Task',
    meta: {title: '任务管理', icon: 'file'},
    component: Layout,
    children: [{
        path: 'taskList',
        name: 'TaskList',
        meta: {title: '任务配置'},
        component: () => import(/* webpackChunkName: "about" */ '../views/taskManage/taskList.vue'),
    }],
}];

export const asyncRouterMap: any = [
    { path: '*', redirect: '/error', hidden: true },
];

export default new Router({
    routes: constRouter,
});
