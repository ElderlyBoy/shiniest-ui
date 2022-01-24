<template>
  <div class="checkbox-box">
    <h3>基本用法</h3>
    <sh-checkbox v-model="value" label="选项1"></sh-checkbox>
    <sh-checkbox checked v-model="value2" label="选项2"></sh-checkbox>
    <h3>禁用状态</h3>
    <sh-checkbox disabled v-model="value" label="选项1"></sh-checkbox>
    <sh-checkbox disabled checked v-model="value2" label="选项2"></sh-checkbox>
    <h3>复选框组</h3>
    <sh-checkbox-group v-model="group">
      <sh-checkbox v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-checkbox>
    </sh-checkbox-group>
    <h3>全选</h3>
    <sh-checkbox @change="checkAllChange" :indeterminate="indeterminate" v-model="canCheckAll">全选</sh-checkbox>
    <sh-checkbox-group @change="checkGroup2Change" v-model="group2">
      <sh-checkbox v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-checkbox>
    </sh-checkbox-group>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: true,
        value2: false,
        group: [1],
        group2: [1, 3],
        canCheckAll: false
      }
    },
    computed: {
      indeterminate(){
        return this.group2.length > 0 && this.group2.length < 5
      }
    },
    methods: {
      checkAllChange(val) {
        this.group2 = val||this.indeterminate?[1,2,3,4,5]:[];
      },
      checkGroup2Change(val) {
        console.log(val)
        this.canCheckAll = val.length === 0
      }
    }
  }
</script>

<style>
</style>
