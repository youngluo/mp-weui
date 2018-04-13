# Cell

> 单元格，可用作列表信息展示。

## 引入

    import mpCell from 'mp-weui/packages/cell'

    export default {
      components: {
        mpCell
      }
    }

!> 必须与 `CellGroup` 配合使用。

## 示例

带说明的列表项

    <mp-cell-group title="带说明的列表项">
      <mp-cell content="标题文字" label="说明文字" />
    </mp-cell-group>

带图标、说明的列表项

    <mp-cell-group title="带图标、说明的列表项">
      <mp-cell :icon-src="icon" content="标题文字" label="说明文字" />
    </mp-cell-group>

带跳转的列表项

    <mp-cell-group title="带跳转的列表项">
      <mp-cell content="标题文字" href="/weui" />
    </mp-cell-group>

## 特别说明

!> 由于mpvue[暂不支持组件嵌套](https://trello.com/c/UKF5tFv9/34-%E6%94%AF%E6%8C%81%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84-slot)，所以上述方式暂不适用，具体使用请参考[示例代码](https://github.com/youngluo/mp-weui/blob/master/src/pages/list/index.vue)。

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
content | 显示内容 | string |  |
iconSrc | 图标链接 | string  |  |
label | 说明文字 | string  |  |
href | 跳转链接 | string  |  |

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
click | 点击事件 | event

## Slot

*暂不支持*

名称 | 说明 |
-- | -- |
-- | 自定义显示内容
icon | 自定义图标
label | 自定义说明内容
