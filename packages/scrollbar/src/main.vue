<template>
  <div class="sh-scrollbar">
    <div
      :style="computedHeight"
      class="sh-scrollbar__thumb"
      @mousedown="mousedown"
    >
    </div>
  </div>
</template>

<script>
  import '../../stylesheet/scrollbar.scss';
  export default {
    name: 'scrollbar',
    data(){
      return {
        parentEl: null,
        translateY: 0,
        startY: 0,
        startScrollTop: 0
      }
    },
    mounted() {
      this.parentEl.addEventListener('scroll', this.scroll)
    },
    beforeDestroy() {
      this.parentEl.removeEventListener('scroll', this.scroll)
    },
    computed: {
      computedHeight(){
        return {
          height: `${this.computedThumbHeight}px`,
          transform: `translateY(${this.translateY}px)`
        }
      },
      computedThumbHeight(){
        return this.parentEl.offsetHeight*this.parentEl.offsetHeight/this.parentEl.scrollHeight
      }
    },
    methods: {
      scroll(){
        this.translateY = event.target.scrollTop + (event.target.scrollTop*event.target.offsetHeight/event.target.scrollHeight)
      },
      mousedown(){
        event.stopImmediatePropagation();
        this.startY = event.y;
        this.startScrollTop = this.parentEl.scrollTop;
        window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('mouseup', this.mouseup);
        document.onselectstart = () => false;
      },
      mousemove(){
        this.parentEl.scrollTop = this.startScrollTop + (event.y-this.startY)*this.parentEl.scrollHeight/this.parentEl.offsetHeight
      },
      mouseup(){
        window.removeEventListener('mousemove', this.mousemove);
        window.removeEventListener('mouseup', this.mouseup);
      },
    }
  }
</script>
