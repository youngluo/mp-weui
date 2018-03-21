<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div :class="['weui-cells', {'weui-cells_after-title': title}]">
      <radio-group @change="onRadioChange">
        <label class="weui-cell weui-check__label" v-for="item in radioOptions" :key="item.value">
          <radio class="weui-check" :value="item.value" :checked="item.checked" :disabled="item.disabled"/>
          <div class="weui-cell__bd">{{item.label}}</div>
          <div class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
            <icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
          </div>
        </label>
      </radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpRadio',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: String,
    title: String,
  },
  data() {
    return {
      radioOptions: [...this.options],
    };
  },
  methods: {
    onRadioChange(e) {
      const { value } = e.target;

      this.updateData(value);

      this.$emit('input', value);
    },
    updateData(value) {
      const { radioOptions } = this;
      const { length } = radioOptions;

      for (let i = 0; i < length; i++) {
        radioOptions[i].checked = radioOptions[i].value === value;
      }

      this.radioOptions = radioOptions;
    },
  },
};
</script>
