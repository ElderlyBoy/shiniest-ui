<template>
  <div class="doc-box">
    <nav>
      <h3>导航</h3>
      <router-link v-for="(item,index) in navList" :to="{name: item.name}" :key="index">{{item.name}} {{item.label}}</router-link>
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

<style lang="scss">
  .doc-box {
    display: flex;
    h1,h2,h3,h4,h5,h6 {
      color: #2CAD66;
      padding: 10px 0;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    nav {
      padding: 10px;
      width: 200px;
      border-right: 1px solid #eee;
      box-sizing: border-box;
      height: calc(100vh - 61px);
      overflow-y: auto;
      a {
        display: block;
        padding: 10px;
        border-bottom: 1px solid #eee;
        color: #1AB7BC;
        text-decoration: none;
        font-size: 14px;
        &:hover {
          color: #2CAD66;
        }
        &.router-link-exact-active {
          color: #2CAD66;
          border-right: 4px solid #2CAD66;
        }
      }
    }
    aside {
      box-sizing: border-box;
      padding: 10px;
      width: calc(100% - 200px);
    }
  }
</style>
