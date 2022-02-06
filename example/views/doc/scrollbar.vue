<template>
  <div class="scrollbar-box">
    <h3>基本用法</h3>
    <ul v-scrollbar style="height: 600px; overflow: auto; background: #eee; padding: 10px;">
      <li v-for="i in 99" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
