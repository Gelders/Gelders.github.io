// <!-- De windows van de mail up.-->
var oneMail = 1;
document.getElementById("mailID").ondblclick = function () {
    var ok = true;
    if (ok === true && oneMail == 1) { 
        //<div></div>
        var outerDivMail = document.createElement("div");
        outerDivMail.className = "ui_windowMailMail  ui_email";
        outerDivMail.style ="left: 100px; top: 100px;";
        outerDivMail.id = "emailMeIDShow";

            //<div><div>
            outerDivMail.appendChild(inDivDail = document.createElement('div'));
            inDivDail.className = "ui_topbarPhoto";
            inDivDail.id = "inDivDail"; 
        
                //<div><div><div>1
                inDivDail.appendChild(inDiv2Dail = document.createElement("div"));
                inDiv2Dail.className = "ui_titlePhoto";
                inDiv2Dail.id = "inDiv2Dail";

                    //<div><div><div>1<img>
                    inDiv2Dail.appendChild(imgDail = document.createElement("img"));
                    imgDail.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA10lEQVQokY2S0RHDMAhDpV4HcyYDJoPN1A/Hjpu0TXWnn8TAswwlwd2Fk9yd528XSUJmCsC0mUkS7vxcugDuX4cMupXosfz9wUdFBNwDADUazcnZ2jxaVe+l7GDkgAyQocfosrUNALBtG1prIKkx1QyoSkiAWYc02wNbwxqWhB4c1AWZHQYg7sXfJJJvWUYAmYmqws/iqhKAcY1ZdMQozUNrYO5OksrMS4gRAUk8lqRfUjD7uCQjh9V/vjP6pJNu35kd7vOe74gXnTH7mhyeu+03yB37Ov0FcBYB8lB2fZwAAAAASUVORK5CYII=";
                    
                    //<div><div><div>1<span>
                    inDiv2Dail.appendChild(spanDail = document.createElement("span"));
                    spanDail.id="spanDailID";
                    spanDail.innerHTML = "&nbsp;&nbsp;Dial-Up Contact Information";

                
        //Het koppelen "onderaan" iconAreaID's div (einde)
        document.getElementById("iconAreaID").appendChild(outerDivMail);
        
        //Maak het Movable
        $( "#dailIDShow" ).draggable({ containment: "#containment-wrapper", scroll: false }); 

        //Zodat er maar 1 per gemaakt kan worden
        oneMail++;

//FUNCTION        //Laad de script(functie) in zodat je als je iets selecteerd dat je de juiste waarde ziet "Dail-up.js"
        function loadDailupScript(url) {
            var scriptloadMailScript = document.createElement("script");  
            scriptloadMailScript.src = url;  //
            scriptloadMailScript.id = "scriptloadMailScriptID";

            document.body.appendChild(scriptloadMailScript);  
        };
        loadDailupScript("/js/sendMail.js");

        //Play open sound
        audioOpen.play();

//FUNCTION          //Remove if click on X (ui en script)
        var DailClose = document.getElementById("emailMeCloseButtonID");
        DailClose.onclick = function() {
            //Remove divDail
            var elDailUI = document.getElementById("emailMeIDShow");
            elDailUI.remove();

            //Remove scriptloadMailScriptID
            var elscriptloadMailScriptID = document.getElementById("scriptloadMailScriptID");
            elscriptloadMailScriptID.remove();

            //Reset 
            oneMail = 1;

            // Play close sound
            audioClose.play();
        };
    }
};

// //  Dit is om ervoor te zorgen dat de email gezien kan worden
// var EmailnOpen = document.getElementById("mailID");
// EmailnOpen.ondblclick = function () {
//         document.getElementById("emailMeIDShow").style.display = "block";
        
//         // Play open sound
//         audioOpen.play();
// };
    
// var EmailClose = document.getElementById("emailMeCloseButtonID");
// EmailClose.onclick = function() {
//     document.getElementById("emailMeIDShow").style.display = "none";

//     // Play close sound
//     audioClose.play();
// };