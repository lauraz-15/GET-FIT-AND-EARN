
var randomNumber1 = Math.floor(Math.random() * 14) + 1; //1-14

var randomGif = "gif" + randomNumber1 + ".gif"; //gif1- gif14

var randomImageSource = "images/" + randomGif; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




//Alarm every hour:

var alarmSound = new Audio();
alarmSound.src = 'alarm.mp3';


var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+nhour+":"+nmin+":"+nsec+ap+"";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);


function initAlarm() {
  alarmSound.play();
};

var mins = datetime.mins();

if(mins == "08"){
    initAlarm();
 }

/* If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
*/
