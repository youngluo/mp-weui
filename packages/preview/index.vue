<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">{{title}}</div>
        <div class="weui-form-preview__value_in-hd">{{value}}</div>
      </div>
    </div>
    <div class="weui-form-preview__bd">
      <!-- <slot> -->
      <div
        class="weui-form-preview__item"
        v-for="row in rows"
        :key="row.label"
      >
        <div class="weui-form-preview__label">{{row.label}}</div>
        <div class="weui-form-preview__value">{{row.value}}</div>
      </div>
      <!-- </slot> -->
    </div>
    <div class="weui-form-preview__ft">
      <!-- <slot name="footer"> -->
        <div
          class="weui-form-preview__btn weui-form-preview__btn_default"
          hover-class="weui-form-preview__btn_active"
          @click="$emit('onCancel', $event)"
          v-text="cancelText"
          v-if="showCancel"
        />
        <div
          class="weui-form-preview__btn weui-form-preview__btn_primary"
          hover-class="weui-form-preview__btn_active"
          v-text="confirmText || okText"
          @click="onClick"
        />
      <!-- </slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpPreview',
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: String,
    showCancel: Boolean,
    title: String,
    value: String,
  },
  methods: {
    onClick(e) {
      this.$emit('onOk', e);
      this.$emit('onConfirm', e);
    },
  },
};
</script>

