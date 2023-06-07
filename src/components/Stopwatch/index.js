import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerMinutes: 0, timerSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  getTimerMinutesAndSecondsFormat = () => {
    const {timerMinutes, timerSeconds} = this.state
    const remainingSeconds = timerMinutes * 60 - timerSeconds
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = Math.floor(remainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  incrementTimerInSecond = () => {
    this.setState(prevState => ({timerSeconds: prevState.timerSeconds - 1}))
  }

  startBtn = () => {
    this.timerId = setInterval(this.incrementTimerInSecond, 1000)
  }

  stopBtn = () => {
    this.componentWillUnmount()
  }

  resetBtn = () => {
    this.setState({timerMinutes: 0, timerSeconds: 0})
    this.componentWillUnmount()
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="clock-timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="stopwatch-count">
            {this.getTimerMinutesAndSecondsFormat()}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button green-btn"
              onClick={this.startBtn}
            >
              Start
            </button>
            <button
              type="button"
              className="button red-btn"
              onClick={this.stopBtn}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow-btn"
              onClick={this.resetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
