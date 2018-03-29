import Picker from './picker';
import Dialog from './dialog';
import Toast from './toast';
import '../utils/assign';

const components = [Picker];

// mpvue暂不支持全局 component
function install(Vue) {
  components.map((component) => {
    Vue.component(component.name, component);
  });

  Vue.$dialog = Vue.prototype.$dialog = Dialog;
  Vue.$toast = Vue.prototype.$toast = Toast;
}

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

const version = '1.0.0';

export {
  install,
  version,
  Dialog,
  Toast,
};

export default {
  install,
  version,
};
