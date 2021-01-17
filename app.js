const readlineSync = require('readline-sync')

const getAnswer = (key) => {
    const answers = {
        question1: 1,
        question2: 2,
        question3: 3,
        question4: 4,
        question5: 2,
    }
    return answers[key];
}

const getQuestion = (key) => {
    const questionBank = {
        question1 : `Q1.What is First color of flag?\n1.Red\n2.Green\n3.Blue\n4.Yellow\n`,
        question2 : `Q2.What is Second color of flag?\n1.Red\n2.Green\n3.Blue\n4.Yellow\n`,
        question3 : `Q3.What is Third color of flag?\n1.Red\n2.Green\n3.Blue\n4.Yellow\n`,
        question4 : `Q4.What is color of flag?\n1.Red\n2.Green\n3.Blue\n4.Yellow\n`
    }
    return questionBank[key];
}

const name = readlineSync.question('What is your name ?\n');
console.log(`Hello ${name},Let's play quiz\nEach question carry 5 marks\nlets start\n`);

const totalmarks = 20;
let usermarks = 0;
for (let i = 1; i <= 4; ) {
    const ans = readlineSync.question(getQuestion(`question${i}`));
    if(parseInt(ans)){
        let validAns = parseInt(ans);
        if(validAns===getAnswer(`question${i}`)){
            usermarks += 5;
            console.log(`\nCorrect Answer\n`);
        }else{
            console.log(`\nWrong answer!\nCorrect option is ${getAnswer(`question${i}`)}\n`);
        }
        i++;
    }else{
        console.log('\nplease choose valid option\n');
    }
}
console.log(`\nQuiz over and\n`);
console.log(`\nYou got ${usermarks} out of ${totalmarks}\n`);
