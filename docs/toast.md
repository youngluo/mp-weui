# Toast

> 消息提示框

## 引入

    import Toast from 'mp-weui/packages/toast';

## 示例

基础用法， 可指定`duration`

    Toast('提示信息', [duration])

传入一个对象

    Toast(options)

`Toast`提供了`loading`、`success`和`close`3个方法

执行`Toast.loading`返回`close`方法，用于手动关闭`loading`，也可以调用`Toast.close`

    Toast.loading() // 默认显示“数据加载中”

    Toast.loading(message)

`Toast.success`提示成功信息

    Toast.success(message)

## Options

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
title | 提示内容 | string |  |
icon | 图标 | string  | `success`、`loading`、`none` |
image | 自定义图标的本地路径，image 的优先级高于 icon | string  |  |
duration | 提示延迟时间，单位毫秒 | number  |  | 1500
mask | 是否显示透明蒙层，防止触摸穿透 | boolean  |  | false
