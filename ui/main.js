/*console.log('Loaded!');
console.log("Now Your Will Changed");
var element=document.getElementById('main');
element.innerHTML='AJIT JAIN';
var img =document.getElementById('madi');
var marginLeft= 0 ;
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
   // img.style.marginLeft="100px";
    var interval=setInterval(moveRight,50);
    
}*/
counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
var req= new XMLHttpRequest();
req.onreadystatechange=function(){
    if(req.readystate===XMLHttpRequest.DONE){
        if(req.status===200){
            var counter=req.ResponseText;
            var span=ducument.getElementById('count');
    span.innerHTML=counter.toString();
       }
    }
};
  
  req.open('GET','http://ajit1515ajit.imad.hasura-app.io/counter',true);
  res.send(null);
};

/*var button=document.getElementById('counter');
buttoon.onclick(){
    counter=counter+1
    var span=ducument.getElementById('count');
    span.innerHTML=counter.toString();
    
}*/
