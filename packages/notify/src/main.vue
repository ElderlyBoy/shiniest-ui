<template>
  <div @mouseenter="handleMouseenter" @mouseout="handleMouseout" class="sh-notify">
    <h2>
      <span>ICON</span>
      <span>{{title}}</span>
    </h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'notify',
    data(){
      return {
        timmer: null,
        title: ''
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init(){
        this.timmer = setTimeout(() => {
          this.destroy();
        }, this.duration);
      },
      handleMouseenter(){
        clearTimeout(this.timmer)
        this.timmer = null
      },
      handleMouseout(){
        this.init()
      },
      destroy(){
        this.$el.remove();
        clearTimeout(this.timmer)
        this.$destroy();
      }
    }
  }
</script>

<style>
</style>
