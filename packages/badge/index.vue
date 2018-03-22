<template>
  <div :class="['weui-badge', {'weui-badge_dot': !text}, wrapperClass]" :style="{backgroundColor: color}">{{text}}</div>
</template>

<script>
export default {
  name: 'mp-badge',
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
