# Loadmore

> 加载更多

## 引入

    import mpLoadmore from 'mp-weui/packages/loadmore'

    export default {
      components: {
        mpLoadmore
      }
    }

## 示例

显示loading

    <mp-loadmore type="loading" />

当数据为空时显示文本

    <mp-badge not-content="暂无数据" />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
- | - | - | - | -
type | 类型 | string | `line`、`lineDot`、`loading` | line
loadingText | `type` 为loading时，可自定义显示文本 | string  |  | 正在加载
notContent | `type` 为line时，当数据为空时显示的内容 | string  |  | 暂无数据
