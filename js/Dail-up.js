// dail select
var dailSelect = document.getElementById("dailUpOptions");
dailSelect.onclick = function () {
//Selecteer de dail-up
    var sele = document.getElementById('dailUpOptions');
    var opti = sele.options[sele.selectedIndex];

    function getSelectedOption(sele) {
        var opti;
        for ( var i = 0, len = sele.options.length; i < len; i++ ) {
            opti = sele.options[i];
            if ( opti.selected === true ) {
                break;
            }
        }
        return opti;
    }
    
    // get selected option in sel (reference obtained above)
    var opti = getSelectedOption(sele);
    var valueOpti = opti.value;
    stringTo = String(valueOpti);
    document.getElementById("dialIdInput").placeholder = valueOpti;
};
