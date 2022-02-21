<template>
  <div>
    <h2>基本用法</h2>
    <sh-checkbox v-model="forceShow">forceShow</sh-checkbox>
    <sh-checkbox v-model="arrow">arrow</sh-checkbox>
    <sh-radio-group v-model="placement">
      <span>placement：</span>
      <sh-radio value="top">top</sh-radio>
      <sh-radio value="right">right</sh-radio>
      <sh-radio value="bottom">bottom</sh-radio>
      <sh-radio value="left">left</sh-radio>
    </sh-radio-group>
    <sh-radio-group v-model="trigger">
      <span>trigger：</span>
      <sh-radio value="hover">hover</sh-radio>
      <sh-radio value="click">click</sh-radio>
    </sh-radio-group>
    <sh-popover :arrow="arrow" :trigger="trigger" :forceShow="forceShow" :placement="placement" style="margin: auto; margin-top: 200px;">
      <sh-button slot="reference">Reference Element</sh-button>
      <p v-for="num in 4" :key="num">{{num.toString().repeat(10)}}</p>
    </sh-popover>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        placement: 'bottom',
        trigger: 'hover',
        forceShow: true,
        arrow: true
      }
    }
  }
</script> 