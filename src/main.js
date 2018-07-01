import Vue from 'vue';
import App from './App';
import WeUI from '../packages';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.use(WeUI);

const app = new Vue(App);
app.$mount();

export default {
  config: {
    pages: [
      '^pages/index/main',
      'pages/button/main',
      'pages/list/main',
      'pages/field/main',
      'pages/switch/main',
      'pages/checklist/main',
      'pages/radio/main',
      'pages/slider/main',
      'pages/uploader/main',
      // 'pages/article/main',
      'pages/badge/main',
      // 'pages/flex/main',
      'pages/footer/main',
      'pages/gallery/main',
      'pages/grid/main',
      'pages/icons/main',
      'pages/loadmore/main',
      'pages/panel/main',
      'pages/preview/main',
      'pages/progress/main',
      'pages/actionsheet/main',
      'pages/dialog/main',
      'pages/message/main',
      'pages/msg_success/main',
      'pages/msg_fail/main',
      'pages/picker/main',
      'pages/toast/main',
      'pages/navbar/main',
      'pages/tabbar/main',
      'pages/searchbar/main',
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'WeUI for Mpvue',
      navigationBarBackgroundColor: '#f8f8f8',
      backgroundColor: '#f8f8f8',
    },
    networkTimeout: {
      request: 10000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000,
    },
    debug: true,
  },
};
