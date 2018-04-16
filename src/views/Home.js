import React from 'react'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Home = () => (
  <ReactCSSTransitionGroup
    className="home__container"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <img
      src={'assets/images/programmer.gif'}
      alt='programmer'
    />

    <Link
      to='/game'
      className="btn"
    >
      Darle cafeína
    </Link>
  </ReactCSSTransitionGroup>
)
export default Home
