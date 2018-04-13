# Checklist

> 复选框列表

## 引入

    import mpChecklist from 'mp-weui/packages/checklist'

    export default {
      components: {
        mpChecklist
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

    <mp-checklist
      :options="options"
      :title="复选列表项"
      v-model="checkboxValue"
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
options | 选择项 | object[] |  |
value | 绑定值 | array |  |
title | 标题，显示在列表上方 | string  |  |
max | 最多可选个数，超过后其他未选择的选项变成禁用状态 | number  |  |
