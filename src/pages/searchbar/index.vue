<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">SearchBar</div>
      <div class="page__desc">搜索栏</div>
    </div>
    <div class="page__bd">
      <mp-search v-model="value" />
      <div
        class="weui-cells searchbar-result"
        v-if="!!value"
      >
        <a
          hover-class="weui-cell_active"
          v-for="item in [1,2,3,4,5]"
          class="weui-cell"
          :key="item"
          href=""
        >
          <div class="weui-cell__bd">
            <div>实时搜索文本</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import mpSearch from '../../../packages/search';

export default {
  data() {
    return {
      value: '',
    };
  },
  components: {
    mpSearch,
  },
};
</script>

<style lang="less">
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}
.searchbar-result:before {
  display: none;
}
.weui-cell {
  padding: 12px 15px 12px 35px;
}
</style>


