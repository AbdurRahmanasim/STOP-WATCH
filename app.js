var hr = 00 ;
var min = 00 ;
var sec = 00 ;
var msec = 00 ;

var hrheading = document.getElementById("hr");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval ;


function timer(){
    msec++
    msecheading.innerHTML = msec;
    if(msec >= 99){
        sec++
        secheading.innerHTML = sec ;
        msec = 00 ;
    }
    else if(sec >= 60){
        min++
        minheading.innerHTML = min ;
        sec = 00 ;
    }
    else if(min >= 60){
        hr++
        hrheading.innerHTML = hr ;
        min = 00 ;

    }
}
function start(){
interval = setInterval(timer , 10)
   var staart = document.getElementById("staart")
   staart.style.visibility = "hidden" ;
 
}
function stop(){
    clearInterval(interval)
    var staart = document.getElementById("staart")
    staart.style.visibility = "visible" ;
}

function reset(){
    hr = "00" ;
    min = "00" ;
    sec = "00" ;
    msec = "00" ;
    msecheading.innerHTML = msec ;
    secheading.innerHTML = sec ;
    minheading.innerHTML = min ;
    hrheading.innerHTML = hr ;
    
    stop()
    var staart = document.getElementById("staart")
    staart.style.visibility = "visible" ;
}