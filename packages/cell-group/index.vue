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
  </div>
</template>

<script>
export default {
  name: 'mpCellGroup',
  props: {
    title: String,
  },
};
</script>
