import Button from './Button/index.js'; // 引入组件
import CommonButton from './CommonButton/index.js'; // 引入组件
const components = [
  Button,
  CommonButton
];
//'vue-use是调用的install方法'
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install, // 如果在外面使用vue.use的话，就会默认使用install方法
  Button,
  CommonButton
};