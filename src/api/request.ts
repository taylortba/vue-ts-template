/**
 * Created by TaylorTang on 2019/7/2.
 */
import axios from 'axios';
import store from '@/store/index';
import {notification} from 'ant-design-vue';


const pending: any = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken;
const removePending = (config: any) => {
    for (const p in pending) {
        if (pending[p].u === `${config.url}&${config.method}`) {
            // 当当前请求在数组中存在时执行函数体
            pending[p].f(); // 执行取消操作
            pending.splice(p, 1); // 把这条记录从数组中移除
        }
    }
};
// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 120000, // request timeout
});
// request interceptor
// 对请求进行拦截，如果是微信渠道，进行加密
service.interceptors.request.use(
    (config) => {
        removePending(config); // 在一个ajax发送前执行一下取消操作
        config.cancelToken = new cancelToken((c) => {
            // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
            pending.push({ u: `${config.url}&${config.method}`, f: c });
        });
        return config;
    },
    (error) => {
        store.dispatch('changeStatus', { btnLoading: false });
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    },
);

// respone interceptor
// 对res进行拦截
service.interceptors.response.use(
    (response) => {
        removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        return response;
    },

    (error) => {
        store.dispatch('changeStatus', { btnLoading: false });
        store.dispatch('hideMask');
        notification.warn({
            message: '网络繁忙',
            description: '',
        });

        console.log(`err${error}`); // for debug

        return Promise.reject(error);
    },
);

export default service;
