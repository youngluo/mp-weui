<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div :class="['weui-cells', {'weui-cells_after-title': title}]">
      <checkbox-group @change="onCheckboxChange">
          <label class="weui-cell weui-check__label" v-for="item in checkboxOptions" :key="item.value">
              <checkbox class="weui-check" :value="item.value" :checked="item.checked" :disabled="item.disabled"/>
              <div class="weui-cell__hd weui-check__hd_in-checkbox">
                  <icon class="weui-icon-checkbox_circle" type="circle" size="23" v-if="!item.checked"></icon>
                  <icon class="weui-icon-checkbox_success" type="success" size="23" v-if="item.checked"></icon>
              </div>
              <div class="weui-cell__bd">{{item.label}}</div>
          </label>
      </checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mpCheckbox',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: Array,
    title: String,
  },
  data() {
    return {
      checkboxOptions: [...this.options],
    };
  },
  methods: {
    onCheckboxChange(e) {
      const { value } = e.target;

      this.updateData(value);

      this.$emit('input', value);
    },
    updateData(values) {
      const { checkboxOptions } = this;
      const { length } = checkboxOptions;

      for (let i = 0; i < length; i++) {
        checkboxOptions[i].checked = false;

        if (values.indexOf(checkboxOptions[i].value) !== -1) {
          checkboxOptions[i].checked = true;
        }
      }

      this.checkboxOptions = checkboxOptions;
    },
  },
};
</script>
