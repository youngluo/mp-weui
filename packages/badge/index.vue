<template>
  <div
    :class="['weui-badge', {'weui-badge_dot': !text}, wrapperClass]"
    :style="{backgroundColor: color}"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'mpBadge',
  props: {
    color: {
      type: String,
      default: '#e64340',
    },
    wrapperClass: String,
    text: String,
  },
};
</script>
