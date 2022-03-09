import { componentSizesList } from '../../src/util/utils.js';
const desc = {
   //是否单独书写动态示例
   independent: true,
   example: [{
      title: 'Select 代码示例',
      code: `
<template>
   <sh-select v-model="value">
      <sh-option label="label_text" value="value"></sh-option>
   </sh-select>
</template>
`
   }],
   props: [{
      title: 'Select Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'size',
         desc: '尺寸',
         type: 'String',
         required: false,
         default: 'small',
         options: componentSizesList
      }, {
         name: 'disabled',
         desc: '禁用',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'placeholder',
         desc: '描述文字',
         type: 'String',
         required: false,
         default: '请选择',
         options: []
      }, {
         name: 'bindValue',
         desc: '绑定值',
         type: 'String, Boolean, Number',
         required: true,
         default: null,
         options: []
      }, {
         name: 'filterable',
         desc: '可搜索',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'clearable',
         desc: '可清空',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }]
   }, {
      title: 'Option Attributes',
      list: [{
         name: 'label',
         desc: '选项名称',
         type: 'String, Number',
         required: false,
         default: '',
         options: []
      }, {
         name: 'value',
         desc: '选项值',
         type: 'String, Number, Boolean',
         required: true,
         default: null,
         options: []
      }, {
         name: 'disabled',
         desc: '禁用',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }]
   }],
   events: [{
      title: 'Select Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '绑定值发生变化',
         params: 'value',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Select Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }, {
      title: 'Option Slots',
      list: [{
         name: '--',
         desc: '自定义label插槽，会覆盖 :label 的值。'
      }]
   }]
};
export default desc;
