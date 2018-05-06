# Navbar

> 顶部选项卡

## 引入

    import mpNavbar from 'mp-weui/packages/navbar'

    export default {
      components: {
        mpNavbar
      }
    }

## 示例

    <mp-navbar
        v-model="activeIndex"
        :columns="columns"
    >
      <mp-navbar-panel :active-index="activeIndex" :index="0">
        选项一的内容
      </mp-navbar-panel>
      <mp-navbar-panel :active-index="activeIndex" :index="1">
        选项二的内容
      </mp-navbar-panel>
      <mp-navbar-panel :active-index="activeIndex" :index="2">
        选项三的内容
      </mp-navbar-panel>
    </mp-navbar>

## 特别说明

!> 同[Cell组件](/cell?id=%e7%89%b9%e5%88%ab%e8%af%b4%e6%98%8e)，具体使用请参考[示例代码](https://github.com/youngluo/mp-weui/blob/master/src/pages/navbar/index.vue)。


## Props

Navbar

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
columns | 选项卡标题 | array |  | []
sliderWidth | 滑块宽度 | number  |  | 96

NavbarPanel

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
activeIndex | 当前选中项索引 | number |  | 0
index | 选项卡内容面板索引 | number  |  |

## Slot

Navbar

名称 | 说明 |
-- | -- |
-- | 显示内容

NavbarPanel

名称 | 说明 |
-- | -- |
-- | 显示内容
