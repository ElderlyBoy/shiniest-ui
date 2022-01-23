<template>
  <div class="checkbox-box">
    <h3>基本用法</h3>
    <sh-checkbox v-model="value" label="选项1"></sh-checkbox>
    <sh-checkbox checked v-model="value2" label="选项2"></sh-checkbox>
    <h3>禁用状态</h3>
    <sh-checkbox disabled v-model="value" label="选项1"></sh-checkbox>
    <sh-checkbox disabled checked v-model="value2" label="选项2"></sh-checkbox>
    <h3>复选框组</h3>
    <sh-checkbox-group v-model="group">
      <sh-checkbox v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-checkbox>
    </sh-checkbox-group>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: false,
        value2: false,
        group: [1]
      }
    }
  }
</script>

<style>
</style>
