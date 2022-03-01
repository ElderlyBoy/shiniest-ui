<template>
   <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <center>
         <a @click="$router.go(-2)">返回上一页</a>
         <router-link to="/doc">返回文档页</router-link>
         <router-link to="/">返回首页</router-link>
      </center>
   </div>
</template>

<script>
</script>

<style>
</style>
