import React from 'react';
import { RandomQuestionsCreator } from '../../utils/quizUtils';
import Results from '../results/results.component';
import QuizInput from '../quiz-input/quiz-input.component';
import QuizButton from '../quiz-button/quiz-button.component';
import './quiz.styles.scss';

const userAnswers = [];

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        const { noOfQuestions, maxOperandValue, operator } = this.props;
        this.state = {
            userAnswer: '',
            userAnswers: {},
            currentQuestion: 0,
            showScore: false,
            score: 0,
        };
        this.questions = RandomQuestionsCreator(
            noOfQuestions,
            operator,
            maxOperandValue
        );
    }

    handleNext = (correctAnswer) => {
        if (this.state.userAnswer === '') return;
        else {
            if (correctAnswer === this.state.userAnswer) {
                this.setState({ score: this.state.score + 1 });
            }

            const nextQuestion = this.state.currentQuestion + 1;
            if (nextQuestion < this.questions.length) {
                this.setState({ currentQuestion: nextQuestion });
            } else {
                this.setState({ showScore: true });
            }
            userAnswers.push(this.state.userAnswer);
            this.setState({ userAnswer: '' });
        }
    };

    render() {
        const { score, showScore, currentQuestion, userAnswer } = this.state;
        return (
            <div className='quiz-container'>
                <div className='quiz-box'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {this.questions.length}
                            <div className="results-container">
                                {this.questions.map((question, index) => (
                                    <Results
                                        key={index}
                                        {...question}
                                        index={index}
                                        userAnswers={userAnswers}
                                        score={score}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/
                                    {this.questions.length}
                                </div>
                                <div className='question-text'>
                                    {
                                        this.questions[currentQuestion]
                                            .questionText
                                    }
                                </div>
                            </div>
                            <div className='answer-section'>
                                <QuizInput
                                    type='number'
                                    value={userAnswer}
                                    onChange={(e) => {
                                        const { value } = e.target;
                                        Object.is(NaN, parseInt(value))
                                            ? this.setState({
                                                  userAnswer: value,
                                              })
                                            : this.setState({
                                                  userAnswer: parseInt(value),
                                              });
                                    }}
                                    required
                                />
                                <QuizButton
                                    onClick={() =>
                                        this.handleNext(
                                            this.questions[currentQuestion]
                                                .correctAnswer
                                        )
                                    }
                                >
                                    Next
                                </QuizButton>
                            </div>
                            <p>Score: {score}</p>
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default Quiz;
