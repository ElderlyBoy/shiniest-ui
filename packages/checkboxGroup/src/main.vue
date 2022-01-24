<template>
  <div class="sh-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ShCheckboxGroup',
    model: {
      prop: 'bindValue',
      event: 'change'
    },
    props: {
      bindValue: { type: Array, required: true },
      disabled: { type: Boolean, default: false }
    },
    provide(){
      return {
        shCheckboxGroup: this
      }
    },
    methods: {
      checkboxChange(value, state) {
        if(state) {
          this.$emit('change', [...this.bindValue, value])
        } else {
          this.$emit('change', this.bindValue.filter(i => i !== value))
        }
      }
    }
  }
</script>