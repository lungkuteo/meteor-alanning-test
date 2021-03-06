$(document).ready(function(){
    $('.button-collapse').sideNav({
        menuWidth: 260
    });
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: false, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false // Displays dropdown below the button
        }
    );
    $('.dropdown-user').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            gutter: 0, // Spacing from edge
            belowOrigin: true // Displays dropdown below the button
        }
    );
    $('.dropdown-button-userprofile').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false // Displays dropdown below the button
        }
    );
});
