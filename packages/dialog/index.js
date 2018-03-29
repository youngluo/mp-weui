function Dialog(options) {
  delete options.complete;
  delete options.fail;

  options.success = (res) => {
    if (res.confirm) {
      options.onOk && options.onOk();
    } else {
      options.onCancel && options.onCancel();
    }
  };

  wx.showModal(options);
}

Dialog.alert = (content, title = '', options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  options = Object.assign({ content, title }, options);
  options.showCancel = false;

  Dialog(options);
};

Dialog.confirm = (content, title = '', options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  options = Object.assign({ content, title }, options);
  options.showCancel = true;

  Dialog(options);
};

export default Dialog;
