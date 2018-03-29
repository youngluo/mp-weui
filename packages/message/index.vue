<template>
  <div class="weui-msg">
    <div class="weui-msg__icon-area">
      <!-- <slot name="icon"> -->
      <icon
        :type="type === 'error' ? 'warn' : type"
        size="93"
      />
      <!-- </slot> -->
    </div>
    <div class="weui-msg__text-area">
      <div
        class="weui-msg__title"
        v-text="title"
      />
      <div class="weui-msg__desc">
        <!-- <slot> -->
        <span v-text="content" />
        <!-- </slot> -->
      </div>
    </div>
    <div class="weui-msg__opr-area">
      <div class="weui-btn-area">
        <button
          v-text="confirmText"
          class="weui-btn"
          type="primary"
        />
        <button
          v-text="cancelText"
          v-if="showCancel"
          class="weui-btn"
          type="default"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpMessage',
  props: {
    type: {
      type: String,
      default: 'success', // 'success', 'error'
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    showCancel: Boolean,
    content: String,
    title: String,
  },
};
</script>

