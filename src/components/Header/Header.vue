<template>
  <div class="ynet-header">
    <div>
      <a href="https://github.com/sinpro/vue-ui.git" class="logopic"><img :src="logoPic"></a>
      <button @click="sidebarToggle" style="position: fixed;left: 180px;top: 30px;">导航缩进</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  display: 'Header头部',
  data () {
    return {
      preCls: 'ynet-header'
    }
  },
  props: {
    logoPic: String,
  },
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
  }
}
</script>