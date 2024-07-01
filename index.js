// Current time
let time = document.getElementById("currentTimeUTC");

setInterval(() =>{
    let date = new Date();
    time.innerHTML = date.toUTCString();
}, 1000);



// Current Week Day
let weekDay = document.getElementById("currentDay");

var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

setInterval(() =>{
    let day = new Date().getUTCDay();
    currentDay = daylist[day]
    weekDay.innerHTML =  currentDay          
},1000);       