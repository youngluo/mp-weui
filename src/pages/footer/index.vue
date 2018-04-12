<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Footer</div>
      <div class="page__desc">页脚</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <mp-footer :text="text" />

      <mp-footer
        :text="text"
        :links="links"
      />

      <mp-footer
        :text="text"
        :links="links2"
      />

      <mp-footer
        :text="text"
        :links="links3"
        fixed
      />
    </div>
  </div>
</template>

<script>
import mpFooter from '../../../packages/footer/index';

export default {
  data() {
    return {
      links2: [{ link: '/a', text: '底部链接' }, { link: '/b', text: '底部链接' }],
      links3: [{ link: '/c', text: 'mp-weui首页' }],
      links: [{ link: '/a', text: '底部链接' }],
      text: 'Copyright © 2008-2016 weui.io',
    };
  },
  components: { mpFooter },
};
</script>

<style lang="less">
.weui-footer {
  margin-bottom: 50px;
}
.weui-footer_fixed-bottom {
  margin-bottom: 0;
}
</style>
