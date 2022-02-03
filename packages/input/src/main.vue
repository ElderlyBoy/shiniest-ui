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
        autoResizeRows: 2
      }
    },
    created() {
      this.autoResizeMax = 0;
      this.autoResizeMin = 0;
      if(getType(this.autoResize) === 'Object') {
        this.autoResizeMax = this.autoResize.max;
        this.autoResizeMin = this.autoResize.min;
        this.autoResizeRows = this.autoResizeMin;
      } else {
        this.autoResizeMax = this.autoResize;
        this.autoResizeMin = 2;
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
    watch: {
      bindValue(val, oldVal){
        if(this.autoResize) {
          const autoHeight = (target, isAdd) => {
            if(target.scrollHeight > target.clientHeight && this.autoResizeRows < this.autoResizeMax && isAdd) {
              this.autoResizeRows ++;
              this.$nextTick(() => {
                autoHeight(target, isAdd)
              })
            } else if(this.autoResizeRows > this.autoResizeMin && !isAdd) {
              this.autoResizeRows --;
              console.log('this.autoResizeRows --', this.autoResizeRows)
              this.$nextTick(() => {
                if(target.scrollHeight > target.clientHeight) isAdd = !isAdd
                autoHeight(target, isAdd)
                target.scrollTop = 999999
              })
            }
          }
          autoHeight(event.target, val.length > oldVal.length)
        }
      }
    },
    computed: {
      inputSize(){
        return this.size || (this.shForm || {}).size || this.$SHINIEST.size
      }
    }
  }
</script>