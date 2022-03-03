<template>
   <div class="doc-index">
      <div class="left-box">
         <sh-scrollbar>
            <div class="area">
               <nav>
                  <router-link to="/doc/install">安装</router-link>
                  <router-link to="/doc/iconfont">Iconfont</router-link>
               </nav>
               <nav v-for="item in doclist" :key="item.group">
                  <p>{{item.group}}</p>
                  <router-link
                     v-for="unit in item.list"
                     :key="unit.name"
                     :to="{name: 'DocDetail', params: {name: unit.name}}"
                  >{{unit.upperName}} {{unit.chineseName}}</router-link>
               </nav>
            </div>
         </sh-scrollbar>
      </div>
      <div class="right-box">
         <router-view class="router-view"></router-view>
      </div>
   </div>
</template>

<script>
   import doclist from './doclist.js';
   export default {
      data(){
         return {
            doclist
         }
      }
   }
</script>

<style lang="scss">
   .doc-index {
      display: flex;
      .left-box {
         padding: 10px;
         width: 200px;
         .area {
            width: 200px;
            height: calc(100vh - 81px);
         }
         p {
            color: #999;
            font-size: 12px;
            margin: 10px 0;
         }
         a {
            display: block;
            padding: 10px;
            transition: background .2s, color .2s;
            text-decoration: none;
            color: #333;
            font-size: 14px;
            &.router-link-active {
               color: #2CAD66;
               background: mix(#2cad66, #ffffff, 15%);
            }
         }
      }
      .right-box {
         padding: 10px;
         width: calc(100% - 220px);
         box-sizing: border-box;
      }
   }
</style>
