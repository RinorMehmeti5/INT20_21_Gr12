var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');//Krijimi i superObjektit c i cili na mundson me "Vizatu" objekte 2d

/*
c.fillStyle="grey";
c.fillRect(100,100,150,120);*/


//line


//Arc / Circle

///////////////////
/*c.beginPath();
//c.arc(x,y,rrezja,kendiFillestar,kendiPerfundimtar,VizatohetKunderAkrepave te ores)
c.arc(200,200,15,0,Math.PI*2,false);
c.strokeStyle="blue";
c.stroke();*/
/////////////////////////////////


//Shumfishimi i rratheve
/////////////////////////
/*
for(var i=0;i<=100;i++)
{
  var x=Math.random()*innerWidth;
  var y=Math.random()*innerHeight;
  var r=Math.random()*40;
  c.beginPath();
  c.arc(x,y,r,0,Math.PI*2,false);
  c.strokeStyle="blue";
  c.stroke();
}*/

//Rrethi
////////////////////////
/*c.beginPath();
c.arc(200,200,20,0,Math.PI*2,false);
c.strokeStyle="blue";
c.stroke();*/
////////////////////////////
/*
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=(Math.random()-0.5)*5;
var dy=(Math.random()-0.5)*5;
var r=20;*/
//objekt variablat/metodat e te cilit thirren me THIS
var mouse={
  x:undefined,
  y:undefined
}

var varguNgjyra=[
  '#fff',
  '#c0ebfd',
  '#aee7ff',
  '#9be1ff',
  '#1c53d3',
]
window.addEventListener('mousemove',function(event){
  mouse.x=event.x;
  mouse.y=event.y;
});
window.addEventListener('resize',function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})


function Circle(x,y,dx,dy,r){
  ////////////variablat
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.r=r;
  this.rmin=r;
  this.rmax=rmax;
  this.ngjyra=varguNgjyra[Math.floor(Math.random()*varguNgjyra.length)];
  /////////metodat
  this.vizato = function (){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
  c.fillStyle=this.ngjyra;
    c.fill();
  }

  this.animo = function(){

    if(this.x + this.r > innerWidth||this.x - this.r < 0){
      this.dx = -this.dx;
    }
    if(this.y+this.r>innerHeight||this.y-this.r<0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
//interaktiviteti
if(mouse.x - this.x <50 && mouse.x-this.x>-50
  && mouse.y - this.y <50 && mouse.y - this.y >-50){
if(this.r<this.rmax){
  this.r+=1.5;
}
}
else if(this.r>this.rmin){
  this.r-=1;
}
this.vizato();
  }

}

//Shumfishimi2
var varguRreth=[];

for(var j=0;j<900;j++){

  var x=Math.random()*(innerWidth-2*r)+r;
  var y=Math.random()*(innerHeight-2*r)+r;
  var dx=(Math.random()-0.5);
  var dy=(Math.random()-0.5);
  var r=Math.random()*3+1;
  var rmin=4;
  var rmax=40;

varguRreth.push(new Circle(x,y,dx,dy,r));

}

function animacioni(){
  requestAnimationFrame(animacioni);//rekurzion
  c.clearRect(0,0,innerWidth,innerHeight);

for(var k=0;k<varguRreth.length;k++)
{
  varguRreth[k].animo();
}
}
animacioni();
