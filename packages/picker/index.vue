<template>
  <picker
    :mode="multiple ? 'multiSelector' : 'selector'"
    :range-key="rangeKey"
    :disabled="disabled"
    @change="onChange"
    :value="index"
    :range="range"
  >
    <slot />
  </picker>
</template>

<script>
export default {
  name: 'MpPicker',
  props: {
    value: [String, Array],
    rangeKey: String,
    range: {
      required: true,
      type: Array,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: Boolean,
  },
  computed: {
    index() {
      return this.getIndex();
    },
  },
  methods: {
    onChange(e) {
      const value = this.getValue(e.target.value);

      this.$emit('change', value);
      this.$emit('input', value);
    },
    getIndex() {
      if (this.multiple) {
        return this.value.map((value, i) => this.getCurrentIndex(this.range[i], value));
      }

      return this.getCurrentIndex(this.range, this.value);
    },
    getCurrentIndex(range, value) {
      return this.rangeKey ? range.findIndex(item => item.value === value) : range.indexOf(value);
    },
    getValue(selectedIndex) {
      if (this.multiple) {
        return selectedIndex.map((index, i) => this.getCurrentValue(this.range[i][index]));
      }

      return this.getCurrentValue(this.range[selectedIndex]);
    },
    getCurrentValue(value) {
      return this.rangeKey ? value.value : value;
    },
  },
};
</script>
