<template>
  <div class="input-box" style="width: 300px;">
    <h3>基本用法</h3>
    <sh-input v-model="value"></sh-input>
    <h3>可清空</h3>
    <sh-input clearable v-model="value"></sh-input>
    <h3>插槽</h3>
    <sh-input v-model="value">
      <template #prepend>
        <i class="sh-icon-search"></i>
      </template>
      <template #append>搜索</template>
    </sh-input>
    <h3>字数限制</h3>
    <sh-input clearable v-model="value" maxlength="30" show-world-limit></sh-input>
    <h3>文本域</h3>
    <sh-input :auto-resize="{max: 10, min: 5}" type="textarea" v-model="value" maxlength="300"></sh-input>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: ''
      }
    }
  }
</script>

<style>
</style>
