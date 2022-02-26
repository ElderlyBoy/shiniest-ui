const desc = {
   //是否单独书写动态示例
   independent: false,
   example: [{
      title: '代码示例',
      code: `
<template>
   <sh-input></sh-input>
</template>`
   }],
   props: [{
      title: 'Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'bindValue',
         desc: 'v-model绑定值',
         type: 'String, Number',
         required: true,
         default: '',
         options: []
      }, {
         name: 'placeholder',
         desc: '未输入时显示的占位内容',
         type: 'String',
         required: false,
         default: '请输入',
         options: []
      }, {
         name: 'size',
         desc: '组件尺寸',
         type: 'String',
         required: false,
         default: 'small',
         options: ['mini', 'small', 'medium', 'large']
      }, {
         name: 'clearable',
         desc: '是否提供清除功能',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'showWordLimit',
         desc: '是否显示字数',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'type',
         desc: '类型',
         type: 'String',
         required: false,
         default: 'text',
         options: ['textarea', 'text', 'number', 'tel']
      }, {
         name: 'maxlength',
         desc: '最大输入长度',
         type: 'Number, String',
         required: false,
         default: 500,
         options: []
      }, {
         name: 'rows',
         desc: 'type=textarea时的rows属性（仅在 type == textarea 时生效）',
         type: 'Number, String',
         required: false,
         default: 0,
         options: []
      }, {
         name: 'autoResize',
         desc: '自动高度（仅在 type == textarea 时生效）',
         type: 'Number, Object',
         required: false,
         default: 0,
         options: []
      }]
   }],
   events: [{
      title: 'Events',
      /* name desc params note ↓ */
      list: [{
         name: 'input',
         desc: '输入事件',
         params: '更新后的值',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Slots',
      /* name desc ↓ */
      list: [{
         name: 'prepend',
         desc: '输入框左边插槽（仅在 type != textarea 时生效）'
      }, {
         name: 'append',
         desc: '输入框右边插槽（仅在 type != textarea 时生效）'
      }]
   }]
};
export default desc;
