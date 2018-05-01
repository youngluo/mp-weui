<template>
  <div
    :class="['weui-badge', {'weui-badge_dot': !text}, wrapClassName]"
    :style="{backgroundColor: color}"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'MpBadge',
  props: {
    color: {
      type: String,
      default: '#e64340',
    },
    wrapClassName: String,
    text: String,
  },
};
</script>
