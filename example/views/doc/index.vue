<template>
  <div class="doc-box">
    <nav>
      <h2>导航</h2>
      <router-link v-for="(item,index) in navList" :to="{name: item.name}" :key="index">
        <sh-button size="mini">{{item.label}}</sh-button>
      </router-link>
    </nav>
    <aside>
      <router-view></router-view>
    </aside>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        navList: []
      }
    },
    created() {
      this.navList = this.$router.options.routes[1].children.map(route => ({
        label: route.meta.title,
        name: route.name
      }))
    }
  }
</script>

<style>
</style>
