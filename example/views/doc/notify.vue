<template>
  <div class="sh-notify">
    
  </div>
</template>

<script>
  export default {
    name: 'Notify',
    created() {
      this.$notify({title: 'hello'})
    }
  }
</script>

<style>
</style>
