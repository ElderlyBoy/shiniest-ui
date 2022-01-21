<template>
  <a @click="click" :href="href" :class="['sh-link', `sh-link__${type}`, {'sh-link__underline': underline, 'sh-link__disabled': disabled}]">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </a>
</template>

<script>
  import '../../stylesheet/link.scss';
  export default {
    name: 'ShLink',
    props: {
      type: { type: String, default: 'default' },
      underline: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      href: { type: String, default: '' },
      icon: { type: String, default: '' }
    },
    methods: {
      click(){
        if(this.disabled) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    }
  }
</script>