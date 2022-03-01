const desc = {
   //是否单独书写动态示例
   independent: true,
   example: [{
      title: 'Radio 代码示例',
      code: `
<template>
   <div>
      <sh-radio v-model="value" :value="1">选项1</sh-radio>
      <sh-radio v-model="value" :value="2">选项2</sh-radio>
      <sh-radio v-model="value" :value="3">选项3</sh-radio>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            value: 1
         }
      }
   }
</script>
`
   }, {
      title: 'RadioGroup 代码示例',
      code: `
<template>
   <div>
      <sh-radio-group @change="checkGroupChange" v-model="group">
         <sh-radio v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-radio>
      </sh-radio-group>
   </div>
</template>
`
   }],
   props: [{
      title: 'Radio Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'bindValue',
         desc: '绑定值',
         type: 'String, Boolean, Number',
         required: true,
         default: [],
         options: []
      }, {
         name: 'label',
         desc: '选项展示名称',
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
      }, {
         name: 'checked',
         desc: '是否默认选中',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }, {
         name: 'value',
         desc: '选项值',
         type: 'String, Number, Boolean',
         required: true,
         default: '',
         options: []
      }]
   }, {
      title: 'RadioGroup Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'bindValue',
         desc: '绑定值',
         type: 'Array',
         required: true,
         default: [],
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
      title: 'Radio Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '选项状态发生变化时的回调函数',
         params: 'value',
         note: '--'
      }],
   }, {
      title: 'RadioGroup Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '选项状态发生变化时的回调函数',
         params: 'value',
         note: '--'
      }],
   }],
   slots: [{
      title: 'Radio Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }, {
      title: 'RadioGroup Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
