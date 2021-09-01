import React from 'react';
import './results.styles.scss';

const Results = ({ questionText, correctAnswer, index, userAnswers }) => {
    return (
        <div
            className={`${
                correctAnswer === userAnswers[index] ? 'correct' : 'incorrect'
            } result-box`}
        >
            <div>
                Question {index + 1}: {questionText}
            </div>
            <div>Correct Answer: {correctAnswer}</div>
            <div>Your Answer: {userAnswers[index]}</div>
        </div>
    );
};

export default Results;
