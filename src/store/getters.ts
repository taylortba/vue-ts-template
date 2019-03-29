/**
 * Created by TaylorTang on 2019/3/29.
 */

import state from './state';
import { RootState } from './types';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, any> = {
    version: (state: RootState) => state.version,
};

export default getters;
