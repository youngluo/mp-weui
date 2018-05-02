# Uploader

> 上传组件

## 引入

    import MpUploaderBase from 'mp-weui/packages/uploader-base'

    export default {
      components: {
        MpUploaderBase
      }
    }

## 示例

    <mp-uploader-base
      @onSelect="onSelect"
      :file-list="files"
      title="文件上传"
      :max="max"
    />

获取文件列表

    onSelect() {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: this.max,
        success: (res) => {
          this.files = this.files.concat(res.tempFiles);
        },
      });
    }

fileList示例

    filelist = [
      {
        path: '', // 本地文件路径
        size: 1024, // 本地文件大小，单位：B
        failure: false, // 是否上传失败
        progress: 50, // 上传进度，0 - 100
      }
    ]

## Props

名称 | 说明 | 类型 | 可选值 | 默认值
-- | -- | -- | -- | --
fileList | 上传文件列表 | object[] |  |
title | 显示标题 | string |  |
max | 最多可以选择的图片张数 | number |  |

## Events

名称 | 说明 | 回调参数
-- | -- | -- |
onSelect | 点击添加按钮事件 |
