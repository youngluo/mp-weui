<template>
  <a
    hover-class="weui-grid_active"
    @click="$emit('click')"
    class="weui-grid"
    :href="href"
  >
    <div class="weui-grid__icon">
      <!-- <slot name="icon"> -->
      <img
        class="weui-grid__icon-img"
        :src="iconSrc"
      />
      <!-- </slot> -->
    </div>
    <div class="weui-grid__label">
      <!-- <slot name="label"> -->
      <span v-text="label" />
      <!-- </slot> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'mpGrid',
  props: {
    iconSrc: String,
    label: String,
    href: String,
  },
};
</script>

<style lang="less">
.weui-grid__icon-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

