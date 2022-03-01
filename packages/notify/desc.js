const desc = {
   //是否单独书写动态示例
   independent: true,
   example: [{
      title: 'Notify 代码示例',
      code: `
<script>
   export default {
      methods: {
         click(){
            this.$notify.success('Hello Wrold!');
         }
      }
   }
</script>
`
   }],
   props: [{
      title: 'Notify Attributes',
      /* name desc type required default options ↓ */
      list: []
   }],
   events: [{
      title: 'Notify Events',
      /* name desc params note ↓ */
      list: [],
   }],
   slots: [{
      title: 'Notify Slots',
      /* name desc ↓ */
      list: []
   }]
};
export default desc;
