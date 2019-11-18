<template>
  <div class="ynet-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Row',
  display: 'Row栅格',
  data () {
    return {
      preCls: 'ynet-row'
    }
  },
  props: {
    
  },
  methods: {
    
  }
}
</script>