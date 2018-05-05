<template>
  <a
    :class="['weui-cell', {'weui-cell_access': !!href, 'weui-cell_link': isLink}]"
    :hover-class="(!isLink && !!href) ? 'weui-cell_active' : 'none'"
    @click="$emit('click', $event)"
    :href="href"
  >
    <div class="weui-cell_hd">
      <!-- <slot name="icon"> -->
      <img
        class="weui-cell_icon"
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
      <span v-text="label" />
      <!-- </slot> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'MpCell',
  props: {
    content: String,
    iconSrc: String,
    isLink: Boolean,
    label: String,
    href: String,
  },
};
</script>

<style>
.weui-cell_icon {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>


