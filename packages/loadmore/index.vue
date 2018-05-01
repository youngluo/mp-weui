<template>
  <div :class="['weui-loadmore', {'weui-loadmore_line': isShowLine}]">
    <div
      class="weui-loading"
      v-if="isLoading"
    />
    <div :class="[
        {'weui-loadmore__tips_in-dot': type === 'lineDot'},
        {'weui-loadmore__tips_in-line': isShowLine},
        'weui-loadmore__tips',
      ]">
      <span
        v-text="loadingText"
        v-if="isLoading"
      />
      <span
        v-if="type === 'line'"
        v-text="notContent"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpLoadmore',
  props: {
    type: {
      type: String,
      default: 'line', // 'line', 'lineDot', 'loading'
    },
    loadingText: {
      type: String,
      default: '正在加载',
    },
    notContent: {
      type: String,
      default: '暂无数据',
    },
  },
  computed: {
    isShowLine() {
      return this.type === 'line' || this.type === 'lineDot';
    },
    isLoading() {
      return this.type === 'loading';
    },
  },
};
</script>
