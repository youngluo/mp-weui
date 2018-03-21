<template>
  <div @click="onClick" :class="wrapperClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mpActionsheet',
  props: {
    actions: Array,
    value: Number,
    wrapperClass: String,
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
        success: (res) => {
          this.$emit('input', Number(res.tapIndex));
        },
      });
    },
  },
};
</script>

<style lang="less">
</style>
