<template>
   <sh-scrollbar ref="scrollbar">
      <div class="doc-detail">
         <section class="preview">
            <template v-if="desc.independent">
               <component :is="customalExample"></component>
            </template>
            <template v-else>
               <component :is="previewComponent"></component>
               <component :is="previewComponentDynamic"></component>
            </template>
         </section>
         <section class="code">
            <div v-for="code in desc.example" :key="code.title">
               <h2>{{code.title}}</h2>
               <sh-scrollbar light>
                  <pre>
                     <code>{{code.code}}</code>
                  </pre>
               </sh-scrollbar>
            </div>
         </section>
         <section class="attrs">
            <div v-for="prop in desc.props" :key="prop.title">
               <h2>{{prop.title}}</h2>
               <table>
                  <thead>
                     <tr>
                        <th>属性名</th>
                        <th>描述</th>
                        <th>类型</th>
                        <th>是否必须</th>
                        <th>默认值</th>
                        <th>可选值</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-if="prop.list.length===0">
                        <td colspan="6">
                           <center>这里啥也没有</center>
                        </td>
                     </tr>
                     <tr v-for="(row, rowIndex) in prop.list" :key="rowIndex">
                        <td>{{row.name==='bindValue'?'v-model / bindValue':row.name}}</td>
                        <td>{{row.desc}}</td>
                        <td>{{row.type}}</td>
                        <td>{{row.required?'是':'否'}}</td>
                        <td>{{row.default === ''?'\' \'':row.default===null?'null':row.default}}</td>
                        <td>{{row.options.join(', ') || '--'}}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
         <section class="events">
            <div v-for="(event, eventIndex) in desc.events" :key="eventIndex">
               <h2>{{event.title}}</h2>
               <table>
                  <thead>
                     <tr>
                        <th>事件名</th>
                        <th>描述</th>
                        <th>参数</th>
                        <th>备注</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-if="event.list.length===0">
                        <td colspan="6">
                           <center>这里啥也没有</center>
                        </td>
                     </tr>
                     <tr v-for="(row, rowIndex) in event.list" :key="rowIndex">
                        <td>{{row.name}}</td>
                        <td>{{row.desc}}</td>
                        <td>{{row.params}}</td>
                        <td>{{row.note}}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
         <section class="slots">
            <div v-for="(slot, slotIndex) in desc.slots" :key="slotIndex">
               <h2>{{slot.title}}</h2>
               <table>
                  <thead>
                     <tr>
                        <th>插槽名</th>
                        <th>描述</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-if="slot.list.length===0">
                        <td colspan="6">
                           <center>这里啥也没有</center>
                        </td>
                     </tr>
                     <tr v-for="(row, rowIndex) in slot.list" :key="rowIndex">
                        <td>{{row.name}}</td>
                        <td>{{row.desc}}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
      </div>
   </sh-scrollbar>
</template>

