<template>
  <div class="weui-cell weui-cell_switch">
    <div class="weui-cell__bd">{{title}}</div>
    <div class="weui-cell__ft">
        <switch @change="onChange" :checked="value" :disabled="disabled" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mp-switch',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  methods: {
    onChange(e) {
      this.$emit('input', Boolean(e.target.value));
    },
  },
};
</script>
