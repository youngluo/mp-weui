# Panel

> 面板

## 引入

    import mpPanel from 'mp-weui/packages/panel'

    export default {
      components: {
        mpPanel
      }
    }

## 示例

定义数据项，图文组合列表

    this.dataSource = [
      {
        title: '标题一',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        icon: base64.icon60,
      },
      {
        title: '标题一',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        icon: base64.icon60,
        url: '/abc',
      },
    ]

定义数据项，文字组合列表

    this.dataSource = [
      {
        title: '标题一',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        meta: [
          '文字来源',
          '时间',
          { value: '其它信息', divider: true },
        ],
      },
      {
        title: '标题一',
        content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        meta: [
          '文字来源',
          '时间',
          { value: '其它信息', divider: true },
        ],
      },
    ]

使用

    <mp-panel
      :data-source="dataSource"
      title="图文组合列表"
    />

    <mp-panel
      :data-source="dataSource"
      title="文字组合列表"
      type="text"
    />

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
dataSource | 数据项 | object[] |  |
title | 显示标题 | string  |  |
type | 显示类型 | string  | `appmsg`、`text` | `appmsg`
