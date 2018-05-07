<template>
  <a
    @click="$emit('click', $event)"
    hover-class="weui-grid_active"
    class="weui-grid"
    :href="href"
  >
    <!-- <slot> -->
    <img
      class="weui-grid__icon"
      :src="iconSrc"
    />
    <!-- </slot> -->
    <div class="weui-grid__label">
      <!-- <slot name="label"> -->
      <span v-text="label" />
      <!-- </slot> -->
    </div>
  </a>
</template>

<script>
export default {
  name: 'MpGrid',
  props: {
    iconSrc: String,
    label: String,
    href: String,
  },
};
</script>

