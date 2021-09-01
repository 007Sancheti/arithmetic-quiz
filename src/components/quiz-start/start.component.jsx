import React, { Component } from 'react';
import Quiz from '../quiz/quiz.component';
import QuizInput from '../quiz-input/quiz-input.component';
import QuizButton from '../quiz-button/quiz-button.component';
import './start.styles.scss';

export class Start extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noOfQuestions: '',
            maxOperandValue: '',
            showQuiz: false,
            operator: '+',
        };

        this.quizName = this.props.quizName;
    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        Object.is(NaN, parseInt(value))
            ? this.setState({
                  [name]: value,
              })
            : this.setState({
                  [name]: parseInt(value),
              });
    };

    onOperatorChange = (event) => {
        this.setState({ operator: event.target.value });
    };

    handleStart = () => {
        if (
            this.state.noOfQuestions === '' ||
            this.state.maxOperandValue === ''
        )
            return;
        this.setState({ showQuiz: true });
    };

    render() {
        const { showQuiz, noOfQuestions, maxOperandValue, operator } =
            this.state;
        return (
            <div className='start-quiz-container'>
                {showQuiz ? (
                    <Quiz
                        noOfQuestions={noOfQuestions}
                        maxOperandValue={maxOperandValue}
                        operator={operator}
                    />
                ) : (
                    <div className='start-quiz'>
                        <QuizInput
                            label='Please enter number of questions:'
                            name='noOfQuestions'
                            type='number'
                            value={noOfQuestions}
                            onChange={this.handleInputChange}
                        />
                        <QuizInput
                            label='Please enter maximum value of operands:'
                            name='maxOperandValue'
                            type='number'
                            value={maxOperandValue}
                            onChange={this.handleInputChange}
                        />
                        <div>
                            <input
                                type='radio'
                                name={`${this.quizName}-operator`}
                                checked={operator === '+'}
                                value='+'
                                onChange={this.onOperatorChange}
                            />
                            Add
                            <input
                                type='radio'
                                name={`${this.quizName}-operator`}
                                checked={operator === '-'}
                                value='-'
                                onChange={this.onOperatorChange}
                            />
                            Subtract
                            <input
                                type='radio'
                                name={`${this.quizName}-operator`}
                                checked={operator === '*'}
                                value='*'
                                onChange={this.onOperatorChange}
                            />
                            Multiply
                            <input
                                type='radio'
                                name={`${this.quizName}-operator`}
                                checked={operator === '/'}
                                value='/'
                                onChange={this.onOperatorChange}
                            />
                            Divide
                        </div>
                        <QuizButton onClick={this.handleStart}>
                            Start Quiz
                        </QuizButton>
                    </div>
                )}
            </div>
        );
    }
}

export default Start;
