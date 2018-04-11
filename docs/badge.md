# Badge

> 徽章

## 引入

    import mpBadge from 'mp-weui/packages/badge'

    export default {
      components: {
        mpBadge,
      }
    }

## 示例

指定颜色

    <mp-badge color="#888" />

指定文本

    <mp-badge text="20" />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
--- | ---- | ---- | ----- | ------
color | 自定义颜色 | String |  | #e64340
text | 自定义文本 | String  |  |
wrapClassName | 外层容器的类名 | String  |  |
