//Modules=Encapsulated_code(only_share_minimum)
// uses Commmon Js,and every file is module(by default )

const names =require('./4-names')
const sayhi=require('./app')

sayhi(names.sai)
sayhi(names.hari)
sayhi(names.raju)
require('./add')
