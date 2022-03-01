<template>
   <div class="checkbox-box">
      <div class="example">
         <div class="example-item">
            <h2>{{name}} 动态示例</h2>
            <slot name="options"></slot>
         </div>
      </div>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: 'IndeComp',
      props: ['name']
   }
</script>
