const desc = {
   //是否单独书写动态示例
   independent: false,
   example: [{
      title: 'Switch 代码示例',
      code: `
<template>
   <sh-switch v-model="value"></sh-switch>
</template>`
   }],
   props: [{
      title: 'Switch Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'bindValue',
         desc: '绑定值',
         type: 'String, Boolean, Number',
         required: true,
         default: '',
         options: []
      }, {
         name: 'activeValue',
         desc: '激活时的自定义value值',
         type: 'String, Boolean, Number',
         required: false,
         default: true,
         options: []
      }, {
         name: 'inactiveValue',
         desc: '未激活时的自定义value值',
         type: 'String, Boolean, Number',
         required: false,
         default: false,
         options: []
      }, {
         name: 'activeColor',
         desc: '激活时的自定义颜色值（hash/rgb/rgba）',
         type: 'String',
         required: false,
         default: '',
         options: []
      }, {
         name: 'inactiveColor',
         desc: '',
         type: 'String',
         required: false,
         default: '未激活时的自定义颜色值（hash/rgb/rgba）',
         options: []
      }, {
         name: 'activeText',
         desc: '激活时显示的文本',
         type: 'String',
         required: false,
         default: '',
         options: []
      }, {
         name: 'inactiveText',
         desc: '未激活时显示的文本',
         type: 'String',
         required: false,
         default: '',
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
      title: 'Switch Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: 'switch状态切换时的回调函数',
         params: 'value',
         note: '--'
      }]
   }],
   slots: [{
      title: 'Switch Slots',
      /* name desc ↓ */
      list: []
   }]
};
export default desc;
