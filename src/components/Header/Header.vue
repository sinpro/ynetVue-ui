<template>
  <div class="ynet-header">
    <div>
      <button @click="sidebarToggle" style="position: fixed;left: 200px;top: 30px;">导航缩进</button>
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
  methods: {
    sidebarToggle (e) {
      console.log(document.body.className)
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
  }
}
</script>