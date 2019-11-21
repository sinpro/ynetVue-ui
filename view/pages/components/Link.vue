
<template>
  <div>
    <h1>Link文字链接</h1>
    <div class="navTips">基础用法</div>
    <p>基础的文字链接用法</p>
    <div>
      <ynet-link type="default" target>默认链接</ynet-link>
      <ynet-link type="success" target>成功链接</ynet-link>
      <ynet-link type="primary" target>主要链接</ynet-link>
      <ynet-link type="danger" target>危险链接</ynet-link>
      <ynet-link type="warning" target>警告链接</ynet-link>
      <ynet-link type="info" target>信息链接</ynet-link>
    </div>
    <div class="navTips">禁用状态</div>
    <p>文字链接不可用状态</p>
    <div>
      <ynet-link type="default" target disabled>默认链接</ynet-link>
      <ynet-link type="success" target disabled>成功链接</ynet-link>
      <ynet-link type="primary" target disabled>主要链接</ynet-link>
      <ynet-link type="danger" target disabled>危险链接</ynet-link>
      <ynet-link type="warning" target disabled>警告链接</ynet-link>
      <ynet-link type="info" target disabled>信息链接</ynet-link>
    </div>
    <div class="navTips">下划线</div>
    <p>文字链接下划线</p>
    <div>
      <ynet-link type="default" target>有下划线</ynet-link>
      <ynet-link type="default" target :underline="false">无下划线</ynet-link>
    </div>
    <div class="navTips">图标</div>
    <p>带图标的文字链接可增加辨识度</p>
    <ynet-link type="default" target>
      <ynet-icon name="chakan"></ynet-icon>查看
    </ynet-link>
    <ynet-link type="default" target>
      <ynet-icon name="xiugai"></ynet-icon>编辑
    </ynet-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  display: "Link文字链接",
  data() {
    return {};
  },

  methods: {}
};
</script>
<style scoped lang="scss">
.navTips {
  width: 200px;
  height: 50px;
  color: black;
  text-align: left;
  line-height: 50px;
  font-size: 20px !important;
  margin-top: 40px;
  font-weight: 900;
}
p {
  margin: 0px 0px 20px 0px;
  color: #5c6270;
}
h1 {
  font-size: 30px !important;
}
</style>