# Preview

> 表单预览

## 引入

    import mpPreview from 'mp-weui/packages/preview'

    export default {
      components: {
        mpPreview
      }
    }

## 示例

定义数据项

    this.rows = [
      {
        label: '商品',
        value: '电动打蛋机',
      },
      {
        label: '标题标题',
        value: '名字名字名字',
      }
    ]

使用

    <mp-preview
      confirm-text="操作"
      value="￥2400.00"
      title="付款金额"
      :rows="rows"
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
rows | 预览数据项 | object[] |  |
title | 显示标题 | string  |  |
value | 显示数据 | string  |  |
confirmText | 确定按钮文字 | string |  | 确定
cancelText | 取消按钮文字 | string  |  | 取消
showCancel | 是否显示取消按钮 | boolean  |  | false

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
onCancel | 点击取消按钮事件 | event
onConfirm | 点击确定按钮事件 | event
