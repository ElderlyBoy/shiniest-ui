export const componentSizesList = ['mini', 'small', 'medium', 'large'];
export const componentTypesList = ['primary', 'success', 'warning', 'info', 'danger'];

export function getType(value){
  return toString.call(value).split(' ')[1].replace(']','')
}
