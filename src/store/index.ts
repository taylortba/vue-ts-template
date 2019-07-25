/**
 * Created by TaylorTang on 2019/3/29.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import {user} from './modules/user';
import {status} from '@/store/modules/status';
import {routerPermission} from '@/store/modules/routerPermission';

Vue.use(Vuex);
console.log('store')
const store = new Vuex.Store({
    modules: {
        user,
        status,
        routerPermission,
    },
    getters,
});

export default store;
