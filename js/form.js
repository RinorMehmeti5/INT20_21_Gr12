function Validimi() {
  var Mesazhi, x;
  Mesazhi = document.getElementById("id1");
  x = document.getElementById("fname").value;

  if(x == ""|| x.match(/[0-9]/)|| x.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)){
    Mesazhi.innerHTML = "keni shneuar merin gabim";
  }
  else{
    Mesazhi.innerHTML = "";
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi1 , y;
  Mesazhi1=document.getElementById("id2");
  y = document.getElementById("fsurname").value;
  if(y == ""|| y.match(/[0-9]/)|| y.match(/[A-Za-z]+[0-9]/)){
    Mesazhi1.innerHTML = "keni shneuar merin gabim";
  }
  else{
    Mesazhi1.innerHTML = "";
  }

  //==============================================================================================
  //==============================================================================================
  var Mesazhi2 , a;
  Mesazhi2=document.getElementById("id3");
  a = document.getElementById("ftel").value;
  if(a == ""|| a.match(/[A-Za-z]/)|| a.match(/[A-Za-z]+[0-9]/)){
    Mesazhi2.innerHTML = "keni shneuar merin gabim";
  }
  else if(a.length>12 || a.length<12){
    Mesazhi2.innerHTML = "Telephone length must be 12 digit";
  }
  else{
    Mesazhi2.innerHTML = "";
  }
//==========================================================================================
  //==============================================================================================
  var Mesazhi3 , b;
  Mesazhi3=document.getElementById("id4");
  b = document.getElementById("fpersonal").value;
  if(b == ""|| b.match(/[A-Za-z]/)|| b.match(/[A-Za-z]+[0-9]/)){
    Mesazhi3.innerHTML = "keni shneuar merin gabim";
  }
  else if(b.length>10 || b.length<10){
    Mesazhi3.innerHTML = "Personal number length must be 10 digit";
  }
  else{
    Mesazhi3.innerHTML = "";
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi4 , c;
  Mesazhi4=document.getElementById("id5");
  c = document.getElementById("femail").value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(c.match(mailformat)){
    Mesazhi4.innerHTML = "";
  }
  else{
    Mesazhi4.innerHTML ="Invalid format of email, email must be like: someone@domain.com"
  }

  //==============================================================================================
  //==============================================================================================
  var Mesazhi5, d;
  Mesazhi5 = document.getElementById("id6");
  d = document.getElementById("fresidenca").value;
  if(d == ""|| d.match(/[0-9]/)|| d.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)){
    Mesazhi5.innerHTML = "keni shneuar merin gabim";
  }
  else{
    Mesazhi5.innerHTML = "";
  }

  //==============================================================================================
  //==============================================================================================
  var Mesazhi6, e;
  Mesazhi6 = document.getElementById("id7");
  e = document.getElementById("fdestination").value;
  if(e == ""|| e.match(/[0-9]/)|| e.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)){
    Mesazhi6.innerHTML = "keni shneuar merin gabim";
  }
  else{
    Mesazhi6.innerHTML = "";
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi7, f;
  Mesazhi7 = document.getElementById("id8");
  f = document.getElementById("fticket").value;
  if(f == ""|| f.match(/[A-Za-z]/)|| f.match(/[A-Za-z]+[0-9]/)){
    Mesazhi7.innerHTML = "keni shneuar merin gabim";
  }
  else if(f.length>100){
    Mesazhi7.innerHTML = "ticket numer is lower than 100";
  }
  else{
    Mesazhi7.innerHTML = "";
  }
  
  //==============================================================================================
  //==============================================================================================
  var Mesazhi8, g;
  Mesazhi8 = document.getElementById("id9");
  g = document.getElementById("fprice").value;
  if(g == ""|| g.match(/[A-Za-z]/)|| g.match(/[A-Za-z]+[0-9]/)){
    Mesazhi8.innerHTML = "keni shneuar merin gabim";
  }
  else if(b.length>15){
    Mesazhi8.innerHTML = "price is lower than 15 digit";
  }
  else{
    Mesazhi8.innerHTML = "";
  }

  //==============================================================================================
  //==============================================================================================
  var Mesazhi9, h;
  Mesazhi9 = document.getElementById("id10");
  h = document.getElementById("fbank").value;
  if(h == ""|| h.match(/[A-Za-z]/)|| h.match(/[A-Za-z]+[0-9]/)){
    Mesazhi9.innerHTML = "keni shneuar merin gabim";
  }
  else if(h.length>16 || h.length<16 ){
    Mesazhi9.innerHTML = "bank accoun number must be 16 digit";
  }
  else{
    Mesazhi9.innerHTML = "";
  }
  //==============================================================================================
  //==============================================================================================
  if(x.match(/[A-Za-z]/) && y.match(/[A-Za-z]/) && a.length == 12 && b.length==10
   && c.match(mailformat) && d.match(/[A-Za-z]/) && e.match(/[A-Za-z]/)
     && f.length<10 && g.length<10 && h.length==16){
    alert("te dhenat u derguan");
    location.reload();
  }
}

  
