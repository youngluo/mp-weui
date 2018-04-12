# Footer

> 页脚

## 引入

    import mpFooter from 'mp-weui/packages/footer'

    export default {
      components: {
        mpFooter
      }
    }

## 示例

    <mp-footer text="copyright © mp-weui" />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
- | - | - | - | -
text | 显示文本 | string |  |
fixed | 是否固定在页面底部 | boolean  |  | false
links | 显示底部链接，`object`格式为`{link: string, text: string}` | object[]  |  | []
