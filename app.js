const readlineSync = require('readline-sync')

const getAnswer = (key) => {
    const answers = {
        question1: 1,
        question2: 2,
        question3: 3,
        question4: 3,        
    }
    return answers[key];
}

const getQuestion = (key) => {
    const questionBank = {
        question1 : `Q1. Which of the following is a single global function defined in the jQuery library ?\n1. jQuery()\n2. $()\n3. Queryanalysis()\n4. None of the mentioned\n`,
        question2 : `Q2. Which jQuery method is used to hide selected elements ?\n1. hidden()\n2. hide()\n3. visible(false)\n4. display(none)\n`,
        question3 : `Q3. $.foo() is equivalent to ?\n1. javascript.foo()\n2. document.foo()\n3. jQuery.foo()\n4. None of the above\n`,
        question4 : `Q4. Which built-in method returns the character at the specified index??\n1. characterAt()\n2. getCharAt()\n3. charAt()\n4. None of the above\n`
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
            console.log(`Correct Answer\n`);
        }else{
            console.log(`Wrong answer!\nCorrect option is ${getAnswer(`question${i}`)}\n`);
        }
        i++;
    }else{
        console.log('please choose valid option\n');
    }
}
console.log(`Quiz over.`);
console.log(`You got ${usermarks} out of ${totalmarks}.`);
