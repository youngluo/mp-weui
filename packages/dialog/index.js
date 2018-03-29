function Dialog(options) {
  wx.showModal(Object.assign(
    options,
    {
      success(res) {
        if (res.confirm) {
          options.onOk();
        } else {
          options.onCancel();
        }
      },
      fail() {},
      complete() {},
    },
  ));
}

Dialog.alert = function (content, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  Dialog(Object.assign(
    {
      showCancel: false,
      content,
      title,
    },
    options,
  ));
};

Dialog.confirm = function (content, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  Dialog(Object.assign(
    {
      showCancel: true,
      content,
      title,
    },
    options,
  ));
};

export default Dialog;
