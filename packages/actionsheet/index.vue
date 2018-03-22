<template>
  <div @click="onClick" :class="wrapperClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mpActionsheet',
  props: {
    itemColor: {
      type: String,
      default: '#000',
    },
    wrapperClass: String,
    actions: Array,
    value: Number,
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
