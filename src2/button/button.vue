<template>
  <div class="my-button">
    <div :icon-position="iconPosition"><my-icon class="" v-if="icon && !loading" :icon="icon" /></div> <!--传值时,外层引号可加可不加-->
    <div :icon-position="iconPosition"><my-icon class="loading" v-if="loading" icon="loading" /></div>
    <span class="content"><slot></slot></span>
  </div>
</template>

<script>
import "@/api/svg.js"
import icon from "@/icon/icon"
export default {
  props: {
    icon: {}, // 若不传值, <my-icon/>会被隐藏
    iconPosition: { // icon的位置,使用className控制样式
      type: String,
      default: "left",
      validator (value) {
        return value === "left" || value === "right"
      }
    },
    loading: { // 显示加载状态，通过是否包含“loading”属性控制
      type: Boolean,
      default: true,
    }
  },
  components: {
    "my-icon": icon
  }
}
</script>

<style lang="stylus" scoped>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.my-button {
  padding: 0 1em;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #999;
  font-size: 14px;
  display: inline-flex;  /* 保证button宽度自栋撑开 */
  justify-content: center;
  align-items: center;
  vertical-align: top;

  .icon__parent {
    transform: translateX(-4px);
  }
  [icon-position="left"] {
    transform: translateX(-4px);
    order: -1;
  }
  [icon-position="right"] {
    transform: translateX(4px);
    order: 1;
  }
  .content {

  }
}
.my-button:hover {
  border-color: #333;
}
.my-button:active {

}
.my-button:focus {
  
}

.loading {
  animation: spin .6s infinite linear;
}    
</style>
