<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div class="weui-cells">
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

<style lang="less">

</style>
