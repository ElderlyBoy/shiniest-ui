<template>
  <label tabindex="0" @keydown.space="checkboxValue = !checkboxValue" :class="['sh-checkbox', {'sh-checkbox__disabled': checkboxDisabled}]">
    <input v-model="checkboxValue" :disabled="checkboxDisabled" type="checkbox">
    <span role="checkbox" class="sh-checkbox__inner">
      <i class="sh-icon-success"></i>
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
      prop: 'isCheck'
    },
    inject: {
      shForm: {
        default: () => ({})
      },
      shCheckboxGroup: {
        default: () => ({})
      }
    },
    data(){
      return {
        checkboxValue: false
      }
    },
    props: {
      label: { type: String, default: '' },
      isCheck: { type: Boolean },
      disabled: { type: Boolean, default: false },
      checked: { type: Boolean, default: null },
      value: { type: [String, Number, Boolean], default: null }
    },
    computed: {
      checkboxDisabled(){
        return this.disabled || this.shCheckboxGroup.disabled || this.shForm.disabled
      }
    },
    created() {
      this.$on('change', val => {
        if(this.shCheckboxGroup.bindValue){
          if(val) {
            this.shCheckboxGroup.$emit('change', [...this.shCheckboxGroup.bindValue, this.value])
          } else {
            this.shCheckboxGroup.$emit('change', this.shCheckboxGroup.bindValue.filter(item => item !== this.value))
          }
        }
      })
      if(typeof this.checked === 'boolean') {
        this.checkboxValue = this.checked
      }
      if(this.shCheckboxGroup.bindValue && this.shCheckboxGroup.bindValue.indexOf(this.value) !== -1) {
        this.checkboxValue = true
      }
    },
    watch: {
      checkboxValue(val) {
        this.$emit('change', val)
      }
    }
  }
</script>