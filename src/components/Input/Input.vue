<template>
  <div
    :class="[type==='textarea'? 'ynet-textarea' : 'ynet-input',
    inputSize? 'ynet-input--'+inputSize:'',
    {
        'is-disabled':inputDisabled,
    }
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="el-input__inner"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :disabled="inputDisabled"
      />
    </template>
  </div>
</template>

    </div>


</template>


<script>
export default {
  name: "ynet-input",
  display: "Input输入框",
  data() {
    return {};
  },
  props: {
    size: String,
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>