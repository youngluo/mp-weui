# Field

> 表单输入

## 引入

    import MpField from 'mp-weui/packages/field'

    export default {
      components: {
        MpField
      }
    }

!> 必须与 `CellGroup` 配合使用。

## 示例

    <mp-cell-group title="表单">
      <mp-field
        placeholder="请输入qq"
        type="number"
        label="qq"
      />
      <mp-field
        placeholder="请输入手机号"
        type="number"
        label="手机号"
        vcode
      />
    </mp-cell-group>

## 特别说明

!> 由于mpvue[暂不支持组件嵌套](https://trello.com/c/UKF5tFv9/34-%E6%94%AF%E6%8C%81%E6%9B%B4%E5%A4%8D%E6%9D%82%E7%9A%84-slot)，所以上述方式暂不适用，具体使用请参考[示例代码](https://github.com/youngluo/mp-weui/blob/master/src/pages/field/index.vue)。

!>  使用 `v-model` 可能会出现光标闪烁情况，请使用 `change` 事件代替。

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
state | 表单域状态 | string | `success`,`warning`,`error` |
type | input 类型 | string  | `text`,`number`,`idcard`,`digit`,`date`,`time` | text
disabled | 是否禁用输入框 | boolean  |  | false
maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | number |  | -1
confirmType | 设置键盘右下角按钮的文字，当 type 为 textarea 时无效 | string  | `send`,`search`,`next`,`go`,`done` | done
cursorSpacing | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。 | number  |  | 0，当 type 为 textarea 时，默认为 20
fields | 日期选择器粒度，当 type 为 date 时有效 | string  | `year`,`month`,`day` | day
placeholder | 输入框为空时占位符 | string  |  |
autoHeight | 是否自动增高，设置 autoHeight 时，style.height 不生效。当 type 为 textarea 时生效 | boolean  |  |
vcode | 是否显示验证码 | boolean  |  | false
vcodeText | 验证码显示文本 | string  |  | 获取验证码
vcodeSrc | 验证码图片地址 | string  |  |
label | 说明文字 | string  |  |

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
change | 输入框数据变化时触发事件 | value
focus | 输入框聚焦时触发事件 | event
blur | 输入框失去焦点时触发事件 | event

## Slot

*暂不支持*
