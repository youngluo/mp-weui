 # mp-weui

> mp-weui是基于[mpvue](https://github.com/Meituan-Dianping/mpvue)和[weui-wxss](https://github.com/Tencent/weui-wxss)封装的小程序UI库。

## 安装

    npm install mp-weui -S

## 使用

    import 'mp-weui/lib/style.css'; // 需在App.vue中全局引入css文件

由于mpvue限制（component暂不支持全局注册、间接import、复杂slot）暂时只能使用下面的方式局部注册组件：

    import Radio from 'mp-weui/packages/radio'

## 文档

即将上线...

## 开发进度

### 表单
- [x] Button（小程序原生组件）
- [x] List（待优化）
- [x] Input
  - [x] Checklist
  - [x] Radio
  - [x] Switch
  - [x] Field（待优化）
- [x] Slider
- [ ] Uploader

### 基础组件
- [ ] Article
- [x] Badge
- [ ] Flex
- [x] Footer
- [ ] Gallery
- [x] Grid（待优化）
- [x] Icons（小程序原生组件）
- [x] Loadmore
- [ ] Panel
- [ ] Preview
- [x] Progress

### 操作反馈
- [x] Actionsheet
- [x] Dialog
- [x] Msg
- [x] Picker
- [x] Toast

### 导航相关
- [x] Navbar
- [x] Tabbar

### 搜索相关
- [x] Searchbar（待优化）
