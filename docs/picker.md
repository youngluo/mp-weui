# Picker

> 选择器

## 引入

    import mpPicker from 'mp-weui/packages/picker'

    export default {
      components: {
        mpPicker
      }
    }

## 示例

具体使用请参考[示例代码](https://github.com/youngluo/mp-weui/blob/master/src/pages/picker/index.vue)

单列选择器

    <mp-picker
        v-model="value"
        :range="array"
      >
      <button type="default">单列选择器</button>
    </mp-picker>

多列选择器

    <mp-picker
      v-model="mValue"
      :range="mArray"
      multiple
    >
      <button type="default">多列选择器</button>
    </mp-picker>

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
range | 列表数据，当为`object[]`时，`object`必须指定`value`键 | [] / object[] |  | []
rangeKey | 当`range`是一个`object[]`时，通过`rangeKey`来指定`object`中`key`的值作为选择器显示内容 | string |  |
disabled | 是否禁用 | boolean |  | false
multiple | 是否多列选择，当为`true`时，`range`为二维[]或者二维object[] | boolean  |  | false

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
change | change事件 | value

## Slot

名称 | 说明 |
-- | -- |
-- | 自定义内容

