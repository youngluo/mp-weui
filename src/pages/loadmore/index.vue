<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Loadmore</div>
      <div class="page__desc">加载更多</div>
    </div>
    <div class="page__bd">
      <mp-loadmore type="loading" />

      <mp-loadmore />

      <mp-loadmore type="lineDot" />
    </div>
  </div>
</template>

<script>
import mpLoadmore from '../../../packages/loadmore';

export default {
  components: {
    mpLoadmore,
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>


