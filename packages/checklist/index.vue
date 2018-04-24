<template>
  <div>
    <div
      class="weui-cells__title"
      v-text="title"
      v-if="title"
    />
    <div :class="['weui-cells', {'weui-cells_after-title': title}]">
      <checkbox-group @change="$emit('input', $event.target.value)">
          <label
            :class="['weui-cell', {'weui-check__label': !item.disabled}]"
            v-for="item in checklistOptions"
            :key="item.value"
          >
              <checkbox
                :disabled="item.disabled"
                :checked="item.checked"
                :value="item.value"
                class="weui-check"
              />
              <div class="weui-cell__hd weui-check__hd_in-checkbox">
                  <icon
                    :color="item.disabled ? 'rgba(0, 0, 0, 0.15)': ''"
                    :type="item.checked ? 'success' : 'circle'"
                    class="weui-icon-checkbox_circle"
                    size="23"
                  />
              </div>
              <div
                class="weui-cell__bd"
                v-text="item.label"
              />
          </label>
      </checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpChecklist',
  props: {
    options: {
      type: Array,
      required: true,
    },
    title: String,
    value: Array,
    max: Number,
  },
  computed: {
    checklistOptions() {
      return this.options.map((item) => {
        if (this.value && this.value.indexOf(item.value) !== -1) {
          item.checked = true;
        } else {
          item.checked = false;

          if (this.max && this.value.length >= this.max) {
            item.disabled = true;
          } else {
            item.disabled = false;
          }
        }

        return item;
      });
    },
  },
};
</script>

