<template>
  <div class="iconfont">
    <div class="icon" v-for="(icon, index) in iconfontList" :key="index">
      <span :class="icon"></span>
      <p>{{icon}}</p>
    </div>
  </div>
</template>

<script>
  import iconfontList from '../../../iconfont.js'
  export default{
    data(){
      return {
        iconfontList
      }
    }
  }
</script>

<style lang="scss">
  .iconfont {
    overflow: hidden;
    .icon {
      float: left;
      margin-right: 20px;
      height: 120px;
      width: 120px;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid #eee;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
      span {
        font-size: 30px;
        color: #888;
      }
      p {
        font-size: 12px;
      }
    }
  }
</style>
