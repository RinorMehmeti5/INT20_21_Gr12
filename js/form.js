function Validimi() {
  var Mesazhi, x;
  Mesazhi = document.getElementById("id1");
  x = document.getElementById("fname").value;
  try {
    if(x == "") throw "This feils should not be empty";
    if(x.match(/[0-9]/)) throw "Name only contains characters";
    if(x.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)) throw "Name only contains characters";
    if(x.match(/[A-Za-z]/)) throw null;
  }
  catch(err) {
      Mesazhi.innerHTML = err;
  }

  //==============================================================================================
  //==============================================================================================
  var Mesazhi1 , y;
  Mesazhi1=document.getElementById("id2");
  y = document.getElementById("fsurname").value;
   try {
    if(y == "") throw "This feils should not be empty";
    if(y.match(/[0-9]/)) throw "Name only contains characters";
    if(y.match(/[A-Za-z]+[0-9]/)) throw "Name only contains characters";
    if(x.match(/[A-Za-z]/)) throw null;
    }
    catch(err) {
        Mesazhi1.innerHTML = err;
    }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi2 , a;
  Mesazhi2=document.getElementById("id3");
  a = document.getElementById("ftel").value;
    try {
      if(a == "") throw "This feils should not be empty";
      if(a.match(/[A-Za-z]/)) throw "Telephone only contains numbers";
      if(a.match(/[A-Za-z]+[0-9]/)) throw "Telephone only contains numbers";
      if(a.length>12 || a.length<12) throw "Telephone length must be 10 digit";
      if(a.length == 12) throw null;
      }
      catch(err) {
          Mesazhi2.innerHTML = err;
      }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi3 , b;
  Mesazhi3=document.getElementById("id4");
  b = document.getElementById("fpersonal").value;
    try {
      if(b == "") throw "This feils should not be empty";
      if(b.match(/[A-Za-z]/)) throw "Personal number only contains numbers";
      if(b.match(/[A-Za-z]+[0-9]/)) throw "Personal number only contains numbers";
      if(b.length>10 || b.length<10) throw "Personal number length must be 10 digit";
      if(b.length==10) throw null;
      }
      catch(err) {
          Mesazhi3.innerHTML = err;
      }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi4 , c;
  Mesazhi4=document.getElementById("id5");
  c = document.getElementById("femail").value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  try{
  if(c.match(mailformat)) throw null;
  else throw "Invalid format of email, email must be like: someone@domain.com"
  }
  catch(err){
      Mesazhi4.innerHTML = err;
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi5, d;
  Mesazhi5 = document.getElementById("id6");
  d = document.getElementById("fresidenca").value;
  try {
    if(d == "") throw "This feils should not be empty";
    if(d.match(/[0-9]/)) throw "Name only contains letters";
    if(d.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)) throw "Name only contains letters";
    if(d.match(/[A-Za-z]/)) throw null;
  }
  catch(err) {
      Mesazhi5.innerHTML = err;
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi6, e;
  Mesazhi6 = document.getElementById("id7");
  e = document.getElementById("fdestination").value;
  try {
    if(e == "") throw "This feils should not be empty";
    if(e.match(/[0-9]/)) throw "Name only contains letters";
    if(e.match(/[A-Za-z]+[0-9]+[!@#$%^&*()_+":><?]/)) throw "Name only contains letters";
    if(e.match(/[A-Za-z]/)) throw null;
  }
  catch(err) {
      Mesazhi6.innerHTML = err;
  }
  //==============================================================================================
  //==============================================================================================
  var Mesazhi7, f;
  Mesazhi7 = document.getElementById("id8");
  f = document.getElementById("fticket").value;
  try {
    if(f == "") throw "This feils should not be empty";
    if(f.match(/[A-Za-z]/)) throw "Personal number only contains numbers";
    if(f.match(/[A-Za-z]+[0-9]/)) throw "Personal number only contains numbers";
    if(f.length>100) throw "ticket number must be with 2 digit";
    if(f.length<10) throw null;
  }
  catch(err) {
      Mesazhi7.innerHTML = err;
  }
}
