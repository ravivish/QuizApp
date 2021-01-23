const readlineSync = require('readline-sync')


const questions = [
    {
        question: "Q1. Which of the following is a single global function defined in the jQuery library ?",
        options: ["jQuery()", "$()", "Queryanalysis()", "None of the mentioned"],
        answer: 1
    },
    {
        question: "Q2. Which jQuery method is used to hide selected elements ?",
        options: ["hidden()", "visible(false)", "hide()", "display(none)"],
        answer: 3
    },
    {
        question: "Q3. $.foo() is equivalent to ?",
        options: ["javascript.foo()", "document.foo()", "jQuery.foo()", "None of the mentioned"],
        answer: 3
    },
    {
        question: "Q4. Which built-in method returns the character at the specified index ?",
        options: ["characterAt()", "getCharAt()", "charAt()", "None of the mentioned"],
        answer: 3
    }
]

function start() {
    let totalmarks = 20;
    let usermarks = 0;
    for (let i = 0; i < questions.length;) {
        console.log(`${questions[i].question}`);
        //questions[i].options.forEach(i => console.log(i + "\n"));
        for (let option = 0; option < questions[i].options.length; option++) {
            console.log(`${option + 1}. ${questions[i].options[option]}`);
        }
        let userinput = parseInt(readlineSync.question());
        if (userinput >= 1 && userinput <= 4) {
            if (userinput === questions[i].answer) {
                console.log('Correct Answer\n');
                usermarks += 5;
            } else {
                console.log(`Wrong answer, correct answer is ${questions[i].options[questions[i].answer - 1]}\n`);
            }
            i++;
        } else {
            console.log('Please make valid choices between 1 to 4\n');
        }
    }
    console.log(`Quiz over.`);
    console.log(`You got ${usermarks} out of ${totalmarks}.`);

}

const name = readlineSync.question('What is your name ?\n');
console.log(`Welcome ${name},Let's play quiz\nEach question carry 5 marks\nlets start:\n`);
start();
