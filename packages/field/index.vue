<template>
  <div :class="['weui-cell', 'weui-cell_input', {'weui-cell_vcode': state === 'vcode', 'weui-cell_warn': state === 'warning'}]">
    <div class="weui-cell__hd">
      <!-- <slot name="label">
         <div
            class="weui-label"
            v-text="label"
          />
      </slot> -->
      <div
        class="weui-label"
        v-text="label"
        v-if="label"
      />
    </div>
    <div class="weui-cell__bd">
      <!-- <slot name="body">
        <input
          class="weui-input"
          :confirm-type="confirmType"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :disabled="disabled"
          :value="value"
          :type="type"
        />
      </slot> -->
      <textarea
        :placeholder="placeholder"
        v-if="type === 'textarea'"
        class="weui-textarea"
        :disabled="disabled"
        @input="onInput"
      />
      <input
        :confirm-type="confirmType"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        class="weui-input"
        @input="onInput"
        :value="value"
        :type="type"
        v-else
      />
    </div>
    <div class="weui-cell__ft">
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
      <!-- <slot
        name="ft"
        v-else
      /> -->
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
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

