<template>
  <div
    v-if="activeIndex === index"
    class="weui-tab__content"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mpNavbarPanel',
  props: {
    activeIndex: Number,
    index: Number,
  },
};
</script>

