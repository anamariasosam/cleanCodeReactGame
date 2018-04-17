import React, { Component } from 'react'
import quizQuestions from '../api/quizQuestions'
import Quiz from '../components/Quiz'
import Result from '../components/Result'
import CoffeeMachine from '../components/CoffeeMachine'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      correctAnswer: '',
      correctAnswersCount: 0,
      isAnswerCorrect: false,
      gameEnd: false,
    }

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    this.validateAnswerSelected = this.validateAnswerSelected.bind(this)
  }

  componentWillMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answerOptions,
      correctAnswer: quizQuestions[0].correctAnswer,
    })
  }

  handleAnswerSelected(event) {
    const answerSelected = event.currentTarget.value

    this.setUserAnswer(answerSelected)
    const isCorrect = this.validateAnswerSelected(answerSelected)
    const time = isCorrect ? 3000 : 1000

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), time)
    } else {
      setTimeout(() => this.setState({ gameEnd: true }), time)
    }
  }

  validateAnswerSelected(answerSelected) {
    const correctAnswer = this.state.answerOptions[this.state.correctAnswer - 1]

    if (answerSelected === correctAnswer) {
      const correctAnswersCount = this.state.correctAnswersCount + 1

      this.setState({
        correctAnswersCount,
        isAnswerCorrect: true,
      })

      return true
    }
    return false
  }

  setUserAnswer(answer) {
    this.setState({
      answer,
    })
  }

  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1

    this.setState({
      counter,
      questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answerOptions,
      correctAnswer: quizQuestions[counter].correctAnswer,
      answer: '',
      isAnswerCorrect: false,
    })
  }

  renderQuiz() {
    return (
      <div className="quiz--container">
        <CoffeeMachine
          active={this.state.isAnswerCorrect}
        />
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    )
  }

  renderResult() {
    return (
      <Result correctAnswers={this.state.correctAnswersCount} />
    )
  }

  render() {
    return (
      <div>
        {this.state.gameEnd ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
}

export default Game
