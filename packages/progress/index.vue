<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <progress
        :backgroundColor="backgroundColor"
        :active-mode="animateMode"
        :stroke-width="width"
        :show-info="showInfo"
        :activeColor="color"
        :percent="percent"
        :active="animate"
      />
    </div>
    <div
      class="weui-progress__opr"
      v-if="showCancel"
    >
      <icon
        @click="$emit('onCancel', $event)"
        :size="cancelSize"
        type="cancel"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpProgress',
  props: {
    backgroundColor: {
      type: String,
      default: '#ebebeb',
    },
    animateMode: {
      type: String,
      default: 'forwards',
    },
    color: {
      type: String,
      default: '#09bb07',
    },
    width: {
      type: Number,
      default: 3,
    },
    cancelSize: {
      type: Number,
      default: 22,
    },
    showCancel: Boolean,
    showInfo: Boolean,
    animate: Boolean,
    percent: Number,
  },
};
</script>
