<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Uploader</div>
      <div class="page__desc">上传组件</div>
    </div>
    <div class="page__bd">
      <mp-uploader-base
        :file-list="files"
        title="文件上传"
        @onAdd="add"
        :max="max"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import MpUploaderBase from '../../../packages/uploader-base';

export default {
  data() {
    return {
      files: [],
      max: 3,
    };
  },
  components: {
    MpUploaderBase,
  },
  methods: {
    add() {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        count: this.max,
        success: (res) => {
          this.files = this.files.concat(res.tempFiles);

          if (this.files[0]) {
            Vue.set(this.files[0], 'failure', true);
          }
        },
      });
    },
  },
};
</script>
