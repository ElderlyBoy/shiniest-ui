import Hello from "./../packages/hello/index.js"
import Demo from "./../packages/demo/index.js"

const components = [
  Hello,
  Demo
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if(window !== undefined && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  ...components
}