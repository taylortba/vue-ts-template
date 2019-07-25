import Vue from 'vue';
import App from './App.vue';
import AntD from 'ant-design-vue';
import router from '@/router/index';
import store from './store/index';
import 'ant-design-vue/dist/antd.css';
import './assets/scss/app.scss';

require('./mock/mock')
Vue.config.productionTip = false;
Vue.use(AntD)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
