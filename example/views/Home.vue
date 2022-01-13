<template>
  <div class="home" style="padding: 100px;">
    <sh-button size="large" @click="click">Hello World</sh-button>
    <i class="sh-icon-error">123</i>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    click(){
      console.log(event)
    }
  }
}
</script>
