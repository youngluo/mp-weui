<template>
  <div>
    <div
      class="weui-cells__title"
      v-text="title"
      v-if="title"
    />
    <div :class="['weui-cells', {'weui-cells_after-title': title}]">
      <radio-group @change="$emit('input', $event.target.value)">
        <label
          :class="['weui-cell', item.disabled ? 'weui-check__label_disabled-radio' : 'weui-check__label']"
          v-for="item in radioOptions"
          :key="item.value"
        >
          <radio
            :disabled="item.disabled"
            :checked="item.checked"
            :value="item.value"
            class="weui-check"
          />
          <div
            class="weui-cell__bd"
            v-text="item.label"
          />
          <div
            class="weui-cell__ft weui-cell__ft_in-radio"
            v-if="item.checked"
          >
            <icon
              type="success_no_circle"
              class="weui-icon-radio"
              size="16"
            />
          </div>
        </label>
      </radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpRadio',
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: String,
    title: String,
  },
  computed: {
    radioOptions() {
      return this.options.map((item) => {
        item.checked = item.value === this.value;

        return item;
      });
    },
  },
};
</script>

<style>
.weui-check__label_disabled-radio {
  color: rgba(0, 0, 0, 0.3);
}
</style>
