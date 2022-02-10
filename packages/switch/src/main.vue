<template>
  <div 
    @click="change" 
    @keyup.space="change" 
    tabindex="0" 
    :class="['sh-switch', {'sh-switch__active': activeValue === bindValue, 'sh-switch__disabled': switchDisabled}]"
  >
    <span class="inactive-text" v-if="inactiveText">{{inactiveText}}</span>
    <div :style="computedStyle" class="sh-switch__inner">
      <i class="sh-icon-circle-fill"></i>
    </div>
    <span class="active-text" v-if="activeText">{{activeText}}</span>
  </div>
</template>

<script>
  import '../../stylesheet/switch.scss';
  export default {
    name: 'ShSwitch',
    model: {
      prop: 'bindValue',
      event: 'change'
    },
    inject: {
      shForm: { 
        default: ''
      }
    },
    props: {
      bindValue: { type: [String, Boolean, Number], required: true },
      activeValue: { type: [String, Boolean, Number], default: true },
      inactiveValue: { type: [String, Boolean, Number], default: false },
      activeColor: { type: String, default: '' },
      inactiveColor: { type: String, default: ''  },
      activeText: { type: String, default: '' },
      inactiveText: { type: String, default: ''  },
      disabled: { type: Boolean, default: false }
    },
    methods: {
      change(){
        if(this.switchDisabled) return false;
        this.$emit('change', this.bindValue === this.activeValue?this.inactiveValue:this.activeValue)
      }
    },
    computed: {
      switchDisabled(){
        return this.disabled || (this.shForm || {}).disabled;
      },
      computedStyle(){
        let styleTxt = ''
        if(this.activeColor) {
          if(this.activeValue === this.bindValue) {
            styleTxt += `background: ${this.activeColor};`
          }
        }
        if(this.inactiveColor) {
          if(this.inactiveValue === this.bindValue) {
            styleTxt += `background: ${this.inactiveColor};`
          }
        }
        return styleTxt
      }
    }
  }
</script>