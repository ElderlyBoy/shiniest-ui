const desc = {
   example: [{
      title: 'Basically useful',
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
      title: 'Example Attributes',
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
      }]
   }],
   events: [{
      title: 'Example Events',
      list: [{
         name: 'click',
         desc: '点击事件',
         params: 'event',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Example Slots',
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
