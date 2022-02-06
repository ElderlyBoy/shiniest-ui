<template>
  <div 
    @click="change" 
    @keyup.space="change" 
    tabindex="0" 
    :class="['sh-switch', {'sh-switch__active': activeValue === bindValue}]"
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
    props: {
      bindValue: { type: [String, Boolean, Number], required: true },
      activeValue: { type: [String, Boolean, Number], default: true },
      inactiveValue: { type: [String, Boolean, Number], default: false },
      activeColor: { type: String, default: '' },
      inactiveColor: { type: String, default: ''  },
      activeText: { type: String, default: '' },
      inactiveText: { type: String, default: ''  }
    },
    methods: {
      change(){
        this.$emit('change', this.bindValue === this.activeValue?this.inactiveValue:this.activeValue)
      }
    },
    computed: {
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