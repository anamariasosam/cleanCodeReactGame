import React from 'react'
import PropTypes from 'prop-types'

const AnswerOption = ({
  answer,
  onAnswerSelected,
  answerContent,
}) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={answerContent === answer}
      id={answerContent}
      value={answerContent}
      disabled={answer}
      onChange={onAnswerSelected}
    />
    <label className="radioCustomLabel" htmlFor={answerContent}>
      {answerContent}
    </label>
  </li>
)

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default AnswerOption
