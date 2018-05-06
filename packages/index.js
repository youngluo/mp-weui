import '../lib/style.css';
import Actionsheet from './actionsheet';
import Badge from './badge';
import Cell from './cell';
import CellGroup from './cell-group';
import Checklist from './checklist';
import Picker from './picker';
import Dialog from './dialog';
import Toast from './toast';
import Field from './field';
import Footer from './footer';
import Grid from './grid';
import GridGroup from './grid-group';
import Loadmore from './loadmore';
import Message from './message';
import Navbar from './navbar';
import NavbarPanel from './navbar-panel';
import Progress from './progress';
import Radio from './radio';
import Search from './search';
import Slider from './slider';
import Switch from './switch';

const components = [
  Actionsheet,
  Badge,
  Cell,
  CellGroup,
  Checklist,
  Picker,
  Field,
  Footer,
  Grid,
  GridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  Progress,
  Radio,
  Search,
  Slider,
  Switch,
];

function install(Vue) {
  // mpvue暂不支持全局 component
  components.map((component) => {
    Vue.component(component.name, component);
  });

  Vue.$dialog = Vue.prototype.$dialog = Dialog;
  Vue.$toast = Vue.prototype.$toast = Toast;
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = '1.0.0';

export {
  install,
  version,
  Actionsheet,
  Badge,
  Cell,
  CellGroup,
  Checklist,
  Picker,
  Field,
  Footer,
  Grid,
  GridGroup,
  Loadmore,
  Message,
  Navbar,
  NavbarPanel,
  Progress,
  Radio,
  Search,
  Slider,
  Switch,
};

export default {
  install,
  version,
};
