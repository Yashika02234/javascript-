"use strict";//treat all js code as newer version
//alert(3+3)//we are using node js not browser
console.log(3+3) 
console.log("yashika")

let name ="yashika"
let age = 20
let islogedin = false
let state;//undefined

//number => 2^53 or 52
//bigint 
//string =>"" 
//boolean => true/false
//null => standalone valse
//undefined =>
//symbol => unique


//object =>

console.log(typeof undefined)  //undefined
console.log(typeof null)  //object
/* primitive datatype
7 types: string , number,boolean,null,undefined,symbol,bigint


refrence(non primitive)
array,object, functions



*/
/****************************memory*********** */
//stack(pribmitive),heap(non primitive)
let myyoutubename ="yashikaaaa"
let anothername = myyoutubename
anothername= "chai aur code"
console.log(anothername)
console.log(myyoutubename)

let userone  ={
    email:"user@gmail.com",
    upi:"user@ybl",
}
let usertwo = userone
usertwo.email="yashi@221"
console.log(userone.email)
console.log(usertwo.email)