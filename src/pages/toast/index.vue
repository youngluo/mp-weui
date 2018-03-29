<template>
  <view class="page">
    <view class="page__hd">
      <view class="page__title">Toast</view>
      <view class="page__desc">弹出式提示，采用小程序原生的toast</view>
    </view>
    <view class="page__bd">
      <view class="weui-btn-area">
        <button
          @click="openToast"
          class="weui-btn"
          type="default"
        >
          消息提示
        </button>
        <button
          @click="openSuccessToast"
          class="weui-btn"
          type="default"
        >
          成功提示
        </button>
        <button
          @click="openLoading"
          class="weui-btn"
          type="default"
        >
          加载中提示
        </button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    openToast() {
      this.$toast('消息提示');
    },
    openSuccessToast() {
      this.$toast.success('已完成');
    },
    openLoading() {
      const close = this.$toast.loading();

      setTimeout(() => {
        close();
      }, 3000);
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>


