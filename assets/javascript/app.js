// Declare global variables
var time = 15;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;

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