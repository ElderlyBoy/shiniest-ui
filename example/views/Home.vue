<template>
  <div class="home" style="padding: 100px;">
    <sh-button type="">Hello World</sh-button>
    <sh-button type="primary">Hello World</sh-button>
    <sh-button type="success">Hello World</sh-button>
    <sh-button type="warning">Hello World</sh-button>
    <sh-button type="danger">Hello World</sh-button>
    <sh-button type="info">Hello World</sh-button>
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
