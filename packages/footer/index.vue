<template>
  <div :class="['weui-footer', {'weui-footer_fixed-bottom': fixed}]">
    <div
      class="weui-footer__links"
      v-if="links.length > 0"
    >
      <a
        class="weui-footer__link"
        v-for="item in links"
        v-text="item.text"
        :href="item.link"
        :key="item.text"
      />
    </div>
    <p
      class="weui-footer__text"
      v-text="text"
    />
  </div>
</template>

<script>
export default {
  name: 'MpFooter',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    fixed: Boolean,
    text: String,
  },
};
</script>
