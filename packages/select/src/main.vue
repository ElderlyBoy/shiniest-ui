<template>
   <div :class="['sh-select', `is-${selectSize}`, {'is-open': isOpen, 'is-disabled': disabledSelect}]">
      <sh-popover :disabled="disabledSelect" @change="change" trigger="click">
         <template #reference>
            <input
               class="sh-select__inner"
               type="text"
               :readonly="!filterable"
               :placeholder="placeholder"
               :value="label"
               @input="input($event.target.value)"
               :disabled="disabledSelect"
            >
            <i class="sh-icon-arrow-down"></i>
            <i v-if="clearable && bindValue" @click="clear" class="sh-icon-error"></i>
         </template>
         <sh-scrollbar>
            <ul class="sh-select-option">
               <slot>
                  <center class="no-data">暂无数据</center>
               </slot>
               <center class="no-data">无匹配项</center>
            </ul>
         </sh-scrollbar>
      </sh-popover>
   </div>
</template>

<script>
   import '../../stylesheet/select.scss';
   import { componentSizesList } from '../../../src/util/utils.js';
   import shScrollbar from '../../scrollbar/src/main.vue';
   import shPopover from '../../popover/src/main.vue';
   export default {
      components: { shScrollbar, shPopover },
      name: 'ShSelect',
      model: {
         prop: 'bindValue',
         event: 'change'
      },
      props: {
        size: { type: String, default: 'small', validator: val => componentSizesList.includes(val) },
        disabled: { type: Boolean, default: false },
        placeholder: { type: String, default: '请选择' },
        bindValue: { type: [String, Boolean, Number], default: null, required: true },
        filterable: { type: Boolean, default: false },
        clearable: { type: Boolean, default: false }
      },
      data() {
         return {
            isOpen: false,
            filterValue: '',
            label: ''
         }
      },
      provide(){
         return {
            shSelect: this
         }
      },
      inject: {
         shForm: {
            default: ''
         }
      },
      computed: {
         disabledSelect(){
            return this.disabled || (this.shForm || {}).disabled;
         },
         selectSize(){
            return this.size || this.shForm.size || this.$SHINIEST.size;
         }
      },
      methods: {
         change(val){
            this.isOpen = val;
            if(val) this.filterValue = '';
         },
         input(val){
            this.filterValue = val;
         },
         clear(){
            this.$emit('change', '');
            this.label = '';
         }
      }
   }
</script>
