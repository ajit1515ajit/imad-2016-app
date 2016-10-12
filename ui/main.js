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
var counter=0;
var button=document.getElementById('counter');

button.onclick=function(){
var req= new XMLHttpRequest();
req.onreadystatechange=function(){
    if(req.readyState===XMLHttpRequest.DONE){
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
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
var request=new XMLHttpRequest();
request.onreadystatechange=function(){
	if(request.readyState===XMLHttpRequest.DONE){
	if(request.status===200){
	var names= request.responseText;
	names=JSON.parse(names);
	var list='';
	for(var i=0; i<names.length; i++){
	list+='<li>'+names[i]+'</li>';
	}
	var ul=document.getElementId('namelist');
	ul.innerHTML=list;
	}
	}
};
var nameInput=document.getElementBYId('name');
var name = nameInput.value;
request.open('GET','http://ajit1515ajit.imad.hasura-app.io/submit-nmae?name='+name,true);
request.send(null);
};

/*var button=document.getElementById('counter');
buttoon.onclick(){
    counter=counter+1
    var span=ducument.getElementById('count');
    span.innerHTML=counter.toString();
    
}*/
