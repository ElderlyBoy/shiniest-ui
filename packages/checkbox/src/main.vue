<template>
  <label @keyup.space="e => e.target.click()" tabindex="0" :class="['sh-checkbox', {'sh-checkbox__disabled': checkboxDisabled, 'sh-checkbox__indeterminate': indeterminate}]">
    <input :disabled="checkboxDisabled" @change="e => change(e.target.checked)" :checked="isCheckboxChecked" type="checkbox">
    <span role="checkbox" class="sh-checkbox__inner">
      <i v-if="indeterminate" class="sh-icon-reduce"></i>
      <i v-else class="sh-icon-success"></i>
    </span>
    <span>
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
  import '../../stylesheet/checkbox.scss';
  export default {
    name: 'ShCheckbox',
    model: {
      event: 'change',
      prop: 'isChecked'
    },
    inject: {
      shForm: {
        default: ''
      },
      shCheckboxGroup: {
        default: ''
      }
    },
    props: {
      label: { type: String, default: '' },
      isChecked: { type: Boolean },
      disabled: { type: Boolean, default: false },
      checked: { type: Boolean, default: null },
      value: { type: [String, Number, Boolean], default: null },
      indeterminate: { type: Boolean, default: null }
    },
    computed: {
      checkboxDisabled(){
        return this.disabled || (this.shCheckboxGroup || {}).disabled || this.shForm.disabled
      },
      isCheckboxChecked(){
        return this.shCheckboxGroup?this.shCheckboxGroup.bindValue.includes(this.value):this.isChecked
      }
    },
    created() {
      if(this.checked !== null) this.$emit('change', this.checked)
    },
    methods: {
      change(val){
        this.$emit('change', val)
        if(this.shCheckboxGroup){
          this.shCheckboxGroup.checkboxChange(this.value, val)
        }
      }
    }
  }
</script>