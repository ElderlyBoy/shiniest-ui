<template>
   <inde-comp name="Select">
      <template #options>
         <sh-radio-group v-model="size">
            <span class="option-label">size: </span>
            <sh-radio v-for="item in componentSizesList" :key="item" :label="item" :value="item"></sh-radio>
         </sh-radio-group>
         <sh-radio-group v-model="disabled">
            <span class="option-label">disabled: </span>
            <sh-radio label="true" :value="true"></sh-radio>
            <sh-radio label="false" :value="false"></sh-radio>
         </sh-radio-group>
         <sh-radio-group v-model="filterable">
            <span class="option-label">filterable: </span>
            <sh-radio label="true" :value="true"></sh-radio>
            <sh-radio label="false" :value="false"></sh-radio>
         </sh-radio-group>
         <sh-radio-group v-model="clearable">
            <span class="option-label">clearable: </span>
            <sh-radio label="true" :value="true"></sh-radio>
            <sh-radio label="false" :value="false"></sh-radio>
         </sh-radio-group>
      </template>
      <sh-select
         :filterable="filterable"
         :disabled="disabled"
         :clearable="clearable"
         :size="size"
         v-model="value"
         style="width: 200px;"
      >
         <sh-option :disabled="item === 1" v-for="item in 100" :label="`选项${item}`" :value="item" :key="item"></sh-option>
      </sh-select>
   </inde-comp>
</template>

<script>
   import indeComp from '../indeComp.vue';
   import { componentSizesList } from '../../../../src/util/utils.js';
   export default {
      components: { indeComp },
      data(){
         return {
            value: '',
            size: 'small',
            componentSizesList,
            disabled: false,
            filterable: false,
            clearable: false
         }
      }
   }
</script>

<style>
</style>
