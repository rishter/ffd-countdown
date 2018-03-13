import React from 'react'

class Countdown extends React.Component {
  state = {
    secondsLeft: this.props.goal - new Date().getTime()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        secondsLeft: this.props.goal - new Date().getTime()
      })
    },1000)
  }

  render() {
    const days = () => Math.floor(this.state.secondsLeft / (1000 * 60 * 60 * 24))
    const hours = () => Math.floor((this.state.secondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = () => Math.floor((this.state.secondsLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = () => Math.floor((this.state.secondsLeft % (1000 * 60)) / 1000)

    return (<h1>{days()}:{hours()}:{minutes()}:{seconds()}</h1>)
  }
}

export default Countdown
