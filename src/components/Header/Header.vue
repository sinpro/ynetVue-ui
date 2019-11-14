<template>
  <div class="ynet-header">
    <div>
      <a href="https://github.com/sinpro/vue-ui.git" class="logopic"><img :src="logoPic"></a>
      <span style="position: fixed;left: 180px;top: 25px;cursor: pointer;" @click="sidebarToggle">
        <ynet-icon  :name="isShowMenu?'shouqicaidan':'zhankaicaidan'"  size="normal"></ynet-icon>
      </span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  display: 'Header头部',
  data () {
    return {
      preCls: 'ynet-header',
      isShowMenu:true
    }
  },
  props: {
    logoPic: String,
  },
  methods: {
    sidebarToggle (e) {
      this.isShowMenu=!this.isShowMenu;
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
  }
}
</script>