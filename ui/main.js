console.log('Loaded!');
console.log("Now Your Will Changed");
var element=document.getElementById('main');
element.innerHTML='AJIT JAIN';
var img =document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    imag.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
   // img.style.marginLeft="100px";
    var interval=setInterval(moveRight,100);
    
}