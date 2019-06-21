/* var kubiki=document.querySelector(".kubiki")

console.log(kubiki)

setInterval(() => {
    if (kubiki.style.background == "blue"){
        kubiki.style.background = "red"
    }else{
        kubiki.style.background = "blue"
    }
    
}, 3000);
let i = 0;


    
    setInterval(() =>{
        i=i+1;
    kubiki.style.margin = i + "px"


    },1100) */

var mfrinavikaci=document.querySelector(".kaci1")
var mfrinavikaci2=document.querySelector(".kaci2")
var mfrinavikaci3=document.querySelector(".kaci3")
var i = 0;
var b = 4.2;
var c = 4.2;
var d = 0
setInterval(() => {
    b=b+0.013594986;
    i++;
    c=c-0.013594986;
    d=d+0.013594986;
    mfrinavikaci.style.top = i;
    mfrinavikaci.style.right = d + "%"  ;
    mfrinavikaci2.style.bottom = i;
    mfrinavikaci2.style.right = c + "%";
    mfrinavikaci3.style.bottom = i;
    mfrinavikaci3.style.left = b + "%";




    
}, 1000);
       



