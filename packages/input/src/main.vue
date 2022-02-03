<template>
  <div :class="['sh-input', (type==='textarea'?'':'sh-input__'+inputSize)]">
    <div v-if="$slots.prepend && type !== 'textarea'" class="sh-input__prepend">
      <slot name="prepend"></slot>
    </div>
    <div :class="['sh-input__inner', {'has-append': $slots.append && type !== 'textarea'}]">
      <input 
        class="sh-input__body"
        v-if="type !== 'textarea'"
        :value="bindValue"
        @input="val => $emit('input', val.target.value)"
        :placeholder="placeholder"
        :type="type"
        :maxlength="maxlength || ''"
      >
      <textarea 
        v-else
        class="sh-input__body" 
        :rows="autoResize?autoResizeRows:rows"
        :maxlength="maxlength || ''"
        :value="bindValue"
        @input="val => $emit('input', val.target.value)"
        :placeholder="placeholder"
        :type="type"
      ></textarea>
      <i @click="$emit('input', '')" v-show="clearable && bindValue.length" class="sh-icon-error"></i>
      <span 
        v-if="maxlength"
        :class="['sh-input__counter', {'sh-input__counter-full': bindValue.length >= maxlength}]"
      >{{bindValue.length}}/{{maxlength}}</span>
    </div>
    <div v-if="$slots.append && type !== 'textarea'" class="sh-input__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
  import '../../stylesheet/input.scss';
  import { componentSizesList, getType } from '../../../src/utils.js';
  export default {
    name: 'ShInput',
    model: {
      prop: 'bindValue',
      event: 'input'
    },
    inject: {
      shForm: { 
        default: ''
      }
    },
    data() {
      return {
        autoResizeRows: 0
      }
    },
    props: {
      bindValue: { type: [String, Number], required: true },
      placeholder: { type: String, default: '请输入' },
      size: { type: String, default: null, validator: val => componentSizesList.includes(val) },
      clearable: { type: Boolean, default: false },
      type: { type: String, default: 'text' },
      maxlength: { type: [Number, String], default: 0 },
      rows: { type: [Number, String], default: 0 },
      autoResize: {type: [Number, Object], default: null}
    },
    mounted() {
      if(this.autoResize) {
        let autoResizeMax = 0;
        let autoResizeMin = 0;
        if(getType(this.autoResize) === 'Object') {
          autoResizeMax = this.autoResize.max;
          autoResizeMin = this.autoResize.min;
          this.autoResizeRows = autoResizeMin;
        } else {
          autoResizeMax = this.autoResize;
        }
        const autoHeight = (target, discount) => {
          if(target.scrollHeight > target.clientHeight && this.autoResizeRows <= autoResizeMax && !discount) {
            this.autoResizeRows ++;
            this.$nextTick(() => {
              autoHeight(target)
            })
          } else if(autoResizeMin && this.autoResizeRows > autoResizeMin) {
            this.autoResizeRows --;
          } else {
            return
          }
        }
        this.$on('input', () => {
          autoHeight(event.target)
        })
      }
    },
    computed: {
      inputSize(){
        return this.size || (this.shForm || {}).size || this.$SHINIEST.size
      }
    }
  }
</script>