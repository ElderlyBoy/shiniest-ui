<template>
  <div>
    <h3>基本用法</h3>
    <sh-switch v-model="value"></sh-switch>
    <h3>自定义值</h3>
    <sh-switch inactive-value="inactive" active-value="active" v-model="value1"></sh-switch>
    <h3>自定义颜色</h3>
    <sh-switch inactive-color="red" active-color="green" v-model="value2"></sh-switch>
    <h3>文字说明</h3>
    <sh-switch inactive-text="inactive" active-text="active" v-model="value3"></sh-switch>
    <h3>禁用</h3>
    <sh-switch v-model="value4" disabled></sh-switch>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: false,
        value1: 'inactive',
        value2: false,
        value3: false,
        value4: true
      }
    }
  }
</script>

<style>
</style>
