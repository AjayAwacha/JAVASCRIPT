const poll = {
    question: 'what is your favourite programing language?',
    options: ['0: javascript', '1: java', '2: python', '3: c++'],
    answers: [0, 0, 0, 0]
}

poll.registerNewAnswer = function() {
    const input = Number(prompt(`what is your favourite programing language?
    0: javascript
    1: java
    2: python
    3: c++`));
    if (input > 3) {
        console.log('number not make any sense');
        return;
    }
    this.answers[input] = this.answers[input] + 1;
    this.displayResults();
}

poll.displayResults = function(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    } else {
        console.log(`poll result are`, ...this.answers);
    }
}

document.getElementById('ans-pool').addEventListener('click', poll.registerNewAnswer.bind(poll));