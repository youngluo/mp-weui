<template>
  <div class="page">
    <mp-message
      content="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现"
      cancel-text="辅助操作"
      ok-text="推荐操作"
      title="操作成功"
      @onCancel="onCancel"
      @onOk="onOK"
      show-cancel
    />

    <mp-footer
      :links="links"
      :text="text"
      fixed
    />
  </div>
</template>

<script>
import mpMessage from '../../../packages/message';
import mpFooter from '../../../packages/footer/index';

export default {
  data() {
    return {
      text: 'Copyright © 2008-2016 weui.io',
      links: [{ link: '/a', text: '底部链接' }],
    };
  },
  components: {
    mpMessage,
    mpFooter,
  },
  methods: {
    onOK() {
      this.$toast('推荐操作');
    },
    onCancel() {
      this.$toast('辅助操作');
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>


