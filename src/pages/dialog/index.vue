<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
      <div class="page__desc">对话框，采用小程序原生的modal</div>
    </div>
    <div class="page__bd">
      <P class="page__desc">{{message}}</P>
      <div class="weui-btn-area">
        <button
          @click="openConfirm"
          class="weui-btn"
          type="default"
        >
          Confirm Dialog
        </button>
        <button
          @click="openAlert"
          class="weui-btn"
          type="default"
        >
          Alert Dialog
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    openConfirm() {
      const self = this;

      this.$dialog.confirm('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内', '弹窗标题', {
        onOk() {
          self.message = 'confirm：用户点击了确定';
        },
        onCancel() {
          self.message = 'confirm：用户点击了取消';
        },
      });
    },
    openAlert() {
      const self = this;

      this.$dialog.alert('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内', {
        onOk() {
          self.message = 'alert：用户点击了确定';
        },
      });
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
.page__bd .page__desc {
  text-align: center;
}
</style>


