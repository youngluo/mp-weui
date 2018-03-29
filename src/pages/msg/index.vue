<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Msg</div>
      <div class="page__desc">提示页</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button
          @click="openSuccess"
          class="weui-btn"
          type="default"
        >
          成功提示页
        </button>
        <button
          @click="openFail"
          class="weui-btn"
          type="default"
        >
          失败提示页
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSuccess() {
      wx.navigateTo({
        url: '/pages/msg_success/msg_success',
      });
    },
    openFail() {
      wx.navigateTo({
        url: '/pages/msg_fail/msg_fail',
      });
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>



