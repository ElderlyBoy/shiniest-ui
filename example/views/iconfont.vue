<template>
  <div class="iconfont">
    <div class="icon" v-for="(icon, index) in iconfontList" :key="index">
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

<style lang="scss">
  .iconfont {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    .icon {
      height: 80px;
      width: 100px;
      text-align: center;
      border: 1px solid #eee;
      padding: 20px 10px;
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
