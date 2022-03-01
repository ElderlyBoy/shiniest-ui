const desc = {
   example: [{
      title: 'Button 代码示例',
      code: `
<template>
   <sh-button
      :type="type"
      :plain="plain"
      :size="size"
      :disabled="disabled"
      @click="handlerClick">
   </sh-button>
</template>`
   }],
   props: [{
      title: 'Button Attributes',
      list: [{
         name: 'type',
         desc: '按钮类型',
         type: 'String',
         required: false,
         default: 'default',
         options: ['primary', 'success', 'warning', 'info', 'danger']
      }, {
         name: 'size',
         desc: '按钮尺寸',
         type: 'String',
         required: false,
         default: 'small',
         options: ['mini', 'small', 'medium', 'large']
      }, {
         name: 'plain',
         desc: '是否为朴素按钮',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'disabled',
         desc: '禁用',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'round',
         desc: '是否为圆角',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }]
   }],
   events: [{
      title: 'Button Events',
      list: [{
         name: 'click',
         desc: '点击事件',
         params: 'event',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Button Slots',
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
