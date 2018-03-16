import Picker from './picker'

const components = [Picker]

const install = function(Vue, config = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'

module.exports = {
  install,
  version,
  Picker
}
