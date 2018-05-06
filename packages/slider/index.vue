<template>
  <slider
    :active-color="disabled ? '#d3d3d3' : activeColor"
    :block-color="disabled ? '#d3d3d3' : blockColor"
    :background-color="backgroundColor"
    :show-value="showValue"
    :disabled="disabled"
    @changing="onChange"
    @change="onChange"
    :block-size="size"
    :value="value"
    :step="step"
    :max="max"
    :min="min"
  />
</template>

<script>
export default {
  name: 'MpSlider',
  props: {
    backgroundColor: {
      type: String,
      default: '#e9e9e9',
    },
    activeColor: {
      type: String,
      default: '#1aad19',
    },
    blockColor: {
      type: String,
      default: '#fff',
    },
    step: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 28,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    showValue: Boolean,
    disabled: Boolean,
    value: Number,
  },
  methods: {
    onChange(e) {
      this.$emit('input', Number(e.target.value));
      this.$emit('change', e);
    },
  },
};
</script>
