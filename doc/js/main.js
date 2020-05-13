
const toda = new Date()//.getDate()-1
//today = Date.now();/
const today = toda.getDay()-1;


let proxy = "https://api.codetabs.com/v1/proxy?quest=";
let url = "https://rentry.co/ru-stream-plan/raw"
const data = fetch(proxy+url).then(res => res.text()).then(res => { //.then(res => console.log(res))
  let te;
  te = res.split("\n");
  // console.log(te);
  // console.log(te[today+12].split(":"));
  let a = "";
  // console.log(te[today+12].split(":")[1].length);
  if(te[today+12].split(":")[1].length<3){
    // console.log("hallo");
    document.querySelector("#t1").innerHTML = te[8];
    document.querySelector("#t2").innerHTML = te[9];
  }
  else{
    document.querySelector("#t1").innerHTML = te[20];
    document.querySelector("#t2").innerHTML = te[21];
    document.querySelector("#t3").innerHTML = te[22];
    document.querySelector("#game2").innerHTML = te[today+12].split(":")[1];
    document.querySelector("footer").style.height = "100px";
  }
  // console.log(te[7]);
  //document.querySelector("#t1").innerHTML = te[8];
  return te;
}).then(te => te[today].split(":")[1]).then(res => document.querySelector("#game").innerHTML = res)
/*
const dataS = data;
function display(){
  console.log(dataS[today]);
}
*/
