var q1 = {
	question:'Who was the 2002 champion?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Brazil',
	image:'<img src="assets/images/brazilGermany.gif" id="image">',
	legend: '<div id="legend">Brazil Won the tournament, defeating Germany 2:0</div>'
};
var q2 = {
	question:"Who scored Spain's winning goal in the 2010 final",
	options: ['David Villa','Fernando Torres','Sergio Ramos','Andres Iniesta'],
	rightAnswer: 'Andres Iniesta',
	image:'<img src="assets/images/Iniesta.gif" id="image">',
	legend:'<div id="legend">Andres Iniesta scored the winning goal on minute 116 of over time </div>'
};
var q3 = {
	question:'What team did Germany beat in the 2014 final?',
	options: ['Argentina','Colombia','France','Spain'],
	rightAnswer: 'Argentina',
	image:'<img src="assets/images/gotzeGoal.gif" id="image">',
	legend:'<div id="legend">Germany defeated Messi\'s Argentina 1:0 with Mario Gotze\'s late goal</div>'
};
var q4 = {
	question:'What team has been in every single World Cup?',
	options: ['Uruguay','England','Brazil','Germany'],
	rightAnswer: 'Brazil',
	image:'<img src="assets/images/brazilDancing.gif" id="image">',
	legend:'<div id="legend">Brazil has participated in every one of the 20 World Cup finals.</div>'
};
var q5 = {
	question:'What country hosted the 1990 FIFA World Cup?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Italy',
	image:'<img src="assets/images/italia90.jpg" id="image">',
	legend:'<div id="legend">Italy was the host, Salvatore Schillaci was the top scorer of the tournament with 6 goals.</div>'
};
var q6 = {
	question:'Where was the first World Cup held?',
	options: ['England','Uruguay','Germany','Italy'],
	rightAnswer: 'Uruguay',
	image:'<img src="assets/images/uruguay1930.jpg" id="image">',
	legend:'<div id="legend">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var q7 = {
	question:'What player was sent off for headbutting an oponent in the 2006 final?',
	options: ['Zinedine Zidane','Andrea Pirlo','Thierry Henry','Marco Materazzi'],
	rightAnswer: 'Zinedine Zidane',
	image:'<img src="assets/images/zidaneHeadbutt.gif" id="image">',
	legend:'<div id="legend">Zinedine Zidane was sent off in his last-ever match, for headbutting Italy\'s Marco Materazzi\'s chest.</div>'
};
var q8 = {
	question:'Who is the all time top scorer?',
	options: ['Lionel Messi','Ronaldo Nazario de Lima','Pele','Miroslav Klose'],
	rightAnswer: 'Miroslav Klose',
	image:'<img src="assets/images/klose.gif" id="image">',
	legend:'<div id="legend">Germany\'s Miroslav Klose went on to score a record 16 goals across 4 consecutive tournaments between 2002 and 2014.</div>'
};
var q9 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="assets/images/argentina.jpg" id="image">',
	legend:'<div id="legend">Argentina beat West Germany on the 1986 final</div>'
};
var q10 = {
	question:'Where will the 2018 World Cup be played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="assets/images/russia2018.jpg" id="image">',
	legend:'<div id="legend">The 2018 World Cup in Russia will have a total of 13 sites, 16 stadiums, of which thirteen will be brand new and other three which will be completely refurbished. </div>'
};

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var currentQuestion = 0;
var userGuess = '';
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var userChoise ='';
var correctAnswer='';
var timeLeft = 20;
var counter = 0;

$(document).ready(function () {
$('.startButton').click(function() {
	displayNext();
});

//this is the function that starts the game


function answerSelection() {
	timeLeft = 20;
	counter = setInterval(timer,1000)
	$('.answerChoices').click(function () {
		userGuess = $(this).data('userGuess');
		rightAnswer = questions[currentQuestion].rightAnswer;
		if (userGuess === rightAnswer) {
			$('.gameBox').html('<div id="correctIncorrectHeader">Correct!</div>');
			$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
			$('.gameBox').append(questions[currentQuestion].image);
			resetTimer();
			correctAnswers++;
			currentQuestion++;
			setTimeout(displayNext,6500);
		} else {
			$('.gameBox').html('<div id="correctIncorrectHeader">Wrong!</div>')
			$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
			$('.gameBox').append(questions[currentQuestion].image);
			resetTimer();
			wrongAnswers++;
			currentQuestion++;
			setTimeout(displayNext,6500);
		}
	});
}

function displayNext () {
	// resetTimer();
	if (currentQuestion >= questions.length) {
		$('.gameBox').html('<div class="question">Let\'s see how you did!</div>');
		$('.gameBox').append('<div id="correctIncorrect">Correct Answers: '+correctAnswers+'</div>');
		$('.gameBox').append('<div id="correctIncorrect">Wrong Answers: '+wrongAnswers+'</div>')
		$('.gameBox').append('<div id="correctIncorrect">Unanswered Questions: '+unanswered+'</div>')
		$('.gameBox').append('<button class="restartButton hvr-radial-in">Restart Game?</button>')
			$('.restartButton').click(function () {
			$('.gameBox').empty();

			currentQuestion = 0;
			userGuess = '';
			correctAnswers = 0;
			wrongAnswers = 0;
			unanswered = 0;
			userChoise ='';
			correctAnswer='';
			timeLeft = 20;
			counter = 0;

			$('.gameBox').html("<button class='startButton btn btn-primary center-block'>Start</button>"); 
			$('.startButton').click(function() {
				displayNext();
			});
		});
		return false;
	}
	// counter = setInterval(timer,1000);
	$('.gameBox').html('<div class="timeLeft">Time Left: <span id="time">20</span></div>');
	var questionToAnswer = $('<div>').append(questions[currentQuestion].question).addClass('question');
	$('.gameBox').append(questionToAnswer);

	var questionsDiv = $('.gameBox');

	for (var i = 0; i<4 ; i++) {
		var newQuestionsDiv = $('<div>').append(questions[currentQuestion].options[i])
		.addClass('answerChoices hvr-back-pulse')
		.data('rightAnswer', questions[currentQuestion].rightAnswer)
		.data('userGuess', questions[currentQuestion].options[i]);
		questionsDiv.append(newQuestionsDiv);
	}
	answerSelection();
}


function timer() {
	if (timeLeft === 1) {
		$('.gameBox').html('<div id="correctIncorrectHeader"><b>Your time is up!</b></div>');
		$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
		$('.gameBox').append(questions[currentQuestion].image);
		resetTimer();
		unanswered++;
		currentQuestion++;
		setTimeout(displayNext,6500);
	}
	timeLeft--;
	$('#time').html(timeLeft);
}

function resetTimer () {
	clearInterval(counter);
	counter = 0;
}
});
