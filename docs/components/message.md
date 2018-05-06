# Message

> 提示页

## 引入

    import mpMessage from 'mp-weui/packages/message'

    export default {
      components: {
        mpMessage
      }
    }

## 示例

    <mp-message
      confirm-text="推荐操作"
      cancel-text="辅助操作"
      content="内容详情"
      title="操作成功"
      show-cancel
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
type | 类型 | string | `success`、`error` | success
content | 显示内容 | string  |  |
title | 显示标题 | string  |  |
confirmText | 确定按钮文字 | string  |  | 确定
cancelText | 取消按钮文字 | string  |  | 取消
showCancel | 是否显示取消按钮 | boolean  |  | false

## Slot

*暂不支持*

名称 | 说明 |
-- | -- |
-- | 自定义显示内容
icon | 自定义图标
