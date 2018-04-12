# 介绍

> mp-weui是基于[mpvue](https://github.com/Meituan-Dianping/mpvue)和[weui-wxss](https://github.com/Tencent/weui-wxss)封装的小程序UI库。

## 安装

    npm install mp-weui -S

## 使用

    import 'mp-weui/lib/style.css'; // 需在App.vue中全局引入css文件

由于mpvue限制`（component暂不支持全局注册、复杂slot）`暂时只能使用下面的方式局部注册组件：

    import mpRadio from 'mp-weui/packages/radio'

    export default {
      components: {
        mpRadio
      }
    }
