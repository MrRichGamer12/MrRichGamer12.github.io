let tb=document.getElementById("div")
let text=document.getElementById("txt")
function Submit(){
let p=document.createElement("p")
tb.appendChild(p)
p.append(text.value)
text.value=""
}