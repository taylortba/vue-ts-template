/**
 * Created by TaylorTang on 2019/7/2.
 */
import {RootState} from '@/store/types';
import {Module} from 'vuex';
import {GetterTree, ActionTree, MutationTree} from 'vuex';
import { asyncRouterMap, constRouter } from '@/router/index';
console.log('permissionModule')
console.log(constRouter);
interface Permission {
    routers: any;
    addRouters: any;
}
const state: Permission = {
    routers: constRouter,
    addRouters: [],
};
const getters: GetterTree<Permission, RootState> = {
    permission_routers(state): any {
        console.log(state.routers);
        return state.routers;
    },
};
const mutations: MutationTree<Permission> = {
    SET_ROUTERS: (state, routers) => {
        state.addRouters = routers;
        state.routers = constRouter.concat(routers);
        console.log('state.routers', state.routers);
    },
};

const actions: ActionTree<Permission, RootState> = {
    GenerateRoutes({ commit }, data) {
        return new Promise((resolve) => {
            const { roles } = data;
            let accessedRouters;

            if (roles.indexOf('ADMIN') >= 0) {
                console.log('admin>=0');
                accessedRouters = asyncRouterMap;
            } else {
                console.log('admin<0');
                accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
                // accessedRouters = ''
                // accessedRouters = asyncRouterMap
            }
            console.log('accessedRouters', accessedRouters);
            commit('SET_ROUTERS', accessedRouters);
            resolve();
        });
    },
};

export const routerPermission: Module<Permission, RootState> = {
    state,
    getters,
    actions,
    mutations,
};
/**
 *
 * @param roles
 * @param route
 */
function hasPermission(roles: any, route: any) {
    if (route.meta && route.meta.roles) {
        return roles.some((role: object) => route.meta.roles.indexOf(role) >= 0);
    } else {
        return true;
    }
}

/**
 *
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap: any, roles: object) {
    const accessedRouters = asyncRouterMap.filter((route: any) => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles);
            }
            return true;
        }
        return false;
    });
    return accessedRouters;
}
