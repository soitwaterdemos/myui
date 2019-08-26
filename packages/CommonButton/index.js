import CommonButton from './src/main.vue';
// 在每个组件下面定义一个install方法。
CommonButton.install = function (Vue) {
  Vue.component(CommonButton.name, CommonButton);
};
export default CommonButton;