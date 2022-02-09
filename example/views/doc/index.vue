<template>
  <div class="doc-box">
    <sh-scrollbar :default-show-thumb="false">
      <nav>
        <h3>导航</h3>
        <router-link v-for="(item,index) in navList" :to="{name: item.name}" :key="index">{{item.name}} {{item.label}}</router-link>
      </nav>
    </sh-scrollbar>
    <sh-scrollbar ref="scrollbar" class="aside" :default-show-thumb="false">
      <aside>
        <router-view></router-view>
      </aside>
    </sh-scrollbar>
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
      this.$router.afterEach(() => {
        this.$nextTick(() => {
          this.$refs.scrollbar.getNewStyleY(false);
          this.$refs.scrollbar.getNewStyleX(false);
        })
      })
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
    .aside {
      width: calc(100% - 200px);
      height: calc(100vh - 61px);
      aside {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
      }
    }
  }
</style>
