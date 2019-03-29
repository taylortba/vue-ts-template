// 由于typescript不支持vue文件，告诉ts,把vue后缀文件交给vue模块处理
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
