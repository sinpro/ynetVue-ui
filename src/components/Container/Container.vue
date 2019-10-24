<template>
  <div class="ynet-container">
    <ynet-header></ynet-header>
    <div class="ynet-container-body">
      <ynet-silder></ynet-silder>
      <main class="main">
        <div class="">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <ynet-footer></ynet-footer>
  </div>
</template>

<script>
export default {
  name: 'Container',
  display: 'Container内容',
  data () {
    return {
      preCls: 'ynet-container',
    }

  },
  methods: {
  }
}
</script>
