function close() {
  wx.hideLoading();
}

function Toast(options, duration) {
  if (typeof options === 'string') {
    options = {
      duration: duration || 1500,
      title: options,
      icon: 'none',
    };
  }

  options.mask = true;
  delete options.complete;
  delete options.success;
  delete options.fail;

  wx.showToast(options);
}

Toast.loading = (message = '数据加载中') => {
  wx.showLoading({
    title: message,
    mask: true,
  });

  return close;
};

Toast.success = (message) => {
  Toast({
    title: message,
    icon: 'success',
  });
};

Toast.close = close;

export default Toast;
