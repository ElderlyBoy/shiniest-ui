<template>
   <inde-comp name="CheckBox">
      <div slot="options" class="scrollbar-box">
         <sh-scrollbar>
            <ul class="scrollbar-y" @click="click">
               <li>单击可缩小一次</li>
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
   </inde-comp>
</template>

<script>
   import IndeComp from '../indeComp.vue';
   export default {
      components: {
         IndeComp
      },
      methods: {
         click() {
            document.querySelector('ul').style.height = '200px'
         }
      }
   }
</script>
<style lang="scss">
   .scrollbar-box {
      .sh-scrollbar {
         width: 400px;
         & + .sh-scrollbar{
            margin-top: 10px;
         }
      }
      ul.scrollbar-y {
         box-sizing: border-box;
         background: #fff;
         border-radius: 4px;
         height: 500px;
         width: 400px;
         margin: 0;
      }
      div.scrollbar-x {
         box-sizing: border-box;
         width: 400px;
         white-space: nowrap;
         padding: 10px;
         background: #fff;
         border-radius: 4px;
      }
      div.scrollbar-x-y {
         height: 200px;
         line-height: 40px;
         box-sizing: border-box;
         width: 400px;
         white-space: nowrap;
         padding: 10px;
         background: #fff;
         border-radius: 4px;
      }
      div.scrollbar-dark {
         background: #333;
         color: #eee;
      }
   }
</style>
