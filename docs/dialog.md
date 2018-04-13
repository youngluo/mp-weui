# Dialog

> 对话框

## 引入

    import Dialog from 'mp-weui/packages/dialog';

## 示例

传入一个对象

    Dialog(options)

`Dialog` 提供了 `alert` 和 `confirm` 两个方法

`Dialog.alert` 使用方式

    Dialog.alert(content)

    Dialog.alert(content, title)

    Dialog.alert(content, options)

    Dialog.alert(content, title, options)

`Dialog.confirm` 使用方式

    Dialog.confirm(content)

    Dialog.confirm(content, title)

    Dialog.confirm(content, options)

    Dialog.confirm(content, title, options)

## Options

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
title | 提示标题 | string |  |
content | 提示内容 | string  |  |
showCancel | 是否显示取消按钮 | boolean  |  | true
cancelText | 取消按钮文字，最多 4 个字符 | string  |  | 取消
cancelColor | 取消按钮文字颜色 | HexColor  |  | #000
confirmText | 确定按钮文字，最多 4 个字符 | string  |  | 确定
confirmColor | 确定按钮文字颜色 | HexColor  |  | #3cc51f
onOk | 点击确定回调 | function(e)  |  |
onCancel | 点击取消回调 | function(e)  |  |
