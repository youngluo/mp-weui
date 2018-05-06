# Slider

> 滑块

## 引入

    import MpSlider from 'mp-weui/packages/slider'

    export default {
      components: {
        MpSlider
      }
    }

## 示例

基础使用

    <mp-slider v-model="value" />

禁用

    <mp-slider
      value="30"
      show-value
      disabled
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value | 绑定值 | number |  |
backgroundColor | 背景条颜色 | string  |  | #e9e9e9
activeColor | 已选择的颜色 | string  |  | #1aad19
blockColor | 滑块的颜色 | string  |  | #fff
max | 最大值 | number  |  | 100
min | 最小值 | number  |  | 0
step | 步长，取值必须大于 0，并且可被(max - min)整除	 | number  |  | 1
size | 滑块的大小，取值范围为 12 - 28 | number  |  | 28
showValue | 是否显示当前 value | boolean  |  | false
disabled | 是否禁用 | boolean  |  | false

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
change | 拖动过程中触发的事件 | event
