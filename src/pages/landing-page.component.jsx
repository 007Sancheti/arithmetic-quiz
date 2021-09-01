import React from 'react'
import Start from '../components/quiz-start/start.component'
import './landing-page.styles.scss'

const LandingPage = ({quizCount}) => {
    return (
        <div className="landing-page">
            {
                [...Array(quizCount)].map((quiz, index) => <Start key={index} quizName={`quiz-${index}`} /> )
            }
        </div>
    )
}

export default LandingPage
