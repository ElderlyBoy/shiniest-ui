<template>
   <inde-comp name="CheckBox">
      <div slot="options" class="notify-box">
         <p>基础用法</p>
         <sh-button @click="baseNotify">提示信息</sh-button>
         <p>带有倾向性</p>
         <sh-button @click="$notify.success('成功')">成功</sh-button>
         <sh-button @click="$notify.warning('警告')">警告</sh-button>
         <sh-button @click="$notify.info('信息')">信息</sh-button>
         <sh-button @click="$notify.error('错误')">错误</sh-button>
         <p>带有倾向性并具备提示信息</p>
         <sh-button @click="$notify({type: 'success', message: '这是一段很长的提示文字。', title: '成功'})">成功</sh-button>
         <sh-button @click="$notify({type: 'warning', message: '这是一段很长的提示文字。', title: '警告'})">警告</sh-button>
         <sh-button @click="$notify({type: 'info', message: '这是一段很长的提示文字。', title: '信息'})">信息</sh-button>
         <sh-button @click="$notify({type: 'error', message: '这是一段很长的提示文字。', title: '错误'})">错误</sh-button>
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
         baseNotify() {
            this.$notify({
               title: '提示信息',
               message: '这是一段很长的文字这是一段很长的文字这是一段很长的文字这是一段很长的文字。'
            })
         }
      }
   }
</script>
<style lang="scss">
   .notify-box > p {
      padding: 10px 0;
      font-size: 14px;
      color: #555;
   }
</style>
