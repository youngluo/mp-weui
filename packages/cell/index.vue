<template>
  <a
    :class="['weui-cell', {'weui-cell_access': !!url}]"
    :hover-class="!!url ? 'weui-cell_active' : 'none'"
    :href="url"
    @click="onClick"
  >
    <div class="weui-cell_hd" v-if="icon">
      <img :src="icon" class="weui-cell__icon"/>
    </div>
    <div class="weui-cell__bd">
      {{content}}
    </div>
    <div :class="['weui-cell__ft', {'weui-cell__ft_in-access': !!url}]">
      {{remark}}
    </div>
  </a>
</template>

<script>
export default {
  name: 'mpCell',
  props: {
    icon: String,
    content: String,
    remark: String,
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

