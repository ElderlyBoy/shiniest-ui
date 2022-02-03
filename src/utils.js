export const componentSizesList = ['mini', 'small', 'medium', 'large']

export function getType(value){
  return toString.call(value).split(' ')[1].replace(']','')
}
