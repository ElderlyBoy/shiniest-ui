<template>
  <div class="sh-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ShRadioGroup',
    model: {
      prop: 'bindValue',
      event: 'change'
    },
    props: {
      bindValue: { type: [String, Number, Boolean], required: true },
      disabled: { type: Boolean, default: false }
    },
    provide(){
      return {
        shRadioGroup: this
      }
    }
  }
</script>