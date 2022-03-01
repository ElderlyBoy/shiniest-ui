<template>
   <inde-comp name="CheckBox">
      <template #options>
         <sh-radio-group v-model="disabled">
            <span class="option-label">disabled: </span>
            <sh-radio :value="true">true</sh-radio>
            <sh-radio :value="false">false</sh-radio>
         </sh-radio-group>
      </template>
      <sh-radio-group :disabled="disabled" v-model="group">
      <sh-radio v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-radio>
      </sh-radio-group>
   </inde-comp>
</template>

<script>
   import IndeComp from '../indeComp.vue';
   export default {
      components: {
         IndeComp
      },
      data() {
         return {
            value: false,
            group: '',
            canCheckAll: [],
            disabled: false
         }
      },
      computed: {
         indeterminate() {
            return this.group.length > 0 && this.group.length < 5
         }
      },
      methods: {
         checkAllChange(val) {
            this.group = val.length || this.indeterminate ? [1, 2, 3, 4, 5] : [];
         },
         checkGroupChange(val) {
            this.canCheckAll = val.length === 5?['all']:[]
         }
      }
   }
</script>
