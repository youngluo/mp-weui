<template>
  <div class="page">
    <div class="page__hd">
        <div class="page__title">List</div>
        <div class="page__desc">列表</div>
    </div>
    <div class="page__bd">
        <div class="weui-cells__title">带说明的列表项</div>
        <div class="weui-cells weui-cells_after-title">
            <mp-cell content="标题文字" remark="说明文字" />
        </div>

        <div class="weui-cells__title">带图标、说明的列表项</div>
        <div class="weui-cells weui-cells_after-title">
            <mp-cell :icon="icon" content="标题文字" remark="说明文字" />
            <mp-cell :icon="icon" content="标题文字" remark="说明文字" />
        </div>

        <div class="weui-cells__title">带跳转的列表项</div>
        <div class="weui-cells weui-cells_after-title">
            <mp-cell content="标题文字" url="/aaa" />
            <mp-cell content="标题文字" url="/aaa" />
        </div>

        <div class="weui-cells__title">带说明、跳转的列表项</div>
        <div class="weui-cells weui-cells_after-title">
            <mp-cell content="标题文字" remark="说明文字" url="/aaa" />
            <mp-cell content="标题文字" remark="说明文字" url="/aaa" />
        </div>

        <div class="weui-cells__title">带图标、说明、跳转的列表项</div>
        <div class="weui-cells weui-cells_after-title">
            <mp-cell :icon="icon" content="标题文字" remark="说明文字" url="/aaa" />
            <mp-cell :icon="icon" content="标题文字" remark="说明文字" url="/aaa" />
        </div>
    </div>
  </div>
</template>

<script>
import Cell from '../../../packages/cell';
import base64 from '../../base64';

export default {
  data() {
    return {
      icon: base64.icon20,
    };
  },
  components: { mpCell: Cell },
};
</script>

<style lang="less">

</style>


