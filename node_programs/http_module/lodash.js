const ram=require('lodash')

const items=[1,[2,[3,[4,[5,[6,[7,[8]]]]]]]]

const new_ = ram.flattenDeep(items)
console.log(new_)
