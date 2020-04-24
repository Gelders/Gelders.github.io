// <!-- Moveable / dragable-->
//Other scripts Jquery
$( function() {
    //ICONS
    $( "#draggableEmail" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggablefoto" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggableMe" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggableIG" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggableBellen" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggableLindedin" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#draggableBio" ).draggable({ containment: "#containment-wrapper", scroll: false });
    
    //UI
    $( "#stickyID" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#aboutMeIDShow" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#showImgId2" ).draggable({ containment: "#containment-wrapper", scroll: false }); 
    $( "#emailMeIDShow" ).draggable({ containment: "#containment-wrapper", scroll: false });    
    $( "#linkedinID" ).draggable({ containment: "#containment-wrapper", scroll: false });  
    $( "#draggableModal" ).draggable({ containment: "#containment-wrapper", scroll: false });    
} );
