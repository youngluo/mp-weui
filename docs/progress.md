# Progress

> 进度条

## 引入

    import mpProgress from 'mp-weui/packages/progress'

    export default {
      components: {
        mpProgress
      }
    }

## 示例

显示进度

    <mp-progress :percent="50" />

显示取消按钮

    <mp-progress
      :percent="80"
      show-cancel
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
- | - | - | - | -
percent | 进度百分比0 - 100 | number |  |
backgroundColor | 进度条背景颜色 | string |  | #ebebeb
color | 进度条颜色  | string |  | #09bb07
animate | 是否开启动画  | boolean |  | false
animateMode | 动画播放模式，backwards: 动画从头播；forwards：动画从上次结束点接着播 | string  | `backwards`、 `forwards` | forwards
width | 进度条线的宽度，单位px  | number |  | 3
showCancel | 是否显示取消按钮  | boolean |  | false
cancelSize | 取消按钮尺寸  | number |  | 22
showInfo | 是否在进度条右侧显示百分比  | boolean |  | false

## Events

名称 | 说明 | 回调参数
- | - | - |
onCancel | 点击取消按钮事件 | event
