//VARIABLES

var correctAnswers = 0;
var incorrectAnswers = 2;
var remainingTime = 15;

//STYLING

$(".submit").on("click", function() {

	$("#results").css("display", "block");

});

//LOGIC

//Resets everything
$(".retake").on("click", function() {

	$("#results").css("display", "none");
	$("li").removeClass("userGuess");
	correctAnswers = 0;
	incorrectAnswers = 2;
	$("#correctAnswers").text("");
	$("#incorrectAnswers").text("");
	remainingTime = 15;
	timer();

});

//Event that handles userGuess
$("li").on("click", function() {

	//The reason that this doesn't have a parent method is that it refers to an element, not a jQuery object
	var li = $(this);
	//Removes userGuess class from all other li for this parent
	$(li.parent().children("li")).removeClass("userGuess");
	//Adds userGuess class to most rencently selected li item for this parent
	$(this).addClass("userGuess");

});

//Event that handles the user submitting their answers

$(".submit").on("click", function () {

	// debugger;
	var guesses = $(".userGuess")

	for (i = 0; i < guesses.length; i++) {

		// debugger;
		//If the element with the userGuess class has a data-answer attribute, they guessed correctly 
		if ($(guesses[i]).data("answer")) {
			correctAnswers ++;
			incorrectAnswers --;
		}

 	}

 	$("#correctAnswers").text(" " + correctAnswers);
	$("#incorrectAnswers").text(" " + incorrectAnswers);

});


//Countdowns. When  times is up, automatically submit answers
function timer () {

	$("#remainingTime").text(remainingTime);

	var timer = setInterval(function(){ 

		remainingTime--;
		$("#remainingTime").text(remainingTime);

		if(remainingTime <= 0) {

			clearInterval(timer);
			console.log("Times Up");
			$("#results").css("display", "block");

			//==================

			// debugger;
			var guesses = $(".userGuess")

			for (i = 0; i < guesses.length; i++) {

				// debugger;
				if ($(guesses[i]).data("answer")) {
					correctAnswers ++;
					incorrectAnswers --;
				}

		 	}

		 	$("#correctAnswers").text(" " + correctAnswers);
			$("#incorrectAnswers").text(" " + incorrectAnswers);

		}; 

	}, 1000);

};

$( document ).ready(function() {

	timer();

});




