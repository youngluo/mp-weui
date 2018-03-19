<template>
  <div @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mpActionsheet',
  props: {
    actions: Array,
    value: String,
    itemColor: {
      type: String,
      default: '#000000',
    },
  },
  methods: {
    onClick() {
      wx.showActionSheet({
        itemList: this.actions,
        itemColor: this.itemColor,
        success(res) {
          console.log(res);
          if (!res.cancel) {
            console.log(res.tapIndex);
          }
        },
      });
    },
  },
};
</script>

<style lang="less">
</style>
