<template>
  <a
    :class="['weui-cell', {'weui-cell_access': !!href}]"
    :hover-class="!!href ? 'weui-cell_active' : 'none'"
    @click="onClick"
    :href="href"
  >
    <div class="weui-cell_hd">
      <!-- <slot name="icon"> -->
        <img
          class="weui-cell__icon"
          :src="iconSrc"
          v-if="iconSrc"
        />
      <!-- </slot> -->
    </div>
    <div class="weui-cell__bd">
      <!-- <slot> -->
        <span v-text="content" />
      <!-- </slot> -->
    </div>
    <div :class="['weui-cell__ft', {'weui-cell__ft_in-access': !!href}]">
      <!-- <slot name="label"> -->
        <span v-text="label"/>
      <!-- </slot> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'mpCell',
  props: {
    content: String,
    iconSrc: String,
    label: String,
    href: String,
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="less">
.weui-cell__icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
}
</style>

