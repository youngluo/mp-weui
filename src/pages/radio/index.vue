<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Radio</div>
      <div class="page__desc">单选框列表</div>
    </div>
    <div class="page__bd">
      <mp-radio
        :title="'value: ' + radioValue"
        :options="radioOptions"
        v-model="radioValue"
      />
    </div>
  </div>
</template>

<script>
import MpRadio from '../../../packages/radio';

export default {
  data() {
    return {
      radioOptions: [
        { label: 'cell standard', value: 'a', disabled: true },
        { label: 'cell standard', value: 'b' },
        { label: 'cell standard', value: 'c' },
      ],
      radioValue: 'b',
    };
  },
  components: {
    MpRadio,
  },
};
</script>
