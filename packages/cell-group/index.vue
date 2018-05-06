<template>
  <div>
    <div
      class="weui-cells__title"
      v-text="title"
      v-if="title"
    />
    <div :class="['weui-cells', {'weui-cells_after-title': title}]">
      <slot />
    </div>
    <div
      class="weui-cells__tips"
      v-text="tips"
    />
  </div>
</template>

<script>
export default {
  name: 'MpCellGroup',
  props: {
    title: String,
    tips: String,
  },
};
</script>
