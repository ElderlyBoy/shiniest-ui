const desc = {
   //是否单独书写动态示例
   independent: false,
   example: [{
      title: '代码示例',
      code: `
<template>
   <sh-link>链接</sh-link>
</template>
`
   }],
   props: [{
      title: 'Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'type',
         desc: '链接类型',
         type: 'String',
         required: false,
         default: 'default',
         options: ['primary', 'success', 'warning', 'info', 'danger']
      },{
         name: 'underline',
         desc: '是否需要下划线',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      },{
         name: 'disabled',
         desc: '是否禁用',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      },{
         name: 'href',
         desc: null,
         type: 'String',
         required: false,
         default: '',
         options: []
      },{
         name: 'icon',
         desc: null,
         type: 'String',
         required: false,
         default: '',
         options: []
      }]
   }],
   events: [{
      title: 'Events',
      /* name desc params note ↓ */
      list: [],
   }],
   slots: [{
      title: 'Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
