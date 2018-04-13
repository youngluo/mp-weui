<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Progress</div>
      <div class="page__desc">进度条</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <mp-progress
        :percent="50"
      />

      <mp-progress
        :percent="80"
        show-cancel
      />

      <mp-progress
        :percent="progress"
        show-cancel
        show-info
        animate
      />

      <div class="weui-btn-area">
        <button
          :disabled="disabled"
          @click="upload"
          type="primary"
        >
          上传
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import mpProgress from '../../../packages/progress';

export default {
  data() {
    return {
      disabled: false,
      progress: 0,
    };
  },
  components: { mpProgress },
  methods: {
    upload() {
      if (this.disabled) return;

      this.progress = 0;
      this.disabled = true;

      this.next();
    },
    next() {
      if (this.progress >= 100) {
        this.disabled = false;

        return;
      }

      this.progress += 10;

      setTimeout(() => {
        this.next();
      }, 300);
    },
  },
};
</script>

<style lang="less">
.weui-progress {
  margin-bottom: 24px;
}
</style>


