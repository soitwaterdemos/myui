<template>
  <svg class="my-icon icon">
    <use :xlink:href='`#my-${icon}`'></use><!--注意写法-->
  </svg>
</template>

<script>
import "@/api/svg.js"
export default {
  props: ["icon"] // 注意写法
  
}
</script>

<style lang="stylus">
.icon {
  // filter: drop-shadow(#ffffff 80px 0)
}
</style>
