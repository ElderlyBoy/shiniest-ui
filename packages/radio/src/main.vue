<template>
  <label @keyup.space="e => e.target.querySelector('input').click()" tabindex="0" :class="['sh-radio', {'sh-radio__disabled': radioDisabled}]">
    <input :disabled="radioDisabled" @change="$emit('change', value)" :checked="shRadioGroup?shRadioGroup.bindValue === value:bindValue === value" type="radio" />
    <span class="sh-radio__inner">
      <i class="sh-icon-circle-fill"></i>
    </span>
    <span class="sh-radio__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
  import '../../stylesheet/radio.scss';
  export default {
    name: 'ShRadio',
    model: {
      prop: 'bindValue',
      event: 'change'
    },
    inject: {
      shRadioGroup: {
        default: ''
      },
      shForm: {
        default: ''
      }
    },
    props: {
      label: { type: [String, Number] },
      bindValue: { type: [String, Boolean, Number] },
      value: { type: [String, Number, Boolean], required: true },
      disabled: { type: Boolean, default: false },
      checked: { type: Boolean, default: false }
    },
    computed:{
      radioDisabled(){
        return this.disabled || (this.shRadioGroup || {}).disabled || (this.shForm || {}).disabled;
      }
    },
    created() {
      if(this.checked) {
        this.$emit('change', this.value)
      }
      this.$on('change', () => {
        if(this.shRadioGroup){
          this.shRadioGroup.$emit('change', this.value)
        }
      })
    }
  }
</script>