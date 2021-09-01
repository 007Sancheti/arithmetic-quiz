import React from 'react';

import './quiz-input.styles.scss';

const QuizInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input
                className='quiz-input'
                onChange={handleChange}
                {...otherProps}
            />
            {label && (
                <label
                    className={`${
                        otherProps.value ? 'shrink' : ''
                    } quiz-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default QuizInput;
