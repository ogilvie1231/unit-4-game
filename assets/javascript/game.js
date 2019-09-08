
$(document).ready(function () {


    var wins = 0;
    var losses = 0;
    var targetNumber;
    var numberOptions;
    var counter;

    // creating a reset that also holds all the random numbers.
    var restart = function () {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        counter = 0;
        $("#randomNumber").text("Target Number: " + targetNumber);
        $("#scoreIs").text(`Your total is: ${counter}`);
        $('.image').each(function () {
            var newRandom = Math.floor(Math.random() * 12) + 1
            $(this).attr('value', newRandom)
        });
    };

    // Setting a way to win, lose and reset upon each scenario.
    function checkScore(score) {
        if (score === targetNumber) {
            wins++;
            $('#wins').text(`Wins: ${wins}`)
            restart();
        }
        else if (score > targetNumber) {
            losses++;
            $('#losses').text(`Losses: ${losses}`)
            restart();
        }
    };
    // Starting the game off under the reset parameters
    restart()



    // using the 'value' from the reset to give 'each' image a random value, adding the value to the counter and placing the text in html. 
    $('.image').click(function () {
        var crystalValue = $(this).attr('value');
        counter += parseInt(crystalValue);
        $('#scoreIs').text(`Your total is: ${counter}`);
        checkScore(counter);
        console.log(crystalValue)

    });

});
