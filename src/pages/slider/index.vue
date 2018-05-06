<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Slider</div>
      <div class="page__desc">滑块</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <p>当前值：{{value}}</p>
      <mp-slider v-model="value" />
      <mp-slider
        show-value
        value="50"
      />
      <mp-slider
        value="30"
        show-value
        disabled
      />
    </div>
  </div>
</template>

<script>
import mpSlider from '../../../packages/slider';

export default {
  data() {
    return {
      value: 60,
    };
  },
  components: { mpSlider },
};
</script>

<style lang="less">
slider {
  margin-bottom: 30px;
}
</style>

