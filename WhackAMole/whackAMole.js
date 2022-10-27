
let nodeList = document.querySelector("#container-tabel");
let score = document.querySelector(".display-score p");
console.log(score)
let count = 1;
let listEle = nodeList.children
console.log(listEle)
function colorChange(){
    
    let i = Math.floor(Math.random() * listEle.length);
    listEle[i].style.backgroundColor = "black";
    setTimeout(function(){
        listEle[i].style.backgroundColor="white";
     
    },1000);
}
let interval = setInterval(colorChange,1000);

document.body.addEventListener("click",(event) =>{
    if(event.target.style.backgroundColor=="black"){
        score.innerHTML = `Score: ${count}`;
        event.target.style.backgroundColor ="white";
        count = count + 1;

    }
//    console.log(event.target);
  
 })







