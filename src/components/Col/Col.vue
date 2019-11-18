<template>
  <div class="ynet-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'Col',
  display: 'Col栅格',
  data() {
    return {
      preCls: 'ynet-col',
      gutter: 0,
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  methods: {
    createClasses(obj, str = '') {
      if (!obj) { return [] } //值为 undefined 会产生 bug
      let array = []
      if (obj.span) { array.push(`col-${str}${obj.span}`) } // 关联scss的绑定动态变量
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
      return array
    }
  },
  computed: { // mounted，gutter变了，colStyle也变
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this
      // let createClasses = this.createClasses
      return [
        ...this.createClasses({ span, offset }),
        ...this.createClasses(ipad, 'ipad-'),
        ...this.createClasses(narrowPc, 'narrow-pc-'),
        ...this.createClasses(pc, 'pc-'),
        ...this.createClasses(widePc, 'wide-pc-')
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}

</script>
