
const toda = new Date()//.getDate()-1
//today = Date.now();/
const today = toda.getDay()-1;


function result (){

fetch("https://api.telegram.org/bot1208608965:AAFDpzSci4bV_WRfI4b6PsTaRoNWM77Xy6s/getUpdates").then(res => res.json()).then(res => {
  let max_votes = 0;
  let text_votes = "";
  let msg = res.result;
  console.log(res)
  if(res.result.length>=10){
    let updateID = res.result[8].update_id;
    fetch("https://api.telegram.org/bot1208608965:AAFDpzSci4bV_WRfI4b6PsTaRoNWM77Xy6s/getUpdates?offset="+updateID);
  }

  for (let i=0;i<msg.length;i++){
    try{
    // console.log(msg[i].poll.is_closed);
      if(msg[i].poll.is_closed == true){
        max_votes = 0;
        text_votes = 0;
        let msgpoll = msg[i].poll.options;
        // console.log(msgpoll)
        for (let j=0;j<msgpoll.length;j++){
          // console.log(max_votes);
          // console.log(msgpoll[j])
          if(msgpoll[j].voter_count >= max_votes){
            max_votes = msgpoll[j].voter_count;
            text_votes = msgpoll[j].text;

          }
        }
      }
    }
    catch {continue}
  }
    console.log(text_votes);
    document.querySelector("#game").innerHTML = text_votes;
})
}



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
}).then(te => te[today].split(":")[1]).then(res => document.querySelector("#game").innerHTML = res).then(res => {
  setTimeout(()=>{
    console.log(document.getElementById("game").innerHTML);

       let a = document.querySelector("#game").innerHTML
  if(a.includes("Aud") ){
    document.querySelector("#votinglink").style.display = "block"
    result()
  }

},100);
})
/*
const dataS = data;
function display(){
  console.log(dataS[today]);
}
*/






//
