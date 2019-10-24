<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <ynet-button>default</ynet-button>
      <ynet-button type="success">success</ynet-button>
      <ynet-button type="error">error</ynet-button>
      <ynet-button type="warning">warning</ynet-button>
      <ynet-button type="info" style="min-width:120px">info</ynet-button>
      <p>2.按钮大小：size</p>
      <ynet-button>default</ynet-button>
      <ynet-button size="small">small</ynet-button>
      <ynet-button size="medium">medium</ynet-button>
      <ynet-button size="large">large</ynet-button>
      <p>3.按钮形状：shape</p>
      <ynet-button>default</ynet-button>
      <ynet-button shape="circle" type="info">circle</ynet-button>
      <ynet-button shape="rectangle" type="info">rectangle</ynet-button>
      <p>4.禁用按钮：isDisabled</p>
      <ynet-button isDisabled>default</ynet-button>
      <ynet-button type="success" isDisabled>success</ynet-button>
      <ynet-button type="error" isDisabled>error</ynet-button>
      <ynet-button type="warning" isDisabled>warning</ynet-button>
      <ynet-button type="info" isDisabled>info</ynet-button>
    </div>
    <div class="pt48">
      <h2>modal组件</h2>
      <p>1.基础样式</p>
      <ynet-button @click="show1=true">default</ynet-button>
      <ynet-modal 
        @on-ok="show1=false"
        @on-cancel="show1=false"
        :isShow="show1"></ynet-modal>
      <p>2.自定义内容</p>
      <ynet-button @click="show2=true">自定义内容</ynet-button>
      <ynet-button @click="show3=true">自定义宽度</ynet-button>
      <ynet-modal 
        @on-ok="show2=false"
        @on-cancel="show2=false"
        :isShow="show2">
        <template>自定义文字</template>
        <template slot="modal-title">
          <p>Hello World!</p>
        </template>
        <template slot="modal-body">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </template>
        <template slot="modal-footer">
          <ynet-button type="warning" @click="show2=false">取消</ynet-button>
        </template>
      </ynet-modal>
      <ynet-modal 
        @on-ok="show3=false"
        @on-cancel="show3=false"
        :width="300"
        :isShow="show3"></ynet-modal>
      <p>3.自定义size</p>
      <ynet-button @click="showSize('small')">small</ynet-button>
      <ynet-button @click="showSize('medium')">medium</ynet-button>
      <ynet-button @click="showSize('large')">large</ynet-button>
      <ynet-button @click="showSize('full')">full</ynet-button>
      <ynet-modal 
        @on-ok="show4=false"
        @on-cancel="show4=false"
        :size="size"
        :isShow="show4"></ynet-modal>
    </div>
  </div>
</template>

<script>
// import Button from '@/components/Button/Button'
// import Modal from '@/components/Modal/Modal'
export default {
  name: 'app',
  // components: {
  //   ywButton: Button,
  //   ywModal: Modal,
  // },
  data () {
    return {
      msg: 'Welcome to ynet-ui',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      size: '',
    }
  },
  methods: {
    showSize(item) {
      this.size = item
      this.show4 = true
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.pt48, .py48 {
  padding-top: 48px;
}
.pb48, py48 {
  padding-bottom: 48px;
}
.underline {border-bottom: 1px solid #ccc;}
</style>
