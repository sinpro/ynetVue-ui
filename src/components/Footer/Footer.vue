<template>
  <div class="ynet-footer">
    <slot></slot>
    <span class="float-right">Powered by <a href="https://github.com/sinpro/vue-ui.git">GitHub</a></span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  display: 'Footer脚部',
  data () {
    return {
      preCls: 'ynet-footer'
    }
  },
  methods: {
    
  }
}
</script>