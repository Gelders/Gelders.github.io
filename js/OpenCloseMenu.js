//  Dit is om ervoor te zorgen dat de email via menu gezien kan worden
var EmailnOpen = document.getElementById("mailIDMenu");
EmailnOpen.onclick = function () {
        document.getElementById("emailMeIDShow").style.display = "block";
        
        // Play open sound
        audioOpen.play();
};
    
var EmailClose = document.getElementById("emailMeCloseButtonID");
EmailClose.onclick = function() {
    document.getElementById("emailMeIDShow").style.display = "none";

    // Play close sound
    audioClose.play();
};

// <!-- Dit is om ervoor te zorgen dat de GROOOOOOOOTE foto folder gezien kan worden via menu-->
var photoIdMe = document.getElementById("photoIDMenu");
    photoIdMe.onclick = function () {
            document.getElementById("showImgId2").style.display = "block";
            
            // Play open sound
            audioOpen.play();
    };
    
var closeImg = document.getElementById("ShowImgCloseButtonID2");
    closeImg.onclick = function() {
        document.getElementById("showImgId2").style.display = "none";

        // Play close sound
        audioClose.play();
    };

//  Dit is om ervoor te zorgen dat de IG gezien kan worden
var IGinOpen = document.getElementById("IGIDMenu");
IGinOpen.onclick = function () {
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    openInNewTab("https://www.instagram.com/petergelders/");

    // Play open sound
    audioOpen.play();
};

//  Dit is om ervoor te zorgen dat de linkedin gezien kan worden
var linkedinOpen = document.getElementById("LinkIDMenu");
linkedinOpen.onclick = function () {
        document.getElementById("linkedinID").style.display = "block";
        
        // Play open sound
        audioOpen.play();
};
    
var linkedinClose = document.getElementById("linkedInImgCloseButtonID");
linkedinClose.onclick = function() {
    document.getElementById("linkedinID").style.display = "none";

    // Play close sound
    audioClose.play();
};

//runIDMenu
var RunID = document.getElementById("runIDMenu");
RunID.onclick = function () {
    document.getElementById("draggableModal").style.display = "block"; 

    // Play open sound
    audioOpen.play();
};

var CloseRunID = document.getElementById("modalBtnOk");
CloseRunID.onclick = function () {
    // Play close sound
    audioClose.play();

    document.getElementById("draggableModal").remove();
};

//refreshIDMenu
//  Dit is om ervoor te zorgen dat de pagina refresh wordt met een animatie
//kijk bij de css van bsod /* voor de refresh */.solidBlack / 
var reOpen = document.getElementById("refreshIDMenu");
reOpen.onclick = function () {

    document.getElementById("blackScreenID").style.display = "block";
    
        // Play open sound
        audioShutdown.play();
        audioReboot.play();

        //Wacht 3 seconden
        setTimeout(() => {location.reload();}, 2000);
};