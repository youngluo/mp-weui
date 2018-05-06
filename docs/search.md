# Search

> 搜索框

## 引入

    import MpSearch from 'mp-weui/packages/search'

    export default {
      components: {
        MpSearch
      }
    }

## 示例

    <mp-search
      @confirm="onSearchConfirm"
      @change="onSearchChange"
    />

## 特别说明

!>  使用 `v-model` 可能会出现光标闪烁情况，请使用 `change` 事件代替。

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
value | 绑定值 | string |  |
confirmType | 设置键盘右下角按钮的文字 | string  | `send`,`search`,`next`,`go`,`done` | done
placeholder | 输入框为空时占位符 | string  |  | 搜索
cancelText | 取消按钮文本 | string  |  | 取消

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
change | 输入框数据变化时触发事件 | value
confirm | 点击键盘右下角按钮时触发事件 | value
