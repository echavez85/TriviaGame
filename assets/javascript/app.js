// Declare global variables
var time = 15;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayPicker = 0;

var question01 = {
    question: "Which queen did a jumping death drop from a box during All Stars Season 3?",
    answerChoices: ["Milk", "Morgan McMichaels", "Aja", "Trixie Mattel"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    correct: "Aja",
    image: "./assets/images/ajadeathdrop.gif"
};


var question02 = {
    question: "Which queen is known for popularizing the catchphrase 'Not today, Satan'?",
    answerChoices: ["Joslyn Fox", "Darienne Lake", "Vivacious", "Bianca del Rio"],
    values: ["incorrect", "incorrect", "incorrect", "correct"],
    correct: "Bianca del Rio",
    image: "./assets/images/biancanottoday.gif"
};

var question03 = {
    question: "Which queen is known for the catchphrase 'Back Rolls?'?",
    answerChoices: ["Coco Montrese", "Adore Delano", "Alyssa Edwards", "Tatianna"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    correct: "Alyssa Edwards",
    image: "./assets/images/alyssabackrolls.gif"
};

var question04 = {
    question: "Which queen eliminated Sasha Belle with kicks and splits during a lip sync for your life to Olivia Newton-John's 'Twist of Fate'?",
    answerChoices: ["Katya", "Tempest Dujour", "Ginger Minj", "Kennedy Davenport"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    correct: "Katya",
    image: "./assets/images/katyasplits.gif"
};

var question05 = {
    question: "Which two queens returned after an iconic lip sync during All Stars Season 2?",
    answerChoices: ["Alaska & Detox", "Alyssa Edwards & Tatianna", "Katya & Roxxxy Andrews", "Coco Montrese & PhiPhi O'Hara"],
    values: ["incorrect", "correct", "incorrect", "incorrect"],
    correct: "Alyssa Edwards & Tatianna",
    image: "./assets/images/alyssatati.gif"
};

var question06 = {
    question: "Which queen is known for her workroom entrance death drop?",
    answerChoices: ["Shangela", "Laganja Estranja", "Magnolia Crawford", "Gia Gunn"],
    values: ["incorrect", "correct", "incorrect", "incorrect"],
    correct: "Laganja Estranja",
    image: "./assets/images/laganjadeathdrop.gif"
};

var question07 = {
    question: "Which queen's jumping split fakeout had the judges rolling with laughter during Season 10?",
    answerChoices: ["Monet X Change", "Aquaria", "Miz Cracker", "Kameron Michaels"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    correct: "Monet X Change",
    image: "./assets/images/monetfake.gif"
};

var question08 = {
    question: "Which Season 5 queen snatched the judge's wigs with her own wig under a wig reveal?",
    answerChoices: ["Detox", "Jinkx Monsoon", "Roxxxy Andrews", "Alaska"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    correct: "Roxxxy Andrews",
    image: "./assets/images/roxxxywig.gif"
};

var question09 = {
    question: "Which Season 9 queen made jaws drop with her rose petals under wig reaveal during the Season 9 finale?",
    answerChoices: ["Sasha Velour", "Shea Coulee", "Trinity Taylor", "Peppermint"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    correct: "Sasha Velour",
    image: "./assets/images/sasharoses.gif"
};

var question10 = {
    question: "Which Season 7 queen inspired the All Stars Season 2 two-in-one look challenge?",
    answerChoices: ["Miss Fame", "Pearl", "Max", "Violet Chachki"],
    values: ["incorrect", "incorrect", "incorrect", "correct"],
    correct: "Violet Chachki",
    image: "./assets/images/violetreveal.gif"
};

var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

function startGame() {
    $("#content").empty();
    var startButton = $("<button>");
    startButton.text(`Gentlemen, Start Your Engines`);
    startButton.addClass("start btn btn-default answerButton");
    $("#content").append(startButton);
};

function run() {
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    time--;
    $("#timerHolder").html(`Time Left: ${time} Seconds`);
    if (time == 0) {
        if (arrayPicker < questionsArray.length - 1) {
            setTimeout(function () {
                questionWrite(questionsArray[arrayPicker])
            }, 1400);
            solutionWrite(questionsArray[arrayPicker]);
            $("#questionHolder").html("Wrong!");
            stop();
            unanswered++;
        }
        else if (arrayPicker < questionsArray.length) {
            setTimeout(function () {
                endWrite(questionsArray[arrayPicker])
            }, 1500);
            solutionWrite(questionsArray[arrayPicker]);
            $("#questionHolder").html("Wrong!");
            stop();
            unanswered++;
        }
    };
};

function stop() {
    clearInterval(intervalId);
};

function questionWrite(object) {
    time = 15;
    $("#timerHolder").empty();
    $("#timerHolder").html(`Time Left: ${time} Seconds`);
    $("#questionHolder").empty();
    $("#content").empty();
    run();
    $("#questionHolder").html(object.question);
    for (var i = 0; i < object.answerChoices.length; i++) {
        var answerButton = $("<button>");
        answerButton.addClass("answer btn btn-default answerButton");
        answerButton.text(object.values[i]);
        $("#content").append(answerButton);
        $("#content").append("<br>");
    };
};

function solutionWrite(object) {
    $("#questionHolder").empty();
    $("#content").empty();
    $("#content").html(`The correct answer was ${object.correct} <br>`);
    var queenImage = $("<img>");
    queenImage.attr("height", "250");
    queenImage.attr("src", object.image);
    queenImage.addClass("queen");
    $("#conent").append(queenImage);
    arrayPicker++;
};

function beginWrite() {
    questionWrite(question01);
};

function selectAnswer() {
    stop();
    if ($(this).attr("value") == "correct") {
        solutionWrite(questionsArray[arrayPicker]);
        $("#questionHolder").html("Correct!");
        correct++;
        if (arrayPicker < questionsArray.length) {
            setTimeout(function () { questionWrite(questionsArray[arrayPicker]) }, 1500);
        }
        else if (arrayPicker < questionsArray.length + 1) {
            setTimeout(function () { endWrite(questionsArray[arrayPicker]) }, 1500);
        }
    }
    else if ($(this).attr("value") == "incorrect") {
        solutionWrite(questionsArray[arrayPicker]);
        $("#questionHolder").html("Incorrect!");
        incorrect++;
        if (arrayPicker < questionsArray.length) {
            setTimeout(function() { questionWrite(questionsArray[arrayPicker]) }, 1500);
        }
        else if (arrayPicker < questionsArray.length + 1) {
            setTimeout(function () { endWrite(questionsArray[arrayPicker]) }, 1500);
        }
    }
};

function endWrite() {
    $("#questionHolder").empty();
    $("#content").empty();
    $("#questionHolder").html("Here's how you did!");
    $("#content").html(`<p>Correct: ${correct} </p><br><p>Incorrect: ${incorrect}</p><br><p>Unanswered: ${unanswered}</p>`);
    var resetButton = $("<button>");
    resetButton.addClass("reset btn btn-default answerButton");
    resetButton.text("Would You Like to Take Another Lap?");
    $("#content").append(resetButton);
}

function resetClick() {
    arrayPicker = 0;
    incorrect = 0;
    correct = 0;
    unanswered = 0;
    beginWrite();
}

$(document).on("click", ".start", beginWrite);
$(document).on("click", ".answer", selectAnswer);
$(document).on("click", ".reset", resetClick);

startGame();