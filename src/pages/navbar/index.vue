<template>
  <mp-navbar
    v-model="activeIndex"
    :columns="columns"
  >
    <!-- <mp-navbar-panel :active-index="activeIndex" :index="0">
      选项一的内容
    </mp-navbar-panel> -->
    <div
      v-for="(item, index) in columns"
      v-if="activeIndex === index"
      class="weui-tab__content"
      :key="item"
    >
      {{item}}的内容
    </div>
  </mp-navbar>
</template>

<script>
import mpNavbar from '../../../packages/navbar';
import mpNavbarPanel from '../../../packages/navbar-panel';

export default {
  data() {
    return {
      columns: ['选项一', '选项二', '选项三'],
      activeIndex: 0,
    };
  },
  components: {
    mpNavbar,
    mpNavbarPanel,
  },
};
</script>

<style lang="less">
page {
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


