<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Grid</div>
      <div class="page__desc">九宫格</div>
    </div>
    <div class="page__bd">
      <div class="weui-grids">
        <!-- <mp-grid-group> -->
        <mp-grid
          icon-src="/static/images/icon_tabbar.png"
          v-for="item in grids"
          label="Grid"
          :key="item"
        />
        <!-- </mp-grid-group> -->
      </div>
    </div>
  </div>
</template>

<script>
import mpGridGroup from '../../../packages/grid-group';
import mpGrid from '../../../packages/grid';

export default {
  data() {
    return {
      grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  components: { mpGrid, mpGridGroup },
};
</script>


