<template>
  <div :class="['sh-scrollbar', {'is-light': light}]">
    <slot></slot>
    <div @mousedown="mousedown('y')" class="sh-scrollbar__thumb is-y" :style="computedStyleY">
      <div></div>
    </div>
    <div @mousedown="mousedown('x')" class="sh-scrollbar__thumb is-x" :style="computedStyleX">
      <div></div>
    </div>
  </div>
</template>

<script>
  import '../../stylesheet/scrollbar.scss';
  export default {
    name: 'ShScrollbar',
    props: {
      resizeable: { type: Boolean, default: true },//目标元素大小是否会发生变化
      defaultShowThumb: { type: Boolean, default: true },//是否默认展示thumb
      light: { type: Boolean, default: false }//样式
    },
    data(){
      return {
        computedStyleY: {},
        computedStyleX: {},
        translateY: 0,
        translateX: 0,
        startY: 0,
        startX: 0,
        startScrollTop: 0,
        startScrollLeft: 0,
        needScrollbarY: false,
        needScrollbarX: false
      }
    },
    mounted(){
      this.targetEl = this.$el.firstChild;
      this.targetEl.addEventListener('scroll', this.scroll);
      if(this.resizeable) {
        this.sizeChangeTarget = new ResizeObserver(() => {
          this.getTranslateY();
          this.getTranslateX();
          this.getNewStyleY(false);
          this.getNewStyleX(false);
        })
        this.sizeChangeTarget.observe(this.targetEl);
      }
      this.getNewStyleY(false);
      this.getNewStyleX(false);
    },
    beforeDestroy() {
      this.targetEl.removeEventListener('scroll', this.scroll);
      this.sizeChangeTarget.unobserve(this.targetEl);
    },
    watch: {
      defaultShowThumb(){
        this.getNewStyleY(false);
        this.getNewStyleX(false);
      }
    },
    methods: {
      //计算thumb的移动距离
      getTranslateY(){
        return this.translateY = this.targetEl.scrollTop*this.targetEl.clientHeight/this.targetEl.scrollHeight;
      },
      getTranslateX(){
        return this.translateX = this.targetEl.scrollLeft*this.targetEl.clientWidth/this.targetEl.scrollWidth;
      },
      //目标元素scroll
      scroll(){
        this.getTranslateY();
        this.getTranslateX();
        this.getNewStyleY(true);
        this.getNewStyleX(true);
      },
      //计算thumb样式
      getNewStyleY(onlyTransform){
        if(onlyTransform) {
          this.computedStyleY.transform = `translateY(${this.translateY}px)`;
        } else {
          this.needScrollbarY = !(this.targetEl.clientHeight === this.targetEl.scrollHeight);
          this.computedStyleY = {
            height: `${Math.pow(this.targetEl.clientHeight, 2)/this.targetEl.scrollHeight}px`,
            transform: `translateY(${this.translateY}px)`,
            opacity: this.defaultShowThumb?1:'',
            display: this.needScrollbarY?'':'none'
          }
        }
      },
      getNewStyleX(onlyTransform){
        if(onlyTransform) {
          this.computedStyleX.transform = `translateX(${this.translateX}px)`;
        } else {
          this.needScrollbarX = !(this.targetEl.clientWidth === this.targetEl.scrollWidth);
          this.computedStyleX = {
            width: `${Math.pow(this.targetEl.clientWidth, 2)/this.targetEl.scrollWidth}px`,
            transform: `translateX(${this.translateX}px)`,
            opacity: this.defaultShowThumb?1:'',
            display: this.needScrollbarX?'':'none'
          }
        }
      },
      mousedown(axis){
        event.stopImmediatePropagation();
        if(axis === 'y') {
          this.startY = event.y;
          this.startScrollTop = this.targetEl.scrollTop;
          window.addEventListener('mousemove', this.mousemovey);
        } else {
          this.startX = event.x;
          this.startScrollLeft = this.targetEl.scrollLeft;
          window.addEventListener('mousemove', this.mousemovex);
        }
        window.addEventListener('mouseup', this.mouseup);
        document.onselectstart = () => false;
      },
      mousemovey(){
        this.targetEl.scrollTop = this.startScrollTop + (event.y-this.startY)*this.targetEl.scrollHeight/this.targetEl.clientHeight;
      },
      mousemovex(){
        this.targetEl.scrollLeft = this.startScrollLeft + (event.x-this.startX)*this.targetEl.scrollWidth/this.targetEl.clientWidth;
      },
      mouseup(){
        window.removeEventListener('mousemove', this.mousemovey);
        window.removeEventListener('mousemove', this.mousemovex);
        window.removeEventListener('mouseup', this.mouseup);
      },
    }
  }
</script>