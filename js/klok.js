// SCRIPT: Time rechts -> onder
var runInt =setInterval(loadI,1000);

function loadI() {
    var loadDate = new Date(); // for now
    var h = loadDate.getHours(); // => 9
    var m =  loadDate.getMinutes(); // =>  30
    var s= loadDate.getSeconds(); 
    var uur = (h + ":" +  m + ":" + s +" ").toString();
    document.getElementById("windowsTimeID").innerHTML = (uur);
}