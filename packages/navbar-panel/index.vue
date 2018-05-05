<template>
  <div
    v-if="activeIndex === index"
    class="weui-tab__content"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MpNavbarPanel',
  props: {
    activeIndex: Number,
    index: Number,
  },
};
</script>
