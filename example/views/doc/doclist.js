const doclist = [{
   group: 'Basic',
   list: ['button 按钮', 'link 链接']
}, {
   group: 'Form',
   list: ['radio 单选框', 'checkbox 多选框', 'input 输入框', 'switch 开关']
}, {
   group: 'Data',
   list: ['tag 标签']
}, {
   group: 'Notice',  
   list: ['notify 通知']
}, {
   group: 'Navigation',
   list: []
}, {
   group: 'Others',
   list: ['popover 悬浮框' ,'scrollbar 滚动条']
}]

doclist.forEach(group => {
   group.list = group.list.map(unit => ({
      name: unit.split(' ')[0],
      upperName: unit.split(' ')[0].replace(/^\w/, val => val.toUpperCase()),
      chineseName: unit.split(' ')[1]
   }))
})

export default doclist
