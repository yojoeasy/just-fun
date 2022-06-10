setInterval(()=>{ 
    document.getElementById("id-11").innerHTML= Date(); 
},1000) 
document.getElementById("id-12").innerHTML=  new Date( 1998,0,24);
document.getElementById("id-13").innerHTML=  new Date(98, 30); 
var i = 1;
while(i<=10){
    var x = Array(` 99999 * ${i} = `+ 99999*i);
    // console.log(x.length);
    // console.log(x);
    document.getElementById(`id-${i}`).innerHTML= x; 
    x = x.push();
    i++;
}
console.log(window);
console.log(window.location);
console.log(window.location.href);
console.log(document);
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);
console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.hasChildNodes());
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);
firchild = document.body.firstElementChild ;
firchild.style.color = "red";
elechild = document.querySelector('#id-11');
elechild.style.color = "crimson";
console.log(document.body.parentNode);
console.log(document.body.parentElement);
console.log(document.body.previousSibling);
console.log(document.body.previousElementSibling);
console.log(document.head.nextSibling);
console.log(document.head.nextElementSibling);
function callingafunction(){
    alert("this is awsome 2.");  
}
document.getElementById('id-16').onclick=function(){alert("this is awsome 3.")};
document.getElementById('id-16').onclick=function(){console.log("this is awsome 3.")};

document.getElementById('id-17').onclick=function(){console.log("this is awsome 4.")};
document.getElementById('id-17').onclick=function(){alert("this is awsome 4.")};



document.querySelector("#id-18").addEventListener('click',()=>{
    alert("this is awsome 5.");  
})
document.querySelector("#id-18").addEventListener('click',()=>{
    console.log("this is awsome 5.");  
})

const evl = document.getElementById("id-18");
const check = ()=>{
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
evl.addEventListener('click',check)

function mouseUp(){
    document.getElementById("id-19").innerHTML="mouse up";
    document.getElementById("id-19").style.color="yellow";
    }
function mouseDown(){
    document.getElementById("id-19").innerHTML="mouse down";
    document.getElementById("id-19").style.color="crimson";
}
function mouseEnter(){
    document.getElementById("id-20").innerHTML="mouse enter";
    document.getElementById("id-20").style.color="yellow";
    }
function mouseLeave(){
    document.getElementById("id-20").innerHTML="mouse leave";
    document.getElementById("id-20").style.color="crimson";
}
function keyPress(){
    document.getElementById("key").innerHTML=`the press key is [ ${event.key} ] the value of key is[ ${event.code}].`
}
function keyUp(){
    document.getElementById("keys").innerHTML=`key is up`
}
function keyDown(){
    document.getElementById("keys").innerHTML=`key is down`
}