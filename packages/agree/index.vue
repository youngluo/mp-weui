<template>
  <checkbox-group
    @change="$emit('input', !!$event.target.value.length)"
    class="weui-agree"
  >
    <label style="display:inline-block">
      <div class="weui-agree__text">
        <checkbox
          class="weui-agree__checkbox"
          :checked="value"
          value="agree"
        />
        <div class="weui-agree__checkbox-icon">
          <icon
            class="weui-agree__checkbox-icon-check"
            type="success_no_circle"
            v-if="value"
            size="9"
          />
        </div>
        {{label}}
      </div>
    </label>
    <a
      class="weui-agree__link"
      v-text="urlText"
      :href="url"
      v-if="url"
    />
  </checkbox-group>
</template>

<script>
export default {
  name: 'MpAgree',
  props: {
    label: {
      type: String,
      default: '阅读并同意',
    },
    urlText: String,
    value: Boolean,
    url: String,
  },
};
</script>
