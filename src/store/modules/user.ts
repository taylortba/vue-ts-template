/**
 * Created by TaylorTang on 2019/3/29.
 */
import {RootState} from '../types';
import {Module} from 'vuex';
import {GetterTree, ActionTree, MutationTree} from 'vuex';

interface User {
    name: string;
}

const state: User = {
    name: '',
};
const getters: GetterTree<User, RootState> = {
    name(state): string {
        return state.name;
    },
};
const actions: ActionTree<User, RootState> = {
};

const mutations: MutationTree<User> = {
    setUser(state, payload: User) {
        state.name = payload.name;
    },
};

export const user: Module<User, RootState> = {
    state,
    getters,
    actions,
    mutations,
};
