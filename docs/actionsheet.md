# Actionsheet

> 弹出式菜单

## 引入

    import mpActionsheet from 'mp-weui/packages/actionsheet'

    export default {
      components: {
        mpActionsheet
      }
    }

## 示例

`value` 为 `actions` 的索引值。

    <mp-actionsheet
      :actions="actions"
      v-model="value"
    >
      <button type="default">ActionSheet</button>
    </mp-actionsheet>

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
actions | 菜单项数组，数组长度最大为6个 | string[] |  |
itemColor | 菜单项文字颜色 | string  |  | #000
wrapClassName | 外层容器的类名 | string  |  |

## Slot

名称 | 说明 |
-- | -- |
-- | 自定义显示内容
