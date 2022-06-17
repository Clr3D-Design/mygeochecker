console.log('script started');

document.getElementById("b1").addEventListener("click",qu1);
document.getElementById("b2").addEventListener("click",qu2);
document.getElementById("b3").addEventListener("click",qu3);
document.getElementById("b4").addEventListener("click",qu4);
document.getElementById("b5").addEventListener("click",qu5);
document.getElementById("b6").addEventListener("click",qu6);
document.getElementById("bcoord").addEventListener("click",coord);
q1 = Boolean(false);
q2 = Boolean(false);
q3 = Boolean(false);
q4 = Boolean(false);
q5 = Boolean(false);
q6 = Boolean(false);
var qg = 0;
var i = 0;
document.getElementById("Coord").textContent="Final: NXX°XX.XXX EXX°XX.XXX";
document.getElementById("ch1").textContent="";
document.getElementById("ch2").textContent="";
document.getElementById("ch3").textContent="";
document.getElementById("ch4").textContent="";
document.getElementById("ch5").textContent="";
document.getElementById("ch6").textContent="";
pcoord.textContent=" ";
document.getElementById("divqu1").style.borderColor="black";
document.getElementById("divqu2").style.borderColor="black";
document.getElementById("divqu3").style.borderColor="black";
document.getElementById("divqu4").style.borderColor="black";
document.getElementById("divqu5").style.borderColor="black";
document.getElementById("divqu6").style.borderColor="black";

function qu1(){
  console.log("qu1 called");
  let i1 = document.getElementById("i1");
  let a1 = document.getElementById("ch1")
  if(i1.value=="19:25" || i1.value=="18:25" || i1.value=="19:20" || i1.value=="18:20" || i1.value=="06:20" || i1.value=="06:25" || i1.value=="07:25" || i1.value=="07:20"){
    a1.textContent="Antwort korrekt";
    q1=true;
    qg = qg+1;
    document.getElementById("divqu1").style.borderColor="green";
  } else {
    a1.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu1").style.borderColor="red";
  }
};

function qu2(){
  console.log("qu2 called");
  let i2 = document.getElementById("i2");
  let a2 = document.getElementById("ch2")
  if(i2.value=="391,123"){
    a2.textContent="Antwort korrekt";
    q2 = true;
    qg = qg+1;
    document.getElementById("divqu2").style.borderColor="green";
  } else {
    a2.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu2").style.borderColor="red";
  }
};

function qu3(){
  console.log("qu3 called");
  let i3 = document.getElementById("i3");
  let a3 = document.getElementById("ch3")
  if(i3.value=="5"){
    a3.textContent="Antwort korrekt";
    q3 = true;
    qg = qg+1;
    document.getElementById("divqu3").style.borderColor="green";
  } else {
    a3.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu3").style.borderColor="red";
  }
};

function qu4(){
  console.log("qu4 called");
  let i4 = document.getElementById("i4");
  let a4 = document.getElementById("ch4")
  if(i4.value=="8"){
    a4.textContent="Antwort korrekt";
    q4 = true;
    qg = qg+1;
    document.getElementById("divqu4").style.borderColor="green";
  } else {
    a4.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu4").style.borderColor="red";
  }
};

function qu5(){
  console.log("qu5 called");
  let i5 = document.getElementById("i5");
  let a5 = document.getElementById("ch5")
  if(i5.value=="512"){
    a5.textContent="Antwort korrekt";
    q5 = true;
    qg = qg+1;
    document.getElementById("divqu5").style.borderColor="green";
  } else {
    a5.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu5").style.borderColor="red";
    }
};

function qu6(){
  console.log("qu6 called");
  let i6 = document.getElementById("i6");
  let a6 = document.getElementById("ch6")
  if(i6.value=="Brandhöhe"){
    a6.textContent="Antwort korrekt";
    q6 = true;
    qg = qg+1;
    document.getElementById("divqu6").style.borderColor="green";
  } else {
    a6.textContent="Das ist leider nicht richtig.";
    document.getElementById("divqu6").style.borderColor="red";
    }
};

function coord(){
  document.getElementById("Coord").textContent="Final: NXX°XX.XXX EXX°XX.XXX";
  qg=0;
  console.log("coord called");
  pcoord = document.getElementById("pcoord");
  pcoord.textContent=" ";
  qu1();
  qu2();
  qu3();
  qu4();
  qu5();
  qu6();
  console.log(qg);
  
  if(qg==6){
    document.getElementById("Coord").textContent="Final: N50°50.479 E14°44.714";
  } else {
    h = String("");
    i=0;
    if(q1==false){
      h = h+"Antwort 1";
      i=1;
    }
    if(q2==false){
      if(i==1){
        h = h + ", ";
      };
      h = h+"Antwort 2";
      i=1;
    };
    if(q3==false){
      if(i==1){
        h = h + ", ";
      };
      h = h+"Antwort 3";
      i=1;
    };
    if(q4==false){
      if(i==1){
        h = h + ", ";
      };
      h = h+"Antwort 4";
      i=1;
    };
    if(q5==false){
      if(i==1){
        h = h + ", ";
      };
      h = h+"Antwort 5";
      i=1;
    };
    if(q6==false){
      if(i==1){
        h = h + ", ";
      };
      h = h+"Antwort 6";
      i=1;
    };
    pcoord.textContent="Antwort falsch: " + h;      
  } 
};
