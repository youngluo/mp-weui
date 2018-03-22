<template>
  <div :class="['weui-cell', 'weui-cell_input', {'weui-cell_vcode': state === 'vcode', 'weui-cell_warn': state === 'warning'}]">
    <div class="weui-cell__hd">
      <div class="weui-label">{{label}}</div>
    </div>
    <div class="weui-cell__bd">
      <input
        class="weui-input"
        :confirm-type="confirmType"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        :value="value"
        :type="type"
      />
    </div>
    <div class="weui-cell__ft">
      <div v-if="state">
        <div v-if="newState === 'vcode'" class="weui-vcode-btn">{{vcodeText}}</div>
        <icon v-else :type="newState" size="23"></icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpField',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    vcodeText: {
      type: String,
      default: '获取验证码',
    },
    maxlength: {
      type: Number,
      default: -1,
    },
    confirmType: {
      type: String,
      default: 'done',
    },
    placeholder: String,
    state: String,
    label: String,
    value: String,
  },
  data() {
    return {
      statesMap: {
        warning: 'warn',
        error: 'cancel',
      },
    };
  },
  computed: {
    newState() {
      return this.statesMap[this.state] || this.state;
    },
  },
};
</script>

