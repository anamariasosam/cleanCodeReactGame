import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Result = ({ correctAnswers }) => {
  const coffees = () => {
    if (correctAnswers === 0) {
      return (
        <img
          src={'assets/images/empty.gif'}
          alt='empty'
          className="result--empty"
        />
      )
    }

    return (
      [...Array(correctAnswers)].map(i =>
      <img
        key={i}
        src={'assets/images/coffee.png'}
        alt='coffee'
        className="coffee--item"
      />)
    )
  }

  return (
    <ReactCSSTransitionGroup
      className="result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h2 className="title result--title">
        Nivel de cafeína: {correctAnswers}
      </h2>
      {coffees()}
      <Link
        to='/'
        className="btn result--button"
      >
        Volver al inicio
      </Link>
    </ReactCSSTransitionGroup>
  )
}
Result.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
}

export default Result
