<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Panel</div>
      <div class="page__desc">面板</div>
    </div>
    <div class="page__bd">
      <mp-panel
        :data-source="dataSource"
        title="图文组合列表"
      />
      <mp-panel
        :data-source="dataSource"
        title="文字组合列表"
        type="text"
      />
      <mp-panel
        :data-source="dataSource2"
        title="文字列表附来源"
        type="text"
      />
      <!-- <div class="weui-panel">
        <div class="weui-panel__hd">小图文组合列表</div>
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells weui-cells_in-small-appmsg">
              <a
                url=""
                class="weui-cell weui-cell_access"
                hover-class="weui-cell_active"
              >
                <div class="weui-cell__hd">
                  <image
                    :src="icon20"
                    style="width: 20px;height: 20px;margin-right: 5px"
                  />
                </div>
                <div class="weui-cell__bd weui-cell_primary">
                  <div>文字标题</div>
                </div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                </a>
                <a
                  url=""
                  class="weui-cell weui-cell_access"
                  hover-class="weui-cell_active"
                >
                  <div class="weui-cell__hd">
                    <image
                      :src="icon20"
                      style="width: 20px;height: 20px;margin-right: 5px"
                    />
                  </div>
                  <div class="weui-cell__bd weui-cell_primary">
                    <div>文字标题</div>
                  </div>
                  <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </a>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import MpPanel from '../../../packages/panel';
import base64 from '../../base64';

export default {
  components: {
    MpPanel,
  },
  data() {
    return {
      icon20: base64.icon20,
      icon60: base64.icon60,
      dataSource: [
        {
          title: '标题一',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          icon: base64.icon60,
        },
        {
          title: '标题一',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          icon: base64.icon60,
          url: '/abc',
        },
      ],
      dataSource2: [
        {
          title: '标题一',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: [
            '文字来源',
            '时间',
            { value: '其它信息', divider: true },
          ],
        },
        {
          title: '标题一',
          content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          meta: [
            '文字来源',
            '时间',
            { value: '其它信息', divider: true },
          ],
        },
      ],
    };
  },
};
</script>

