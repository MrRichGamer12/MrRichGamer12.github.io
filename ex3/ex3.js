let tb=document.getElementById("div")
let n=[
    Math.floor((Math.random()*50)+1),
    Math.floor((Math.random()*50)+1),
    Math.floor((Math.random()*50)+1),
    Math.floor((Math.random()*50)+1),
    Math.floor((Math.random()*50)+1)
]
while(n[0]==n[1]||n[0]==n[2]||n[0]==n[3]||n[0]==n[4]){
    n[0]=Math.floor((Math.random()*50)+1)
}
while(n[1]==n[0]||n[1]==n[2]||n[1]==n[3]||n[1]==n[4]){
    n[1]=Math.floor((Math.random()*50)+1)
}
while(n[2]==n[1]||n[2]==n[1]||n[2]==n[1]||n[2]==n[1]){
    n[2]=Math.floor((Math.random()*50)+1)
}
while(n[3]==n[0]||n[3]==n[1]||n[3]==n[2]||n[3]==n[3]){
    n[3]=Math.floor((Math.random()*50)+1)
}
while(n[4]==n[0]||n[4]==n[1]||n[4]==n[2]||n[4]==n[3]){
    n[4]=Math.floor((Math.random()*50)+1)
}
let s=[
    Math.floor((Math.random()*11)+1),
    Math.floor((Math.random()*11)+1)
]
while(s[0]==s[1]){
    s[0]=Math.floor((Math.random()*11)+1)
}
for(i=0;i<4;i++){
let h1=document.createElement("h1")
tb.appendChild(h1)
h1.append(n[i])
}
for(i=0;i<1;i++){
    let p=document.createElement("p")
    tb.appendChild(p)
    p.append(s[i])
    }