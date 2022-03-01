import { componentSizesList, componentTypesList } from "../../src/util/utils.js";
const desc = {
   //是否单独书写动态示例
   independent: false,
   example: [{
      title: 'Tag 代码示例',
      code: `
<template>
   <sh-tag type="primary">标签</sh-tag>
</template>
`
   }],
   props: [{
      title: 'Tag Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'type',
         desc: '标签类型',
         type: 'String',
         required: false,
         default: 'primary',
         options: componentTypesList
      },{
         name: 'size',
         desc: '标签大小',
         type: 'String',
         required: false,
         default: 'small',
         options: componentSizesList
      }]
   }],
   events: [{
      title: 'Tag Events',
      /* name desc params note ↓ */
      list: [],
   }],
   slots: [{
      title: 'Tag Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
