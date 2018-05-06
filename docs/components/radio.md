# Radio

> 单选框列表

## 引入

    import mpRadio from 'mp-weui/packages/radio'

    export default {
      components: {
        mpRadio
      }
    }

## 示例

定义选择项

    this.options = [
      {
        label: '被禁用',
        value: 'A',
        disabled: true
      },
      {
        label: '选项B',
        value: 'B'
      },
      {
        label: '选项C',
        value: 'C'
      }
    ]

使用

    <mp-radio
      :options="options"
      :title="单选列表项"
      v-model="radioValue"
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
options | 选择项 | object[] |  |
value | 绑定值 | string |  |
title | 标题，显示在列表上方 | string  |  |
