import assign from '../../utils/assign';

function Dialog(options) {
  delete options.complete;
  delete options.fail;

  options.success = (res) => {
    if (res.confirm) {
      options.onOk && options.onOk(res);
    } else {
      options.onCancel && options.onCancel(res);
    }
  };

  wx.showModal(options);
}

Dialog.alert = (content, title = '', options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  options = assign({ content, title }, options);
  options.showCancel = false;

  Dialog(options);
};

Dialog.confirm = (content, title = '', options) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }

  options = assign({ content, title }, options);
  options.showCancel = true;

  Dialog(options);
};

export default Dialog;
