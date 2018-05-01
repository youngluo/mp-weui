<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div
        :class="['weui-navbar__item', {'weui-bar__item_on' : value == index}]"
        v-for="(item, index) in columns"
        @click="onClick($event, index)"
        :key="item"
      >
        <div
          class="weui-navbar__title"
          v-text="item"
        />
      </div>
      <div
        class="weui-navbar__slider"
        :style="sliderStyle"
      />
    </div>
    <div class="weui-tab__panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpNavbar',
  props: {
    columns: {
      required: true,
      type: Array,
      default: () => [],
    },
    sliderWidth: {
      type: Number,
      default: 96,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      sliderOffset: 0,
      sliderLeft: 0,
    };
  },
  computed: {
    sliderStyle() {
      return [
        `-webkit-transform:translateX(${this.sliderOffset}px)`,
        `transform:translateX(${this.sliderOffset}px)`,
        `left:${this.sliderLeft}px`,
      ].join(';');
    },
  },
  methods: {
    onClick(e, index) {
      this.sliderOffset = e.currentTarget.offsetLeft;
      this.$emit('input', Number(index));
    },
  },
  mounted() {
    const { length } = this.columns;

    wx.getSystemInfo({
      success: ({ windowWidth }) => {
        const columnWidth = windowWidth / length;

        this.sliderLeft = (columnWidth - this.sliderWidth) / 2;
        this.sliderOffset = columnWidth * this.value;
      },
    });
  },
};
</script>
