<template>
  <div :class="['sh-notify', {'sh-notify__before-out': readyToDestroy}]" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <p class="sh-notify__title">
      <i v-if="type === 'success'" class="sh-icon-success-fill"></i>
      <i v-if="type === 'warning'" class="sh-icon-warning-fill"></i>
      <i v-if="type === 'info'" class="sh-icon-info-fill"></i>
      <i v-if="type === 'error'" class="sh-icon-error-fill"></i>
      <span v-if="title">{{title}}</span>
      <span v-if="!title" class="sh-notify__content">{{message}}</span>
      <i @click="remove" class="sh-icon-error"></i>
    </p>
    <p v-if="title" class="sh-notify__content">{{message}}</p>
  </div>
</template>

<script>
  import '../../stylesheet/notify.scss';
  export default {
    name: 'Notify',
    data(){
      return {
        type: '',
        title: '',
        timmer: null,
        message: '',
        duration: 3000,
        readyToDestroy: false
      }
    },
    mounted() {
      this.createTimmer()
    },
    methods: {
      remove(){
        this.readyToDestroy = true;
        setTimeout(() => {
          this.$el.remove();
          this.clearTimmer();
          this.$destroy();
        }, 300)
      },
      createTimmer(){
        if(this.duration) this.timmer = setTimeout(this.remove, this.duration);
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