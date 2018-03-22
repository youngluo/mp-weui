<template>
  <a
    :class="['weui-cell', {'weui-cell_access': !!url}]"
    :hover-class="!!url ? 'weui-cell_active' : 'none'"
    @click="onClick"
    :href="url"
  >
    <div
      class="weui-cell_hd"
      v-if="icon"
    >
      <img
        class="weui-cell__icon"
        :src="icon"
      />
    </div>
    <div
      class="weui-cell__bd"
      v-text="content"
    />
    <div
      :class="['weui-cell__ft', {'weui-cell__ft_in-access': !!url}]"
      v-text="remark"
    />
  </a>
</template>

<script>
export default {
  name: 'mpCell',
  props: {
    content: String,
    remark: String,
    icon: String,
    url: String,
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

