const desc = {
   //是否单独书写动态示例
   independent: true,
   example: [{
      title: 'Scrollbar 代码示例',
      code: `
<template>
   <div class="box">
      <sh-scrollbar>
         <div>here is big then the parent</div>
      </sh-scrollbar>
   </div>
</template>`
   }],
   props: [{
      title: 'Scrollbar Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'resizeable',
         desc: '对象目标的大小是否会发生变化（选择false可以优化性能）',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'defaultShowThumb',
         desc: '始终展示滚动条，而不是鼠标悬浮在对象区域时展示。',
         type: 'Boolean',
         required: false,
         default: true,
         options: [true, false]
      }, {
         name: 'light',
         desc: '是否启用亮色',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }]
   }],
   events: [{
      title: 'Scrollbar Events',
      /* name desc params note ↓ */
      list: [],
   }],
   slots: [{
      title: 'Scrollbar  Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
