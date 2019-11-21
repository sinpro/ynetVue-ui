<template>
  <div class="ynet-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Row',
  display: 'Row栅格',
  data() {
    return {
      preCls: 'ynet-row'
    }
  },
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + 'px',
        marginRight: -this.gutter / 2 + 'px'
      }
    },
    rowClass() {
      let { align } = this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach((vm) => { // 遍历 row 中 col，将 gutter 传递给 col
      vm.gutter = this.gutter
    })
  }
}

</script>



