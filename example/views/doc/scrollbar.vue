<template>
  <div class="scrollbar-box">
    <h3>基本用法</h3>
    <sh-scrollbar>
      <ul class="scrollbar-y" @click="click">
        <li v-for="i in 99" :key="i">{{i}}</li>
      </ul>
    </sh-scrollbar>
    <sh-scrollbar>
      <div class="scrollbar-x">{{'hello world '.repeat(10)}}</div>
    </sh-scrollbar>
    <sh-scrollbar>
      <div class="scrollbar-x-y">
        <p v-for="i in 10" :key="i">{{'hello world '.repeat(10)}}</p>
      </div>
    </sh-scrollbar>
    <sh-scrollbar light>
      <div class="scrollbar-x-y scrollbar-dark">
        <p v-for="i in 10" :key="i">{{'hello world '.repeat(10)}}</p>
      </div>
    </sh-scrollbar>
  </div>
</template>

<script>
  export default {
    methods: {
      click(){
        document.querySelector('ul').style.height = '200px'
      }
    }
  }
</script>

<style lang="scss">
  .scrollbar-box {
    ul.scrollbar-y {
      box-sizing: border-box;
      background: #efefef;
      height: 500px;
      width: 400px;
      margin: 0;
      margin-top: 10px;
    }
    div.scrollbar-x {
      margin-top: 10px;
      box-sizing: border-box;
      width: 400px;
      white-space: nowrap;
      padding: 10px;
      background: #efefef;
    }
    div.scrollbar-x-y {
      height: 200px;
      line-height: 40px;
      margin-top: 10px;
      box-sizing: border-box;
      width: 400px;
      white-space: nowrap;
      padding: 10px;
      background: #efefef;
    }
    div.scrollbar-dark {
      background: #333;
      color: #eee;
    }
  }
</style>
