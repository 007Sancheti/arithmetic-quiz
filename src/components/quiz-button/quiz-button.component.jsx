import React from 'react'
import './quiz-button.styles.scss'

const QuizButton = ({children, ...props}) => {
    return (
        <button {...props} className="quiz-button">
            {children}
        </button>
    )
}

export default QuizButton
