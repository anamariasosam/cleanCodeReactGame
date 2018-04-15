import React, { Component } from 'react'

import CoffeMachine from '../components/CoffeMachine'

class Game extends Component {
  constructor() {
    super()

    this.state = {
      answerCorrect: true,
    }

    this.pourCoffee = this.pourCoffee.bind(this)
  }

  pourCoffee() {
    this.setState({ answerCorrect: true })
    setTimeout(() => { this.setState({ answerCorrect: false }) }, 5300)
  }

  render() {
    return (
      <div>
        <CoffeMachine
          active={this.state.answerCorrect}
         />
      </div>
    )
  }
}

export default Game
