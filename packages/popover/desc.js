const desc = {
   //是否单独书写动态示例
   independent: false,
   example: [{
      title: 'Popover 代码示例',
      code: `
<template>
   <sh-popover placement="top">
      <sh-button slot="reference">Reference Element</sh-button>
      <p>here is a long text</p>
   </sh-popover>
</template>`
   }],
   props: [{
      title: 'Popover Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'trigger',
         desc: '触发方式',
         type: 'String',
         required: false,
         default: 'hover',
         options: ['hover', 'click']
      }, {
         name: 'timeToClose',
         desc: '触发(打开、关闭)延时',
         type: 'Number',
         required: false,
         default: 200,
         options: [true, false]
      }, {
         name: 'arrow',
         desc: '是否展示箭头',
         type: 'Boolean',
         required: false,
         default: true,
         options: [true, false]
      }, {
         name: 'forceShow',
         desc: '是否强制展示',
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
         name: 'placement',
         desc: '打开位置',
         type: 'String',
         required: false,
         default: 'bottom',
         options: ['top', 'right', 'bottom', 'left']
      }]
   }],
   events: [{
      title: 'Popover Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '当popover显示状态改变时触发',
         params: 'Boolean: 显示状态',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Popover Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽，内容会渲染至popover悬浮框内'
      }, {
         name: 'reference',
         desc: '展示插槽，内容会直接渲染出来'
      }]
   }]
};
export default desc;
