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
    <h1 className="title">
      Clean Code Game
    </h1>

    <img
      src={'assets/images/home.gif'}
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
