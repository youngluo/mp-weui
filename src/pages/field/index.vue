<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Field</div>
      <div class="page__desc">表单输入</div>
    </div>
    <div class="page__bd">
      <div
        class="weui-toptips weui-toptips_warn"
        v-if="showTopTips"
        v-text="'错误提示'"
      />

      <div class="weui-cells__title">表单</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field
          placeholder="请输入qq"
          type="number"
          label="qq"
        />
        <mp-field
          placeholder="请输入手机号"
          type="number"
          label="手机号"
          vcode
        />
        <mp-field
          placeholder="请选择日期"
          v-model="date"
          label="日期"
          type="date"
        />
        <mp-field
          placeholder="请选择时间"
          v-model="time"
          label="时间"
          type="time"
        />
        <mp-field
          vcode-src="/static/images/vcode.jpg"
          placeholder="请输入验证码"
          label="验证码"
          vcode
        />
      </div>
      <div class="weui-cells__tips">底部说明文字底部说明文字</div>

      <div class="weui-cells__title">表单状态</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field
          placeholder="请输入卡号"
          state="success"
          type="number"
          label="卡号"
        />
        <mp-field
          placeholder="请输入卡号"
          state="warning"
          type="number"
          label="卡号"
        />
        <mp-field
          placeholder="请输入卡号"
          state="error"
          type="number"
          label="卡号"
        />
      </div>

      <div class="weui-cells__title">文本框：{{textInput}}</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field
          @change="onFieldChange"
          placeholder="请输入文本"
        />
      </div>

      <div class="weui-cells__title">文本域：{{textTextarea}}</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field
          @change="onTextareaChange"
          placeholder="请输入文本"
          type="textarea"
        />
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div
            class="weui-cell__hd"
            style="width: 105px"
          >
            <picker
              @change="onCountryCodeChange"
              :value="countryCodeIndex"
              :range="countryCodes"
            >
              <div class="weui-select">{{countryCodes[countryCodeIndex]}}</div>
            </picker>
          </div>
          <div class="weui-cell__bd weui-cell__bd_in-select-before">
            <input
              class="weui-input"
              placeholder="请输入号码"
            />
          </div>
        </div>
      </div>

      <mp-agree
        url-text="《相关条款》"
        v-model="isAgree"
        url="/abc"
      />
    </div>
  </div>
</template>

<script>
import MpField from '../../../packages/field';
import MpAgree from '../../../packages/agree';

export default {
  data() {
    return {
      showTopTips: false,
      textInput: '',
      textTextarea: '',
      date: '',
      time: '',
      countryCodes: ['+86', '+80', '+84', '+87'],
      countryCodeIndex: 0,
      isAgree: false,
    };
  },
  components: {
    MpField,
    MpAgree,
  },
  methods: {
    onFieldChange(value) {
      this.textInput = value;
    },
    onTextareaChange(value) {
      this.textTextarea = value;
    },
    onCountryCodeChange(e) {
      this.countryCodeIndex = e.target.value;
    },
  },
};
</script>

