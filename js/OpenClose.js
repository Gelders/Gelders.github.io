//Open en close able
// Dit is om de sticky note te sluiten
var closeNote = document.getElementById("stickyCloseId");
    closeNote.onclick = function() {
        var el = document.getElementById("stickyID");
            el.remove();
        
            // Play close sound
            audioClose.play();
        };   

//  Dit is om ervoor te zorgen dat de email gezien kan worden
var EmailnOpen = document.getElementById("mailID");
EmailnOpen.ondblclick = function () {
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

//  Dit is om ervoor te zorgen dat de IG gezien kan worden
var IGinOpen = document.getElementById("IgnImgID");
IGinOpen.ondblclick = function () {
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    openInNewTab("https://www.instagram.com/petergelders/");

    // Play open sound
    audioOpen.play();
};

//  Otherwebsites openen
var OtherOpen = document.getElementById("BioImgID");
OtherOpen.ondblclick = function () {
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    openInNewTab("https://campsite.bio/petergeldersfotografie");

    // Play open sound
    audioOpen.play();
};

//  Dit is om ervoor te zorgen dat de linkedin gezien kan worden
var linkedinOpen = document.getElementById("linkedinImgID");
linkedinOpen.ondblclick = function () {
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

//  Dit is om ervoor te zorgen dat de aboutme folder gezien kan worden  
var aboutMe = document.getElementById("aboutMeId");
    aboutMe.ondblclick = function () {
            document.getElementById("aboutMeIDShow").style.display = "block";
            
            // Play open sound
            audioOpen.play();
    };
    
var aboutMeClose = document.getElementById("AboutImgCloseButtonID");
    aboutMeClose.onclick = function() {
        document.getElementById("aboutMeIDShow").style.display = "none";

        // Play close sound
        audioClose.play();
    };

// <!-- Dit is om ervoor te zorgen dat de GROOOOOOOOTE foto folder gezien kan worden-->
var photoIdMe = document.getElementById("photoId");
    photoIdMe.ondblclick = function () {
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

// <!-- Dit is om ervoor te zorgen dat de startmenu gezien kan worden en als je op de dekstop klikt die ook terug weggaat -->        
var startB = document.getElementById("startbuttonId");
    startB.onclick = function() {
        document.getElementById("openMenuId").style.display = "block";
    };

var startDesktop = document.getElementById("containment-wrapper");
    startDesktop.onclick = function() {
        document.getElementById("openMenuId").style.display = "none";
    };
