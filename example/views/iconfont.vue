<template>
  <div class="iconfont">
    <div v-for="(icon, index) in iconfontList" :key="index">
      <span :class="icon"></span>
      <p>{{icon}}</p>
    </div>
  </div>
</template>

<script>
  import iconfontList from '../../iconfont.js'
  export default{
    data(){
      return {
        iconfontList
      }
    }
  }
</script>

<style>
</style>
