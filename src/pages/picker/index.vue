<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Picker</div>
      <div class="page__desc">选择器，这里只对“selector”模式做了简单封装，其它模式建议使用小程序原生的picker。</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <mp-picker
          v-model="value"
          :range="array"
        >
          <button type="default">单列选择器</button>
        </mp-picker>
        <mp-picker
          v-model="mValue"
          :range="mArray"
          multiple
        >
          <button type="default">多列选择器</button>
        </mp-picker>
            <!-- <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
            <button type="default">时间选择器：{{time}}</button>
        </picker>
        <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
            <button type="default">日期选择器：{{date}}</button>
        </picker> -->
      </div>
    </div>
  </div>
</template>

<script>
import mpPicker from '../../../packages/picker';

export default {
  data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      mArray: [['四川', '陕西'], ['成都', '西安']],
      value: '中国',
      mValue: ['陕西', '西安'],
      time: '12:01',
      date: '2016-09-01',
    };
  },
  components: { mpPicker },
  methods: {
    bindTimeChange(e) {
      this.time = e.target.value;
    },
    bindDateChange(e) {
      this.date = e.target.value;
    },
  },
};
</script>

<style lang="less">
page {
  background-color: #ffffff;
}
.weui-btn-area {
  picker {
    margin-bottom: 10px;
  }
}
</style>

