/**
 * Created by TaylorTang on 2019/7/2.
 */
import Vue from 'vue';
import request from './request';
import {notification} from 'ant-design-vue';
import { getCurrentTime } from '@/utils';
import store from '@/store/index';

export async function sendAjax(data: any, options?: any) {
    // let loadingInstance = null;
    const asyncOptions = Object.assign(
        {},
        {
            maskFlag: true,
        },
        options,
    );
    // store.dispatch('changeStatus', { btnLoading: true });
    if (asyncOptions.maskFlag && !asyncOptions.maskHide) {
        store.dispatch('showMask');
        // loadingInstance = Loading.service({fullscreen: true});
    }

    // const AccessChannel = storeProxy.$store.state.user.AccessChannel.toUpperCase();
    const response = await request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        params: data.params,
        data: Object.assign({}, data.data ),
    }).then((res) => res.data);

    if (asyncOptions.maskFlag ) {
        // loadingInstance.close(); // 关闭loading
        store.dispatch('hideMask');
    }
    // 关闭btnloading
    // store.dispatch('changeStatus', { btnLoading: false });
    // 有回调方法直接回调
    if (asyncOptions.callback) {
        return asyncOptions.callback(response);
    }
    // 没有回调方法走统一错误处理
    if (!response) {
        notification.warn({
            message: '网络繁忙',
            description: '',
        });
    }
    if (response.resultCode !== '000' && response.message) {
        notification.warn({
            message: response.message,
            description: '',
        });
        throw new Error(response.message);
    }

    return response;
}



export  function getInfo() {
    return sendAjax({
        url: '/api/info',
        method: 'post',
    });
}


/**
 * 通话记录接口
 */
export function recordInfo(data: object) {
    return sendAjax({
        url: '/services/record',
        method: 'post',
        data,
    });
}

