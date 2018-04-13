<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">ActionSheet</div>
      <div class="page__desc">弹出式菜单，采用小程序原生的actionsheet</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <mp-actionsheet
          :actions="actions"
          v-model="value"
        >
          <button type="default">ActionSheet：{{value}}</button>
        </mp-actionsheet>
      </div>
    </div>
  </div>
</template>

<script>
import mpActionsheet from '../../../packages/actionsheet';

export default {
  data() {
    return {
      actions: ['A', 'B', 'C'],
      value: '',
    };
  },
  components: { mpActionsheet },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
</style>
