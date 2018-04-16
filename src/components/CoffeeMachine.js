import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CoffeeMachine.css'

const CoffeeMachine = ({ active }) => (
  <div className="box">
    <div className={`machine ${active && 'active'}`}>
      <div className="top-section-upper">
        <div className="dial">
          <div className="dial-inner"></div>
          <div className="indicator"></div>
        </div>
        <div className="left-light"></div>
        <div className="right-shadow"></div>
      </div>
      <div className="button make-coffee"></div>
      <div className="top-section-lower"></div>
      <div className="middle-section">
        <div className="left-light"></div>
        <div className="right-shadow"></div>
        <div className="dispenser dispenser-left">
          <div className="handle"></div>
          <div className="spout">
            <div className="left-light"></div>
            <div className="right-shadow"></div>
          </div>
          <div className="left-light"></div>
          <div className="right-shadow"></div>
          <div className="coffee"></div>
        </div>
        <div className="coffee-cup coffee-cup-left">
          <div className="left-light"></div>
          <div className="right-shadow"></div>
          <div className="steam-left"></div>
          <div className="steam-right"></div>
        </div>
      </div>
      <div className="base">
        <div className="left-light"></div>
        <div className="right-shadow"></div>
      </div>
      <div className="counter"></div>
    </div>
  </div>
)

CoffeeMachine.propTypes = {
  active: PropTypes.bool,
}

export default CoffeeMachine
