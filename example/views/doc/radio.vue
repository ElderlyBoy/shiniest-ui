<template>
  <div class="radio-box">
    <h3>基本用法</h3>
    <sh-radio checked @change="change" v-model="radio" value="hello">hello</sh-radio>
    <sh-radio v-model="radio" value="world">world</sh-radio>
    <h3>禁用状态</h3>
    <sh-radio disabled @change="change" v-model="radio" value="hello">hello</sh-radio>
    <sh-radio disabled v-model="radio" value="world">world</sh-radio>
    <h3>单选框组</h3>
    <sh-radio-group disabled @change="change" v-model="group">
      <sh-radio v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-radio>
    </sh-radio-group>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        radio: '',
        group: ''
      }
    },
    methods: {
      change(val){
        // console.log(val)
      }
    }
  }
</script>

<style>
</style>
