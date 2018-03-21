<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
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
