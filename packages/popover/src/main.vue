<template>
  <div
    class="sh-popover"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click.stop="click($event, false)"
  >
    <slot name="reference"><sh-button>REFERENCE</sh-button></slot>
    <transition name="sh-popover">
      <div
        @click.stop="{}"
        :class="['sh-popover__inner', {'is-arrow': arrow}, `is-${placement}`]"
        v-if="firstShow || forceShow"
        v-show="(firstShow && isShow) || forceShow"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  import '../../stylesheet/popover.scss';
  export default {
    name: 'ShPopover',
    props: {
      trigger: { type: String, default: 'hover', validator: val => ['hover', 'click'].includes(val) },
      timeToClose: { type: Number, default: 200 },
      arrow: { type: Boolean, default: true },
      forceShow: { type: Boolean, default: false },
      placement: { type: String, default: 'bottom', validator: val => ['top', 'right', 'bottom', 'left'].includes(val) }

    },
    data(){
      return {
        firstShow: false,
        isShow: false,
        timmer: null,
      }
    },
    mounted() {
      document.body.addEventListener('click', this.click)
    },
    beforeDestroy() {
      document.body.removeEventListener('click', this.click)
    },
    methods: {
      reander(val){
        if(!this.firstShow) this.firstShow = val!==undefined?val:true;
        let isShow = val!==undefined?val:!this.isShow;
        if(!isShow) {
          this.timmer = setTimeout(() => {
            this.isShow = isShow
          }, this.timeToClose)
        } else {
          this.isShow = isShow
        }
      },
      mouseenter(){
        if(this.trigger !== 'hover') return;
        if(this.timmer) clearTimeout(this.timmer);
        this.reander(true)
      },
      mouseleave(){
        if(this.trigger !== 'hover') return;
        this.reander(false)
      },
      click(e, fromWindow=true){
        if(this.trigger !== 'click') return;
        if(fromWindow && this.isShow === false) return
        this.reander()
      },
    }
  }
</script>
