<template>
  <div class="weui-search-bar">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <icon
          class="weui-icon-search_in-box"
          type="search"
          size="14"
        />
        <input
          @confirm="$emit('confirm', currentValue)"
          class="weui-search-bar__input"
          :confirm-type="confirmType"
          :placeholder="placeholder"
          v-model="currentValue"
          :focus="visible"
          type="text"
        />
        <div
          @click="currentValue = ''"
          class="weui-icon-clear"
          v-if="!!currentValue"
        >
          <icon
            type="clear"
            size="14"
          />
        </div>
      </div>
      <label
        class="weui-search-bar__label"
        @click="visible = true"
        v-if="!visible"
      >
        <icon
          class="weui-icon-search"
          type="search"
          size="14"
        />
        <div
          class="weui-search-bar__text"
          v-text="placeholder"
        />
      </label>
    </div>
    <div
      @click="currentValue = '', visible = false"
      class="weui-search-bar__cancel-btn"
      v-text="cancelText"
      v-if="visible"
    />
  </div>
</template>

<script>
export default {
  name: 'MpSearch',
  props: {
    confirmType: {
      type: String,
      default: 'done',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    value: String,
  },
  data() {
    return {
      currentValue: this.value,
      visible: false,
    };
  },
  watch: {
    currentValue(value) {
      this.$emit('input', value);
      this.$emit('change', value);
    },
    value(value) {
      this.currentValue = value;
    },
  },
};
</script>

