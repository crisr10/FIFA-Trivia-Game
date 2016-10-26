var q1 = {
	question:'Who was the 2002 champion?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Brazil',
	image:'<img src="https://media.giphy.com/media/AkgFjTCtqyLyo/giphy.gif" id="image">',
	legend: '<div id="legend">Brazil Won the tournament, defeating Germany 2:0</div>'
};
var q2 = {
	question:"Who scored Spain's winning goal in the 2010 final",
	options: ['David Villa','Fernando Torres','Sergio Ramos','Andres Iniesta'],
	rightAnswer: 'Andres Iniesta',
	image:'<img src="https://media.giphy.com/media/2TbHEBc4z8qnm/giphy.gif" id="image">',
	legend:'<div id="legend">Andres Iniesta scored the winning goal on minute 103 of over time </div>'
};
var q3 = {
	question:'What team did Germany beat in the 2014 final?',
	options: ['Argentina','Colombia','France','Spain'],
	rightAnswer: 'Argentina',
	image:'<img src="http://33.media.tumblr.com/e7a7a0b4582c994fcd471073627089d8/tumblr_n8pj4eaip51tu2oiko1_400.gif" id="image">',
	legend:'<div id="legend">Germany defeated Messi\'s Argentina 1:0 with Mario Gotze\'s late goal</div>'
};
var q4 = {
	question:'What team has been in every single World Cup?',
	options: ['Uruguay','England','Brazil','Germany'],
	rightAnswer: 'Brazil',
	image:'<img src="https://media.giphy.com/media/csDBjMwrQfnlC/giphy.gif" id="image">',
	legend:'<div id="legend">Brazil has participated in every one of the 20 World Cup finals.</div>'
};
var q5 = {
	question:'What country hosted the 1990 FIFA World Cup?',
	options: ['Argentina','Brazil','Germany','Italy'],
	rightAnswer: 'Italy',
	image:'<img src="https://theburningbloggerofbedlam.files.wordpress.com/2014/06/great-italia90a.jpg" id="image">',
	legend:'<div id="legend">Italy was the host, Salvatore Schillaci was the top scorer of the tournament with 6 goals.</div>'
};
var q6 = {
	question:'Where was the first World Cup held?',
	options: ['England','Uruguay','Germany','Italy'],
	rightAnswer: 'Uruguay',
	image:'<img src="http://www.soccergamblers.com/images/1930-uruguay-world-cup.jpg" id="image">',
	legend:'<div id="legend">Uruguay was the host for the first World Cup. It was played in the year 1930.</div>'
};
var q7 = {
	question:'What player was sent off for headbutting an oponent in the 2006 final?',
	options: ['Zinedine Zidane','Andrea Pirlo','Thierry Henry','Marco Materazzi'],
	rightAnswer: 'Zinedine Zidane',
	image:'<img src="https://media.giphy.com/media/nHFRIyStg60X6/giphy.gif" id="image">',
	legend:'<div id="legend">Zinedine Zidane was sent off in his last-ever match, for headbutting Italy\'s Marco Materazzi\'s chest.</div>'
};
var q8 = {
	question:'Who is the all time top scorer?',
	options: ['Lionel Messi','Ronaldo Nazario de Lima','Pele','Miroslav Klose'],
	rightAnswer: 'Miroslav Klose',
	image:'<img src="https://media.giphy.com/media/l7IRjqleM7eXS/giphy.gif" id="image">',
	legend:'<div id="legend">Germany\'s Miroslav Klose went on to score a record 16 goals across 4 consecutive tournaments between 2002 and 2014.</div>'
};
var q9 = {
	question:'What teams played the final in Mexico 1986',
	options: ['Brazil and West Germany','Argentina and West Germany','Italy and Brazil','Argentina and Brazil'],
	rightAnswer: 'Argentina and West Germany',
	image:'<img src="http://i.telegraph.co.uk/multimedia/archive/02972/maradona_1986_2972173b.jpg" id="image">',
	legend:'<div id="legend">Argentina beat West Germany on the 1986 final</div>'
};
var q10 = {
	question:'Where will the 2018 World Cup be played?',
	options: ['Qatar','Germany','China','Russia'],
	rightAnswer: 'Russia',
	image:'<img src="http://img.fifa.com/mm/photo/tournament/mascot/02/84/55/65/2845565_xbig-lnd.jpg" id="image">',
	legend:'<div id="legend">Andres Iniesta scored the winning goal on minute 103 of over time </div>'
};

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var currentQuestion = 0;
var userGuess = '';
var correctAnswers = 0;
var wrongAnswers = 0;
var userChoise ='';
var correctAnswer='';
var timeLeft = 10;

$('.startButton').click(function() {
	startGame();
});

//this is the function that starts the game
function startGame() {
	//removes the start button 
	$('.startButton').fadeOut(1000);

	displayNext();
}

function answerSelection() {
	$('.answerChoices').click(function () {
		userGuess = $(this).data('userGuess');
		rightAnswer = questions[currentQuestion].rightAnswer;
		if (userGuess === rightAnswer) {
			$('.gameBox').html('Correct!').addClass('question');
			$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
			$('.gameBox').append(questions[currentQuestion].image);
			correctAnswers++;
			currentQuestion++;
			setTimeout(displayNext, (6500));
		} else {
			$('.gameBox').html('Wrong!').addClass('question');
			$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
			$('.gameBox').append(questions[currentQuestion].image);
			wrongAnswers++;
			currentQuestion++;
			setTimeout(displayNext, (6500));
		}
	});
}

function displayNext () {
	if (currentQuestion >= questions.length) {
		$('.gameBox').html('<div class="question">Test Completed</div>');
		$('.gameBox').append('<div id="correctIncorrect">Correct Answers: '+correctAnswers+'</div>');
		$('.gameBox').append('<div id="correctIncorrect">Wrong Answers: '+wrongAnswers+'</div>')
		return false;
	}
	resetTimer();
	var counter = setInterval(timer,1000);
	$('.gameBox').html('<div class="timeLeft">Time Left: <span id="time">10</span></div>');
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
	if (timeLeft<1) {
		$('.gameBox').html('You Run Out of Time!').addClass('question');
		$('.gameBox').append(questions[currentQuestion].legend).addClass('question');
		$('.gameBox').append(questions[currentQuestion].image);
		wrongAnswers++;
		currentQuestion++;
		setTimeout(displayNext, 6500)
		return false;
	}
	timeLeft--;
	$('#time').html(timeLeft);
}

function resetTimer () {
	timeLeft = 10;
	clearInterval(timer);
}