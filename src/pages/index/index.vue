<template>
  <div class="page">
      <div class="page__hd">
          <div class="page__title">MP-WeUI</div>
          <div class="page__desc">MP-WeUI 是基于 mpvue 和 weui-wxss 的小程序 UI 库。</div>
      </div>
      <div class="page__bd page__bd_spacing">
          <div class="kind-list">
              <div v-for="item in list" :key="item.id">
                  <div class="kind-list__item">
                      <div :class="['weui-flex', 'kind-list__item-hd', { 'kind-list__item-hd_show' : item.open}]" @click="kindToggle(item.id)">
                          <div class="weui-flex__item">{{item.name}}</div>
                          <img class="kind-list__img" :src="'/static/images/icon_nav_' + item.id + '.png'" />
                      </div>
                      <div :class="['kind-list__item-bd', {'kind-list__item-bd_show' : item.open}]">
                          <div :class="['weui-cells', {'weui-cells_show' : item.open}]">
                              <div v-for="(page, i) in item.pages" :key="i">
                                  <a :href="'/pages/' + page + '/main'" class="weui-cell weui-cell_access">
                                      <div class="weui-cell__bd">{{page}}</div>
                                      <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- <div class="page__ft">
          <img src="/static/images/icon_footer.png" style="width: 84px; height: 19px;" />
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 'form',
          name: '表单',
          open: false,
          pages: ['button', 'checklist', 'field', 'radio', 'slider', 'switch', 'uploader'],
        },
        {
          id: 'widget',
          name: '基础组件',
          open: false,
          pages: [
            // 'article',
            'badge',
            // 'flex',
            'footer',
            'gallery',
            'grid',
            'icons',
            'list',
            'loadmore',
            'panel',
            'preview',
            'progress',
          ],
        },
        {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: ['actionsheet', 'dialog', 'message', 'picker', 'toast'],
        },
        {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: ['navbar', 'tabbar'],
        },
        {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: ['searchbar'],
        },
      ],
    };
  },
  methods: {
    kindToggle(id) {
      const { list } = this;

      for (let i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }

      this.list = list;
    },
  },
};
</script>

<style lang="less">
.weui-flex {
  align-items: center;
}
.weui-cells {
  margin-top: 0;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.3s;
  &:before,
  &:after {
    display: none;
  }
  &_show {
    opacity: 1;
    transform: translateY(0);
  }
}
.weui-cell {
  &:before {
    right: 15px;
  }
}

.kind-list__item {
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 2px;
  overflow: hidden;
  &:first-child {
    margin-top: 0;
  }
}
.kind-list__img {
  width: 30px;
  height: 30px;
}

.kind-list__item-hd {
  padding: 20px;
  transition: opacity 0.3s;
  &_show {
    opacity: 0.4;
  }
}
.kind-list__item-bd {
  height: 0;
  overflow: hidden;
  &_show {
    height: auto;
  }
}
</style>
