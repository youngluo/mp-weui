<template>
  <div :class="[
    {'weui-cell_vcode': state === 'vcode', 'weui-cell_warn': state === 'warning'},
    {'weui-cell_input': type !== 'textarea'},
    'weui-cell',
  ]">
    <div class="weui-cell__hd">
      <!-- <slot name="label"> -->
      <div
        class="weui-label"
        v-text="label"
        v-if="label"
      />
      <!-- </slot> -->
    </div>
    <div class="weui-cell__bd">
      <!-- <slot> -->
      <div v-if="type === 'textarea'">
        <textarea
          :cursor-spacing="cursorSpacing"
          @focus="$emit('focus', $event)"
          @blur="$emit('blur', $event)"
          :placeholder="placeholder"
          :auto-height="autoHeight"
          :maxlength="maxlength"
          class="weui-textarea"
          :disabled="disabled"
          @input="onInput"
        />
        <div
          v-text="value.length + '/' + maxlength"
          class="weui-textarea-counter"
          v-if="maxlength > 0"
        />
      </div>
      <input
        :cursor-spacing="cursorSpacing"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        :confirm-type="confirmType"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        class="weui-input"
        @input="onInput"
        :type="type"
        v-else
      />
      <!-- </slot> -->
    </div>
    <div class="weui-cell__ft">
      <!-- <slot name="ft"> -->
      <div v-if="state">
        <div
          v-if="newState === 'vcode'"
          class="weui-vcode-btn"
          v-text="vcodeText"
        />
        <icon
          :type="newState"
          size="23"
          v-else
        />
      </div>
      <!-- </slot> -->
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
    cursorSpacing: {
      type: Number,
      default: 20,
    },
    placeholder: String,
    autoHeight: Boolean,
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
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="less">
textarea {
  height: 75px;
}
</style>


