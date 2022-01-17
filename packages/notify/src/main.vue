<template>
  <div class="sh-notify" @mouseenter="mouseenter" @mouseleave="mouseleave">
    {{type}}{{message}}{{duration}}
  </div>
</template>

<script>
  import '../../stylesheet/notify.scss';
  export default {
    name: 'Notify',
    data(){
      return {
        type: 'success',
        title: '',
        timmer: null,
        message: '',
        duration: 3000,
      }
    },
    mounted() {
      this.createTimmer()
    },
    methods: {
      remove(){
        this.$el.remove();
        this.clearTimmer();
        this.$destroy();
      },
      createTimmer(){
        this.timmer = setTimeout(this.remove, this.duration);
      },
      clearTimmer(){
        clearTimeout(this.timmer);
      },
      mouseenter(){
        this.clearTimmer();
      },
      mouseleave(){
        this.createTimmer();
      },
    }
  }
</script>