<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <div
            :class="['weui-navbar__item', {'weui-bar__item_on' : activeIndex == index}]"
            v-for="(item, index) in tabs"
            @click="tabClick($event, index)"
            :key="item"
          >
            <div
              class="weui-navbar__title"
              v-text="item"
            />
        </div>
        <div
          class="weui-navbar__slider"
          :style="{'-webkit-transform': 'translateX('+sliderOffset+'px)',transform: 'translateX('+sliderOffset+'px)', left: sliderLeft+'px'}"
        />
      </div>
      <div class="weui-tab__panel">
        <div
          class="weui-tab__content"
          v-if="activeIndex === 0"
        >
          选项一的内容
      </div>
      <div
        class="weui-tab__content"
        v-if="activeIndex === 1"
      >
        选项二的内容
    </div>
    <div
      class="weui-tab__content"
      v-if="activeIndex === 2"
    >
      选项三的内容
  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['选项一', '选项二', '选项三'],
      sliderWidth: 96,
      sliderOffset: 0,
      activeIndex: 1,
      sliderLeft: 0,
    };
  },
  methods: {
    tabClick(e, index) {
      this.sliderOffset = e.currentTarget.offsetLeft;
      this.activeIndex = index;
    },
  },
  mounted() {
    const { length } = this.tabs;

    wx.getSystemInfo({
      success: (res) => {
        this.sliderLeft = (res.windowWidth / length - this.sliderWidth) / 2;
        this.sliderOffset = res.windowWidth / length * this.activeIndex;
      },
    });
  },
};
</script>

<style lang="less">
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
</style>


