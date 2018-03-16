<template>
  <div class="page">
    <div class="page__hd">
        <div class="page__title">Picker</div>
        <div class="page__desc">选择器，这里使用小程序原生的picker。</div>
    </div>
    <div class="page__bd">
        <div class="weui-btn-area">
            <mp-picker v-model="value" :data="array" />
                <!-- <button type="default">单列选择器:{{value}}</button>
            </mp-picker> -->
            <!-- <picker class="weui-btn" mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="bindTimeChange">
                <button type="default">时间选择器</button>
            </picker>
            <picker class="weui-btn" mode="date" value="{{date}}" start="2015-09-01" end="2017-09-01" bindchange="bindDateChange">
                <button type="default">日期选择器</button>
            </picker> -->
        </div>
    </div>
</div>
</template>

<script>
import { Picker as mpPicker } from '../../../packages';

// console.dir(mpPicker);

export default {
  data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
      index: 0,
      date: '2016-09-01',
      time: '12:01',
      value: 0,
    };
  },
  components: { mpPicker },
  methods: {},
};
</script>

<style>
page {
  background-color: #ffffff;
}
</style>

