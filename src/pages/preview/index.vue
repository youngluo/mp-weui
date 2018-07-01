<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Preview</div>
      <div class="page__desc">表单预览</div>
    </div>
    <div class="page__bd">
      <mp-preview
        ok-text="操作"
        value="￥2400.00"
        title="付款金额"
        :rows="rows"
      />
      <mp-preview
        cancel-text="辅助操作"
        @onCancel="onCancel"
        @onOk="onOK"
        ok-text="操作"
        value="￥2400.00"
        title="付款金额"
        :rows="rows"
        show-cancel
      />
    </div>
  </div>
</template>

<script>
import MpPreview from '../../../packages/preview';

export default {
  components: {
    MpPreview,
  },
  data() {
    return {
      rows: [
        {
          label: '商品',
          value: '电动打蛋机',
        },
        {
          label: '标题标题',
          value: '名字名字名字',
        },
        {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字',
        },
      ],
    };
  },
  methods: {
    onOK() {
      this.$toast('操作');
    },
    onCancel() {
      this.$toast('辅助操作');
    },
  },
};
</script>

<style lang="less">
.weui-form-preview {
  margin-bottom: 25px;
}
</style>

