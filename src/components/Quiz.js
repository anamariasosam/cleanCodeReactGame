import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'
import '../styles/Quiz.css'

const Quiz = ({
  answer,
  questionId,
  onAnswerSelected,
  questionTotal,
  question,
  answerOptions,
}) => {
  const renderAnswerOptions = (content) => {
    return (
      <AnswerOption
        key={content}
        answerContent={content}
        answer={answer}
        questionId={questionId}
        onAnswerSelected={onAnswerSelected}
      />
    )
  }

  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={questionId}>
        <QuestionCount
          counter={questionId}
          total={questionTotal}
        />
        <Question content={question} />
        <ul className="answerOptions">
          {answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </ReactCSSTransitionGroup>
  )
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default Quiz
