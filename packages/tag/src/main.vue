<template>
  <span :class="['sh-tag', `sh-tag__${type}`, `sh-tag__${tagSize}`]">
    <slot></slot>
  </span>
</template>

<script>
  import '../../stylesheet/tag.scss';
  export default {
    name: 'ShTag',
    inject: {
      shForm: {
        default: () => ({})
      }
    },
    props: {
      type: { type: String, default: 'primary' },
      size: { type: String, default: 'small' }
    },
    computed: {
      tagSize(){
        return this.size || this.shForm.size || this.$SHINIEST.size
      }
    }
  }
</script>