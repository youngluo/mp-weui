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
            <div class="weui-uploader__info">{{files.length}}/2</div>
          </div>
          <div class="weui-uploader__bd">
            <div
              class="weui-uploader__files"
              id="uploaderFiles"
            >
              <div
                v-for="file in files"
                :key="file.path"
              >
                <div
                  class="weui-uploader__file"
                  @click="preview(file.path)"
                >
                  <img
                    class="weui-uploader__img"
                    mode="aspectFill"
                    :src="file.path"
                  />
          </div>
        </div>
        <!-- <div class="weui-uploader__file weui-uploader__file_status">
          <img
            class="weui-uploader__img"
            src="/static/images/pic_160.png"
            mode="aspectFill"
          />
          <div class="weui-uploader__file-content">
            <icon
              type="warn"
              size="23"
              color="#F43530"
            ></icon>
          </div>
        </div> -->
        <!-- <div class="weui-uploader__file weui-uploader__file_status">
          <img
            class="weui-uploader__img"
            src="/static/images/pic_160.png"
            mode="aspectFill"
          />
          <div class="weui-uploader__file-content">50%</div>
        </div>
      </div> -->
        <div class="weui-uploader__input-box">
          <div
            class="weui-uploader__input"
            @click="choose"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MpUploader',
  props: {
    counts: {
      type: Number,
      default: 9,
    },
    sizeType: {
      type: Array,
      default: ['original', 'compressed'],
    },
    sourceType: {
      type: Array,
      default: ['album', 'camera'],
    },
    action: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'file',
    },
    beforeUpload: Function,
    autoUpload: Boolean,
    headers: Object,
    title: String,
    data: Object,
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    choose() {
      wx.chooseImage({
        count: this.counts,
        sizeType: this.sizeType,
        sourceType: this.sourceType,
        success: (res) => {
          this.files = this.files.concat(res.tempFiles);

          if (this.autoUpload) this.submit();
        },
      });
    },
    preview(path) {
      wx.previewImage({
        current: path,
        urls: this.files.map(file => file.path),
      });
    },
    submit() {
      this.files.forEach((file) => {
        this.upload(file);
      });
    },
    upload(file) {
      if (!this.beforeUpload) {
        return this.post(file);
      }

      if (this.beforeUpload(file, this.files)) {
        this.post(file);
      }
    },
    post(file) {
      wx.uploadFile({
        header: this.headers,
        filePath: file.path,
        formData: this.data,
        url: this.action,
        name: this.name,
        success(res) {
          console.log(res);
        },
      });
    },
  },
};
</script>

