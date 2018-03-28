function Dialog(options) {
  wx.showModal(Object.assign({}, options, {
    success(res) {
      if (res.confirm) {
        options.onOk();
      } else {
        options.onCancel();
      }
    },
    fail() {},
    complete() {},
  }));
}

Dialog.alert = function (content, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = undefined;
  }

  Dialog(Object.assign(options, {
    showCancel: false,
    content,
    title,
  },
  ));
};

Dialog.confirm = function (content, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  Dialog(Object.assign(options, {
    showCancel: true,
    content,
    title,
  },
  ));
};

export default Dialog;
