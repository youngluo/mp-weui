<template>
  <picker @change="onPickerChange" :value="value" :range="data">
      <view class="picker">{{data[value]}}</view>
  </picker>
</template>

<script>
export default {
  name: 'mpPicker',
  componentName: 'mpPicker',
  props: {
    data: {
      required: true,
      type: Array,
      default: [],
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onPickerChange(e) {
      this.$emit('input', Number(e.target.value));
    },
  },
};
</script>

<style scoped>
.picker {
  height: 28px;
}
</style>
