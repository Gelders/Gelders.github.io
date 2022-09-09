// <!-- De windows van de dail up.-->
var oneDail = 1;
document.getElementById("draggableBellen").ondblclick = function () {
    var ok = true;
    if (ok === true && oneDail == 1) { 
        //<div></div>
        var outerDivDail = document.createElement("div");
        outerDivDail.className = "ui_windowPhotoDail";
        outerDivDail.style.display =" block";
        outerDivDail.id = "dailIDShow";

            //<div><div>
            outerDivDail.appendChild(inDivDail = document.createElement('div'));
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

                //<div><div><div>
                inDivDail.appendChild(inDiv3Dail = document.createElement("div"));
                inDiv3Dail.className = "sendrowMail";

                    //<div><div><div><button>
                    inDiv3Dail.appendChild(buttonDail = document.createElement("button"));
                    buttonDail.className = "ui_closeboxPhoto";
                    buttonDail.id = "dailMeCloseButtonID";

            //<div><button>
            outerDivDail.appendChild(buttonDailSend = document.createElement('button'));
            buttonDailSend.className = "sendMailMail";

                 //<div><button><img>
                 buttonDailSend.appendChild(buttonDailSendImg = document.createElement('img'));
                 buttonDailSendImg.src = "/images/dialup.png";

            //<div><div>
            outerDivDail.appendChild(inDiv4Dail = document.createElement('div'));
            inDiv4Dail.className = "emailfieldMail";

                //<div><div><select>
                inDiv4Dail.appendChild(selectDail = document.createElement('select'));
                selectDail.className = "emailInputMail";
                selectDail.id = "dailUpOptions";
                selectDail.style = "background-color:#EEE;";

                    //<div><div><select><option>1
                    selectDail.appendChild(optionDail1 = document.createElement('option'));
                    optionDail1.value = "0123456789";
                    optionDail1.innerHTML = "Mobile phone | Peter Gelders";

                    //<div><div><select><option>2
                    selectDail.appendChild(optionDail2 = document.createElement('option'));
                    optionDail2.value = "Peter@fake-email.com";
                    optionDail2.innerHTML = "Teams ID";

                    //<div><div><select><option>3
                    selectDail.appendChild(optionDail3 = document.createElement('option'));
                    optionDail3.value = "Peter@fake-email.com";
                    optionDail3.innerHTML = "Webx Teams";

            //<div><div>
            outerDivDail.appendChild(inDiv5Dail = document.createElement('div'));
            inDiv5Dail.className = "emailfieldMail";

                //<div><div><input> 
                inDiv5Dail.appendChild(inputDail = document.createElement('input'));
                inputDail.className = "emailInputMail";
                inputDail.id = "dialIdInput";
                inputDail.readonly = "readonly";
                
        //Het koppelen "onderaan" iconAreaID's div (einde)
        document.getElementById("iconAreaID").appendChild(outerDivDail);
        
        //Maak het Movable
        $( "#dailIDShow" ).draggable({ containment: "#containment-wrapper", scroll: false }); 

        //Zodat er maar 1 per gemaakt kan worden
        oneDail++;

//FUNCTION        //Laad de script(functie) in zodat je als je iets selecteerd dat je de juiste waarde ziet "Dail-up.js"
        function loadDailupScript(url) {
            var scriptloadDailupScript = document.createElement("script");  
            scriptloadDailupScript.src = url;  //
            scriptloadDailupScript.id = "scriptloadDailupScriptID";

            document.body.appendChild(scriptloadDailupScript);  
        };
        loadDailupScript("/js/Dail-up.js");

        //Play open sound
        audioOpen.play();

//FUNCTION          //Remove if click on X (ui en script)
        var DailClose = document.getElementById("dailMeCloseButtonID");
        DailClose.onclick = function() {
            //Remove divDail
            var elDailUI = document.getElementById("dailIDShow");
            elDailUI.remove();

            //Remove scriptloadDailupScriptID
            var elscriptloadDailupScriptID = document.getElementById("scriptloadDailupScriptID");
            elscriptloadDailupScriptID.remove();

            //Reset 
            oneDail = 1;

            // Play close sound
            audioClose.play();
        };
    }
};
