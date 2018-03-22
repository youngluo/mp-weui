<template>
  <picker
    :range-key="rangeKey"
    :disabled="disabled"
    @change="onChange"
    :range="range"
    :value="value"
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
    onChange(e) {
      this.$emit('input', Number(e.target.value));
    },
  },
};
</script>
