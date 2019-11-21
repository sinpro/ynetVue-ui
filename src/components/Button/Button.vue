<template>
  <button
    type="button"
    :class="[type?'ynet-btn-'+type:'ynet-btn-default',size?'ynet-btn-'+size:'',round?'ynet-btn-round':'']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  display: "Button内容",
  data() {
    return {
      preCls: "ynet-button"
    };
  },
    props: {
      isDisabled: Boolean,
      shape: {
          type: String,
          default: '',//'circle'圆角, 'rectangle'直角
      },
      type: {
          type: String,
          default: 'success',//['default',success', 'warning', 'error', 'info']
          validator(value) {
              let types = ['default','success', 'warning', 'error', 'info']
              return types.includes(value) || !value
          }
      },
      size: {
          type: String,
          default: '',//['large', 'medium', 'small']
      }
    },
    round: Boolean
};
</script>

<style>
</style>