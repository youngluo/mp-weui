<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Checklist</div>
      <div class="page__desc">复选框列表</div>
    </div>
    <div class="page__bd">
      <mp-checklist
        :title="'value: ' + JSON.stringify(checkboxValue)"
        :options="checkboxOptions"
        v-model="checkboxValue"
      />
    </div>
  </div>
</template>

<script>
import MpChecklist from '../../../packages/checklist';

export default {
  data() {
    return {
      checkboxOptions: [
        { label: 'standard is dealt for u.', value: 'a', disabled: true },
        { label: 'standard is dealicient for u.', value: 'b' },
        { label: 'standard is dealicient for u.', value: 'c' },
      ],
      checkboxValue: ['a'],
    };
  },
  components: {
    MpChecklist,
  },
};
</script>

