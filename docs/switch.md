# Switch

> 开关

## 引入

    import MpSwitch from 'mp-weui/packages/switch'

    export default {
      components: {
        MpSwitch
      }
    }

## 示例

使用

    <mp-switch
      :title="'标题文字'
      v-model="value"
    />

禁用

    <mp-switch
      :title="'标题文字'
      v-model="value"
      disabled
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value | 绑定值 | boolean |  |
disabled | 是否禁用 | boolean  |  | false
isInCell | 是否在列表单元格中显示 | boolean  |  | true
title | 标题，如果在列表单元格中，则显示在最左边 | string  |  |
