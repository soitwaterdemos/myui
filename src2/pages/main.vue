<template>
  <div>
    <my-icon loading icon='settings'/>
    <br/>
    <my-button loading icon='loading' icon-position="left">按钮示例1</my-button>
    <br/>
    <my-button loading icon='loading' icon-position="right">按钮示例2</my-button>
    <br/>
  </div>
</template>

<script>
import icon from "@/icon/icon"
import button from "@/button/button"
export default {
  components: {
    "my-icon": icon,
    "my-button": button
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
