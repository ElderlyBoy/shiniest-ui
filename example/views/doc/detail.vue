<template>
   <sh-scrollbar ref="scrollbar" style="width: 100%;">
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
            <pre v-for="(code, codeIndex) in desc.example" :key="codeIndex">
               <h2>{{code.title}}</h2>
               <code>{{code.code}}</code>
            </pre>
         </section>
         <section class="attrs">
            <div v-for="(prop, propIndex) in desc.props" :key="propIndex">
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
                     <tr v-for="(row, rowIndex) in prop.list" :key="rowIndex">
                        <td>{{row.name}}</td>
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
                     this.$refs.scrollbar.init()
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
                              h('h2', cName + ' 动态示例'),
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
                                    h('span', `${unit.name}: `),
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
                  this.$refs.scrollbar.init()
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
         }
      }
   }
</script>

<style lang="scss">
   .doc-detail {
      height: calc(100vh - 81px);
      width: 100%;
      pre {
         font-family: inherit;
         code {
            font-family: "lucida sans typewriter";
         }
      }
      table {
         border-spacing: 0;
         background: #000;
         width: 100%;
         th {
            white-space: nowrap;
         }
         th,td {
            background: #fff;
            padding: 5px 10px;
            border-bottom: 1px solid #ddd;
            text-align: left;
         }
      }
   }
</style>
