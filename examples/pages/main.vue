<template>
  <div>
    <sy-button icon-position="right">12</sy-button>
    <sy-button icon-position="left" :loading="false">12</sy-button>
    <sy-common-button>14</sy-common-button>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
  }
}
</script>

<style lang="stylus">
.icon {
  width: 1em; /*所有icon都与字体等高*/
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor; /*表示icon的颜色是当前父元素的css属性中的color属性值，可改变svg的颜色*/
  overflow: hidden;
}
</style>
