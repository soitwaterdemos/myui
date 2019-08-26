<template>
  <button
    id="get-button"
    ref="get-button"
    :class="{ button: true, hover: disabled == void 0 }"
    :size="size"
    :type="type"
    :disabled="disabled"
    @mousedown="changeMouseDownColor()"
    @mouseup="afterChangeMouseDownColor()"
    @click="clickEmit"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SyCommonButton',
  props: {
    size: {
      type: String,
      default: 'mini',
      validator(value) {
        return ['mini', 'small', 'medium'].includes(value)
      }
    },
    type: {
      type: String,
      default: 'orange',
      validator(value) {
        return ['orange', 'yellow', 'white'].includes(value)
      }
    },
    disabled: {
      require: false
    }
  },
  data() {
    return {
      colorObj: {orange: '#EE6B00', 'yellow': '#F1AA15', 'white': '#D9D9D9'}, // 按下后颜色
    }
  },
  methods: {
    changeMouseDownColor() {
      this.$refs['get-button'].style.setProperty("background", this.colorObj[this.type])
      if (this.type === 'white') {
        this.$refs['get-button'].style.setProperty('color', '#666')
        this.$refs['get-button'].style.setProperty('border-color', '#d9d9d9')
      } 
    },
    afterChangeMouseDownColor() {
      this.$refs['get-button'].style = ''
    },
    clickEmit() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.button {
  color: #fff;
  font-family: HelveticaNeue;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
}
/* size */
[size='mini'] {
  border-radius: 4px;
  height: 32px;
  padding-left: 26px;
  padding-right: 26px;
  font-size: 14px;
}
[size='small'] {
  border-radius: 6px;
  height: 42px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 16px;
  font-weight: 500;
}
[size='medium'] {
  border-radius: 6px;
  height: 50px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 18px;
  font-weight: 500;
}
/* type */
[type='orange'] {
  background: #FF7A00;
}
.hover[type='orange']:hover {
  background:#FF871A;
}
[type='yellow'] {
  background: #FEC125;
}
.hover[type='yellow']:hover {
  background:#FFCF3A;
}
[type='white'] {
  background: #fff;
  color: #666666;
  border:1px solid rgba(217,217,217,1);
}
.hover[type='white']:hover {
  border-color:#FF7A00;
  color: #FF7A00;
}

/* disabled */
[disabled='disabled'] {
  opacity: 0.5;
}
[type='white'][disabled='disabled'] {
  opacity: 1;
  color: #bbb;
  background: #d9d9d9;
}
</style>
