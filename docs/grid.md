# Grid

> 九宫格

## 引入

    import mpGrid from 'mp-weui/packages/grid'

    export default {
      components: {
        mpGrid
      }
    }

!> 必须与 `GridGroup` 配合使用。

## 示例

    <mp-grid-group>
      <mp-grid
        icon-src="/static/images/icon_tabbar.png"
        label="Grid"
      />
    </mp-grid-group>

## 特别说明

!> 同[Cell组件](/cell?id=%e7%89%b9%e5%88%ab%e8%af%b4%e6%98%8e)，具体使用请参考[示例代码](https://github.com/youngluo/mp-weui/blob/master/src/pages/grid/index.vue)。

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
- | - | - | - | -
iconSrc | 图标链接 | string  |  |
label | 说明文字 | string  |  |
href | 跳转链接 | string  |  |

## Events

名称 | 说明 | 回调参数
- | - | - |
click | 点击事件 | event

## Slot

*暂不支持*

名称 | 说明 |
-- | -- |
- | 自定义显示内容
label | 自定义说明内容
