<template>
  <div
    :class="wrapClassName"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MpActionsheet',
  props: {
    itemColor: {
      type: String,
      default: '#000',
    },
    wrapClassName: String,
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