<script>
   export default{
      data(){
         return {
            desc: {},
            dynamicBindValue: '',
            //自定义预览组件
            customalExample: {
               render(h){
                  return h('')
               }
            },
            //示例操作组件
            previewComponent: {
               render(h){
                  return h('')
               }
            },
            //示例组件动态预览
            previewComponentDynamic: {
               render(h){
                  return h('')
               }
            }
         }
      },
      created() {
         this.init();
      },
      watch: {
         '$route.params.name': function(){
            this.init();
         }
      },
      methods: {
         init(){
            //组件名称
            const cName = this.$route.params.name;
            //组件描述文件
            const desc = import(/* webpackChunkName: "desc" */ `./../../../packages/${cName}/desc.js`);
            desc.then(data => {
               let result = data.default;
               let propsTemp = {};
               result.props.forEach(prop => {
                  prop.list.forEach(unit => {
                     unit.temp = (() => unit.default)()
                     propsTemp[unit.name] = unit.default
                  })
               })
               this.desc = result;
               if(this.desc.independent) {
                  //渲染自定义预览组件
                  const customalExample = import(/* webpackChunkName: "desc" */ `./independent/${cName}.vue`);
                  customalExample.then(example => {
                     this.customalExample = example.default;
                     this.done();
                  }).catch(() => {
                     this.$router.push({name: '404'});
                  })
               } else {
                  //初始化动态示例组件
                  this.refreshViewer(cName, propsTemp);
                  let that = this;
                  //渲染操作组件
                  this.previewComponent = {
                     render(h){
                        return h('div', {
                           class: 'example'
                        }, result.props.map(prop => {
                           const filterPropList = prop.list.filter(i => i.options.length);
                           return h('div', {
                              class: 'example-item'
                           }, [
                              h('h2', cName.replace(/\w/, val => val.toUpperCase()) + ' 动态示例'),
                              ...filterPropList.map(unit => {
                                 return h('sh-radio-group', {
                                    props: {
                                       bindValue: unit.temp
                                    },
                                    on: {
                                       change: val => {
                                          unit.temp = val
                                          let propsTemp = {};
                                          result.props.forEach(prop => {
                                             prop.list.forEach(unit => {
                                                propsTemp[unit.name] = unit.temp
                                             })
                                          })
                                          that.refreshViewer(cName, propsTemp);
                                       }
                                    }
                                 }, [
                                    h('span', {
                                       class: 'option-label',
                                       domProps: {
                                          title: unit.name
                                       }
                                    }, `${unit.name}: `),
                                    ...unit.options.map(option => h('sh-radio', {
                                       props: {
                                          value: option,
                                          label: option.toString()
                                       }
                                    }))
                                 ])
                              })
                           ])}
                        ))
                     }
                  }
                  this.done();
               }
            }).catch(() => {
               this.$router.push({name: '404'});
            })
         },
         //刷新示例组件
         refreshViewer(cName, props){
            let that = this;
            this.previewComponentDynamic = {
               render(h){
                  return h(`sh-${cName}`, {
                     props: {
                        ...props,
                        bindValue: that.dynamicBindValue
                     },
                     on: {
                        input: val => {
                           that.dynamicBindValue = val
                        },
                        change: val => {
                           that.dynamicBindValue = val
                        }
                     }
                  }, cName)
               }
            }
         },
         //初始化完成
         done(){
            this.$nextTick(() => {
               this.$refs.scrollbar.init();
               let codeEl = this.$el.querySelectorAll('pre code');
               //代码高亮
               codeEl.forEach(block => {
                  let html = block.innerHTML;
                  /* html*/
                  //属性名高亮
                  html = html.replace(/\n?\s?[\w-]+=/g, val => `<span class="attr-name">${val.substr(0,val.length-1)}</span>=`)
                  //属性值高亮
                  html = html.replace(/("|')\w+("|')/g, val => `<span class="attr-value">${val}</span>`)
                  //标签高亮
                  html = html.replace(/&lt;\/?[\w-]+/g, val => `<span class="mark">${val}</span>`)
                  html = html.replace(/&gt;/g, val => `<span class="mark">${val}</span>`)
                  /* javascript*/
                  //方法
                  html = html.replace(/.?\w+\(/g, val => `<span class="func">${val.substr(0,val.length-1)}</span>(`)
                  //关键字
                  html = html.replace(/(const|let|var)/g, val => `<span class="key">${val}</span>`)
                  html = html.replace(/(this|export|default|return|for|if|else|switch|case|break|while|\?|===|==|&&)/g, val => `<span class="key-imp">${val}</span>`)
                  //对象key
                  html = html.replace(/\w+:/g, val => `<span class="obj-key">${val.substr(0,val.length-1)}</span>:`)
                  block.innerHTML = html
               })
            })
         }
      }
   }
</script>

<style lang="scss">
   @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
   .doc-detail {
      height: calc(100vh - 81px);
      width: 100%;
      h2 {
         color: #2CAD66;
         margin: 20px 0;
      }
      section{
         width: 100%;
      }
      section.code > div {
         width: 80%;
      }
      .example-item {
         background: #eee;
         padding: 15px;
         margin-bottom: 20px;
         border-radius: 10px;
         width: 80%;
         box-sizing: border-box;
         .sh-radio-group {
            padding: 5px 0;
         }
         h2 {
            margin-top: 0;
         }
         .option-label {
            font-size: 14px;
            display: inline-block;
            width: 100px;
            letter-spacing: 1px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
         }
      }
      pre {
         font-family: inherit;
         margin: 0;
         background: #272822;
         border-radius: 10px;
         box-sizing: border-box;
         padding: 0 20px;
         max-height: 300px;
         code {
            font-family: 'Source Code Pro', monospace;
            color: #fff;
            font-size: 14px;
            .mark,.sig,.key-imp {
               color: #f92672;
            }
            .attr-value,.obj-key {
               color: #e6db74;
            }
            .attr-name, .func {
               color: #a6e22e;
            }
            .key {
               color: #66d9ef;
            }
         }
      }
      table {
         border-spacing: 0;
         background: #000;
         width: 100%;
         box-sizing: border-box;
         font-size: 14px;
         margin: 10px 0;
         th,td {
            background: #fff;
            padding: 5px 10px;
            border-bottom: 1px solid #ddd;
            text-align: left;
            color: #666;
         }
         th {
            white-space: nowrap;
            color: #333;
         }
         td:nth-of-type(1){
            white-space: nowrap;
         }
      }
   }
</style>
