const desc = {
   //是否单独书写动态示例
   independent: true,
   example: [{
      title: 'CheckBox 代码示例',
      code: `
<template>
   <div>
      <sh-checkbox v-model="value" :value="1">选项1</sh-checkbox>
      <sh-checkbox v-model="value" :value="2">选项2</sh-checkbox>
      <sh-checkbox v-model="value" :value="3">选项3</sh-checkbox>
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
      title: 'CheckBoxGroup 代码示例',
      code: `
<template>
   <div>
      <sh-checkbox @change="checkAllChange" :indeterminate="indeterminate" value="all" v-model="checkAll">全选</sh-checkbox>
      <sh-checkbox-group @change="checkGroupChange" v-model="group">
         <sh-checkbox v-for="num in 5" :key="num" :value="num">选项{{num}}</sh-checkbox>
      </sh-checkbox-group>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            group: [1, 3],
            checkAll: []
         }
      },
      computed: {
         indeterminate() {
            return this.group.length > 0 && this.group.length < 5
         }
      },
      methods: {
         checkAllChange(val) {
            this.group = val.length || this.indeterminate ? [1, 2, 3, 4, 5] : [];
         },
         checkGroupChange(val) {
            this.canCheckAll = val.length === 5?['all']:[]
         }
      }
   }
</script>
`
   }],
   props: [{
      title: 'CheckBox Attributes',
      /* name desc type required default options ↓ */
      list: [{
         name: 'bindValue',
         desc: '绑定值',
         type: 'Array',
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
      }, {
         name: 'indeterminate',
         desc: '表示选项的不确定状态(仅做样式控制，不改变绑定值，一般用于全选的不确定状态展示。)',
         type: 'Boolean',
         required: false,
         default: false,
         options: [true, false]
      }]
   }, {
      title: 'CheckBoxGroup Attributes',
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
      title: 'CheckBox Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '选项状态发生变化时的回调函数',
         params: 'value',
         note: '--'
      }],
   }, {
      title: 'CheckBoxGroup Events',
      /* name desc params note ↓ */
      list: [{
         name: 'change',
         desc: '选项状态发生变化时的回调函数',
         params: 'value',
         note: '--'
      }],
   }],
   slots: [{
      title: 'CheckBox Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }, {
      title: 'CheckBoxGroup Slots',
      /* name desc ↓ */
      list: [{
         name: '--',
         desc: '默认插槽'
      }]
   }]
};
export default desc;
