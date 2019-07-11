<template>
  <svg class="sy-icon icon">
    <use :xlink:href='`#my-${icon}`'></use>
  </svg>
</template>

<script>
import "@/assets/svg.js"
export default {
  name: "SyIcon",
  props: ["icon"] // 注意写法
}
</script>

<style lang="stylus">
.icon {
  // filter: drop-shadow(#ffffff 80px 0)
}
</style>
