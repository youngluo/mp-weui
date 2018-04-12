<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Badge</div>
      <div class="page__desc">徽章</div>
    </div>

    <div class="page__bd">
      <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">单行列表</div>
          <div
            class="weui-cell__ft weui-cell__ft_in-access"
            style="font-size: 0"
          >
            <div style="display: inline-block;vertical-align:middle; font-size: 17px;">详细信息</div>
            <mp-badge wrap-class-name="mp-badge-dot" />
          </div>
        </div>
      </div>

      <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div
            class="weui-cell__hd"
            style="position: relative;margin-right: 10px;"
          >
            <img
              src="/static/images/pic_160.png"
              style="width: 50px; height: 50px; display: block"
            />
            <mp-badge
              wrap-class-name="mp-badge-left"
              text="8"
            />
          </div>
          <div class="weui-cell__bd">
            <div>联系人名称</div>
            <div style="font-size: 13px;color: #888888;">摘要信息</div>
          </div>
        </div>

        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mp-badge
              wrap-class-name="mp-badge"
              text="8"
            />
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>

        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mp-badge
              wrap-class-name="mp-badge"
              text="8"
            />
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access">详细信息</div>
        </div>

        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mp-badge
              wrap-class-name="mp-badge"
              text="New"
            />
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mpBadge from '../../../packages/badge';

export default {
  components: {
    mpBadge,
  },
};
</script>

<style lang="less">
.mp-badge {
  margin-left: 5px;
  &-left {
    position: absolute;
    top: -0.4em;
    right: -0.4em;
  }
  &-dot {
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>


