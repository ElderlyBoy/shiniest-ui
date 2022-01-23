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
    watch: {
      bindValue: {
        deep: true,
        handler(val){
          this.$emit('change', val)
        }
      }
    },
    methods: {
      
    }
  }
</script>