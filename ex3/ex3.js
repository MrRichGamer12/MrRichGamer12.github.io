let n1=Math.floor((Math.random()*50)+1)
let n2=Math.floor((Math.random()*50)+1)
let n3=Math.floor((Math.random()*50)+1)
let n4=Math.floor((Math.random()*50)+1)
let n5=Math.floor((Math.random()*50)+1)
let s1=Math.floor((Math.random()*11)+1)
let s2=Math.floor((Math.random()*11)+1)
while(n1==n2||n1==n3||n1==n4||n1==n5){
    n1=Math.floor((Math.random()*50)+1)
}
while(n2==n1||n2==n3||n2==n4||n2==n5){
    n2=Math.floor((Math.random()*50)+1)
}
while(n3==n2||n3==n1||n3==n4||n3==n5){
    n3=Math.floor((Math.random()*50)+1)
}
while(n4==n2||n4==n3||n4==n1||n4==n5){
    n4=Math.floor((Math.random()*50)+1)
}
while(n5==n2||n5==n3||n5==n4||n5==n1){
    n5=Math.floor((Math.random()*50)+1)
}
while(s1==s2){
    s1=Math.floor((Math.random()*50)+1)
}
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(s1)
console.log(s2)