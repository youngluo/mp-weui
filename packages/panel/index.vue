<template>
  <div class="weui-panel">
    <div class="weui-panel__hd">{{title}}</div>
    <div class="weui-panel__bd">
      <a
        class="weui-media-box weui-media-box_appmsg"
        v-for="(item, index) in dataSource"
        hover-class="weui-cell_active"
        v-if="type==='appmsg'"
        :href="item.url"
        :key="index"
      >
        <div class="weui-media-box__hd_in-appmsg">
          <image
            class="weui-media-box__thumb"
            :src="item.icon"
          />
        </div>
        <div class="weui-media-box__bd_in-appmsg">
          <div class="weui-media-box__title">{{item.title}}</div>
          <div class="weui-media-box__desc">{{item.content}}</div>
        </div>
      </a>
      <div
        v-for="(item, i) in dataSource"
        class="weui-media-box"
        v-if="type==='text'"
        :key="i"
      >
        <div class="weui-media-box__title weui-media-box__title_in-text">{{item.title}}</div>
        <div class="weui-media-box__desc">{{item.content}}</div>
        <div
          v-if="item.meta && item.meta.length > 0"
          class="weui-media-box__info"
        >
          <div
            :class="['weui-media-box__info__meta', {'weui-media-box__info__meta_extra': m.divider}]"
            v-for="m in item.meta"
            v-text="m.value || m"
            :key="m.value || m"
          />
        </div>
      </div>
    </div>
    <div
      class="weui-panel__ft"
      v-if="$slots.label"
    >
      <slot name="label" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpPanel',
  props: {
    type: {
      type: String,
      default: 'appmsg', // or 'text'
    },
    title: String,
    dataSource: Array,
  },
};
</script>

