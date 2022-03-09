<template>
   <li
      v-if="(shSelect.filterable && shSelect.filterValue)?label.toString().indexOf(shSelect.filterValue) !== -1:true"
      :class="['sh-option', {
         'is-active': shSelect.bindValue === value,
         'is-disabled': disabled
      }]"
      @click="click"
   >
      <slot>{{label}}</slot>
      <i v-show="shSelect.bindValue === value" class="sh-icon-success"></i>
   </li>
</template>

<script>
   import '../../stylesheet/option.scss';
   export default {
      name: 'ShOption',
      props: {
         label: { type: [String, Number], default: '' },
         value: { type: [String, Number, Boolean], default: null, required: true },
         disabled: { type: Boolean, default: false }
      },
      inject: ['shSelect'],
      methods: {
         click(){
            if(this.disabled) return;
            this.shSelect.$emit('change', this.value);
            this.shSelect.label = this.label;
            document.body.click();
         }
      },
      mounted() {
         if(this.value === this.shSelect.bindValue){
            this.shSelect.label = this.label;
         }
      }
   }
</script>
