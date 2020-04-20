// Send email to selected address
var EmailnSend = document.getElementById("sendMailMailID");
EmailnSend.onclick = function () {
    //Selecteer de email (send to)
        var sel = document.getElementById('to');
        var opt = sel.options[sel.selectedIndex];

        function getSelectedOption(sel) {
            var opt;
            for ( var i = 0, len = sel.options.length; i < len; i++ ) {
                opt = sel.options[i];
                if ( opt.selected === true ) {
                    break;
                }
            }
            return opt;
        }
        
        // get selected option in sel (reference obtained above)
        var opt = getSelectedOption(sel);
        var to = opt.value;
        stringTo = String(to);

        //Selecteer de subject
        var sub = document.getElementById('subject').value;
        stringSub = String(sub);

        //Selecteer de message
        var MSG = document.getElementById('message').value;
        stringmMSG = String(MSG);

        window.open("mailto:" + stringTo + "?subject=" + stringSub + "&body=" + stringmMSG);
       
        // Play open sound
        audioOpen.play();
};