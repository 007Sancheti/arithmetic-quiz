const computeAnswer = (operator, operand1, operand2) => {
    switch (operator) {
        case '*':
            return operand1 * operand2;
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '/':
        default: 
            return Math.round(operand1 / operand2);
    }
};

export const RandomQuestionsCreator = (noOfQuestions, operator, maxOperandValue = 10) => {
    const questions = [];
    for (let i = 0; i < noOfQuestions; i++) {
        const question = {};
        let operand1 = Math.floor(Math.random() * maxOperandValue) + 1;
        let operand2 = Math.floor(Math.random() * maxOperandValue) + 1;
        question.questionText = `${operand1} ${operator} ${operand2}`;
        question.correctAnswer = computeAnswer(operator, operand1, operand2);

        questions.push(question);
    }
    return questions;
};