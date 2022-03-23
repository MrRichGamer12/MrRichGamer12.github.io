if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./sw.js").then(function(){
      console.log("Service Worker on")
  })
} 
let r=[]
let n=25
let br = document.createElement("br")
let h1 = document.createElement("p")
let r2 = []
let h2 = document.createElement("a")
function getStats(){
fetch("https://www.balldontlie.io/api/v1/stats", {
  method: "GET",
  headers: {
  'Content-Type': 'application/json',
  },
  })

  .then(response => response.json())
  .then(response => {
  console.log(response)
  if (r.length < n) {
    for (i = 0; i < n; i++) {
        r.push(response.data[i])
    }
    console.log(r)
    post();
}
else {
    for (i = 0; i < n; i++) {
        r.shift()
        r.push(response.data[i])
    }
    post0()
}
  });}
  function post() {
    for (i = 0; i < r.length; i++) {
        let h1 = document.createElement("p");
        let dvc1c = document.getElementById(`col${i + 1}`)
        h1.innerHTML = `Name:${r[i].player.first_name} ${r[i].player.last_name}; Game: ${r[i].game.date};Stats: Ast-${r[i].ast},Pts-${r[i].pts},Reb-${r[i].reb},Stl-${r[i].stl},Turnover-${r[i].turnover} `;
        dvc1c.appendChild(h1);
    }
}
  