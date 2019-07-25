/**
 * Created by TaylorTang on 2019/7/2.
 */

import {RootState} from '../types';
import {Module} from 'vuex';
import {GetterTree, ActionTree, MutationTree} from 'vuex';

interface Status {
    maskLoadingInstance: boolean;
    btnLoading: boolean;
}

const state: Status = {
    maskLoadingInstance: false,
    btnLoading: false,
};
const getters: GetterTree<Status, RootState> = {
    btnLoading(state): boolean {
        return state.btnLoading;
    },
    maskLoadingInstance(state): boolean {
        return state.maskLoadingInstance;
    },
};
const actions: ActionTree<Status, RootState> = {
    changeStatus({ commit }, params) {
        commit('CHANGE_STATUS', params);
    },
    showMask({ commit }) {
        commit('SHOW_MASK');
    },
    hideMask({ commit }) {
        commit('HIDE_MASK');
    },
};

const mutations: MutationTree<Status> = {
    CHANGE_STATUS(state, params) {
        Object.assign(state, params);
    },
    SHOW_MASK(state) {
        state.maskLoadingInstance = true;
    },
    HIDE_MASK(state) {
        state.maskLoadingInstance = false;
    },
};

export const status: Module<Status, RootState> = {
    state,
    getters,
    actions,
    mutations,
};
