<template>
  <div id="app">
    <header>
      <router-link to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  html,body,h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  body {
    max-width: 1000px;
    margin: auto;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  header {
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    a {
      margin-right: 20px;
    }
  }
</style>