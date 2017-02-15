//Bind ready event
$(document).ready(function () {

    //Variables
    var colors = ['blue', 'red', 'yellow', 'green'];

    //Create Color divs
    function createDivs(divName) {

        //1. Enhanced for-loop approach
        var str = "";
        for (var i = 0; i < divName.length; i++) {
            str += "<div id='" + divName[i] + "' />";
        }
        $('#container').append(str);

    }

    //Create Random
    function randomNumber(min, max){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    var promptColor = colors[randomNumber(0, colors.length - 1)];
    createDivs(colors);


    //1. Task :  Display text to prompt user to click color

    //2. Task : When color is click alert if true or false

        //2a. FALSE  - Prompt user they clicked the wrong color

        //2b. TRUE -  Prompt user to click another color


    //Binding on Click Events
    $('div').on('click', function () {
        console.log(this.id  + ' was clicked');//information stored but not shown on page
    });
});
