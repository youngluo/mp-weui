<template>
  <picker
    @change="onPickerChange"
    :range-key="rangeKey"
    :disabled="disabled"
    :value="value"
    :range="range"
  >
      <slot />
  </picker>
</template>

<script>
export default {
  name: 'mpPicker',
  props: {
    rangeKey: String,
    range: {
      required: true,
      type: Array,
    },
    value: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onPickerChange(e) {
      this.$emit('input', Number(e.target.value));
    },
  },
};
</script>
