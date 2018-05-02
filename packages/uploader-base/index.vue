<template>
  <div class="weui-cells">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <div class="weui-uploader">
          <div class="weui-uploader__hd">
            <div
              class="weui-uploader__title"
              v-text="title"
            />
            <div
              class="weui-uploader__info"
              v-if="max"
            >
              {{files.length}}/{{max}}
            </div>
          </div>
          <div class="weui-uploader__bd">
            <div class="weui-uploader__files">
              <div
                v-for="file in files"
                :key="file.path"
              >
                <div
                  :class="['weui-uploader__file', {'weui-uploader__file_status': file.hasMask}]"
                  @click="preview(file)"
                >
                  <img
                    class="weui-uploader__img"
                    mode="aspectFill"
                    :src="file.path"
                  />
                  <div
                    class="weui-uploader__file-content"
                    v-if="file.hasMask"
                  >
                    <icon
                      v-if="file.failure"
                      color="#F43530"
                      type="warn"
                      size="23"
                    />
                    <span
                      v-text="file.progress + '%'"
                      v-else
                    />
                  </div>
                </div>
              </div>
              <div class="weui-uploader__input-box">
                <div
                  class="weui-uploader__input"
                  @click="$emit('onSelect')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MpUploaderBase',
  props: {
    fileList: {
      type: Array,
      default: () => [],
    },
    title: String,
    max: Number,
  },
  computed: {
    files() {
      const curFiles = this.max ? this.fileList.slice(0, this.max) : this.fileList;

      return curFiles.map((file) => {
        file.hasMask = file.failure || (file.progress && file.progress !== 100);

        return file;
      });
    },
  },
  methods: {
    preview(rawFile) {
      if (rawFile.failure) return;

      wx.previewImage({
        current: rawFile.path,
        urls: this.files.filter(file => !file.failure).map(file => file.path),
      });
    },
  },
};
</script>
