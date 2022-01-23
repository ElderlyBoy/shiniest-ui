<template>
  <div class="tag-box">
    <h3>基础用法</h3>
    <sh-tag>标签一</sh-tag>
    <sh-tag type="success">标签一</sh-tag>
    <sh-tag type="warning">标签一</sh-tag>
    <sh-tag type="danger">标签一</sh-tag>
    <sh-tag type="info">标签一</sh-tag>
    <h3>大小</h3>
    <sh-tag size="mini">超小标签</sh-tag>
    <sh-tag size="small">小标签</sh-tag>
    <sh-tag size="medium">中等标签</sh-tag>
    <sh-tag size="large">大标签</sh-tag>
  </div>
</template>
<style lang="scss">
  .tag-box {
    .sh-tag {
      margin-right: 10px;
      &:nth-last-of-type(1){
        margin-right: 0;
      }
    }
  }
</style>