<template>
  <i 
    class="iconfont" 
    :class="[size,'icon-ynet-'+name]" 
    :style="{'color':color}" 
  >
  </i>
</template>

<script>
export default {
  name: 'Icon',
  display: 'Icon图标',
  data () {
    return {
      preCls: 'ynet-Icon'
    }
  },
  props: {
    name: {
      type:String,
      require:true
    },
    size: {
      type:String,
      default:'small'
    },
    color:{
      type:String,
      default:'#333'
    }
  }
}
</script>