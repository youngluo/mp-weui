<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Switch</div>
      <div class="page__desc">开关</div>
    </div>
    <div class="page__bd">
      <div style="padding: 0 15px">
        <mp-switch
          v-model="switchChecked3"
          :is-in-cell="false"
        />
        {{switchChecked3}}
      </div>

      <div class="weui-cells__title">开关</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-switch
          :title="'标题文字：' + switchChecked"
          v-model="switchChecked"
        />
        <mp-switch
          :title="'标题文字：' + switchChecked2"
          v-model="switchChecked2"
          disabled
        />
      </div>
    </div>
  </div>
</template>

<script>
import MpSwitch from '../../../packages/switch';

export default {
  data() {
    return {
      switchChecked: true,
      switchChecked2: true,
      switchChecked3: true,
    };
  },
  components: {
    MpSwitch,
  },
};
</script>
