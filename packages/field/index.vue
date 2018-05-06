<template>
  <div :class="[
    {'weui-cell_vcode': vcode, 'weui-cell_warn': state === 'warning' || state === 'error'},
    {'weui-cell_input': type !== 'textarea'},
    'weui-cell'
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
          @input="onChange"
          :value="value"
        />
        <div
          v-text="value.length + '/' + maxlength"
          class="weui-textarea-counter"
          v-if="value && maxlength > 0"
        />
      </div>
      <picker
        v-else-if="type === 'date' || type === 'time'"
        @change="onChange"
        :fields="fields"
        :value="value"
        :mode="type"
      >
        <div
          v-text="value || placeholder"
          class="weui-input"
        />
      </picker>
      <input
        :cursor-spacing="cursorSpacing"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        :confirm-type="confirmType"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        class="weui-input"
        @input="onChange"
        :value="value"
        :type="type"
        v-else
      />
      <!-- </slot> -->
    </div>
    <div class="weui-cell__ft">
      <!-- <slot name="ft"> -->
      <div
        v-if="vcode && !vcodeSrc"
        style="min-width:110px"
        class="weui-vcode-btn"
        v-text="vcodeText"
      />
      <img
        v-if="vcode && vcodeSrc"
        class="weui-vcode-img"
        style="width:110px"
        :src="vcodeSrc"
      />
      <icon
        v-if="!vcode && state"
        :type="newState"
        size="23"
      />
      <!-- </slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpField',
  props: {
    state: {
      type: String,
      validator(value) {
        return ['success', 'warning', 'error'].indexOf(value) !== -1;
      },
    },
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
      default() {
        return this.type === 'textarea' ? 20 : 0;
      },
    },
    fields: {
      type: String,
      default: 'day',
    },
    placeholder: String,
    autoHeight: Boolean,
    vcodeSrc: String,
    vcode: Boolean,
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
    onChange(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value);
    },
  },
};
</script>

<style>
.weui-textarea {
  height: 75px;
}
.weui-vcode-btn {
  box-sizing: border-box;
  padding: 0;
  text-align: center;
}
</style>
