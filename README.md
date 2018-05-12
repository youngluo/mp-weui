 # mp-weui

[![npm](https://img.shields.io/npm/v/mp-weui.svg)](https://www.npmjs.com/package/mp-weui)
[![npm](https://img.shields.io/npm/dm/mp-weui.svg)](https://www.npmjs.com/package/mp-weui)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/youngluo/mp-weui/blob/master/LICENSE)

> mp-weui 是基于 [mpvue](https://github.com/Meituan-Dianping/mpvue) 和 [weui-wxss](https://github.com/Tencent/weui-wxss) 的微信小程序 UI 库。

## 安装

``` bash
npm i -S mp-weui
```

## 使用

``` bash
# 在 App.vue 中全局引入 css 文件
import 'mp-weui/lib/style.css'

# 由于 mpvue component 暂不支持全局注册，暂时只能使用局部注册
import MpRadio from 'mp-weui/packages/radio'

export default {
  components: {
    MpRadio
  }
}
```

## 文档

[文档地址](https://youngluo.github.io/mp-weui)

<!-- ## 示例

<img
  style="display:block;width:100%;max-width:430px;margin:0 auto 60px;"
  src="https://github.com/youngluo/mp-weui/blob/master/docs/.vuepress/public/code.jpg"
  alt="小程序码"
/> -->

## 开发进度

### 表单
- [x] Button（小程序原生组件）
- [x] Checklist
- [x] Field（待优化）
- [x] Radio
- [x] Slider
- [x] Switch
- [x] Uploader

### 基础组件
- [x] Badge
- [x] Footer
- [x] Gallery（小程序原生组件）
- [x] Grid（待优化）
- [x] Icons（小程序原生组件）
- [x] List（待优化）
- [x] Loadmore
- [x] Panel
- [x] Preview
- [x] Progress

### 操作反馈
- [x] Actionsheet
- [x] Dialog
- [x] Msg
- [x] Picker
- [x] Toast

### 导航相关
- [x] Navbar
- [x] Tabbar（建议采用小程序原生的tabbar，通过设置app.json来实现）

### 搜索相关
- [x] Searchbar（待优化）
