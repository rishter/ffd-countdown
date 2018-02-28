import React from 'react'

class Countdown extends React.Component {
  state = {
    secondsLeft: new Date(this.props.goal - new Date())
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        secondsLeft: new Date(this.props.goal - new Date())
      })
    },1000)
  }

  render() {
    console.log(this.state.secondsLeft)
    return (<h1>{this.state.secondsLeft.getDay()} - {this.state.secondsLeft.getHours()} - {this.state.secondsLeft.getMinutes()} - {this.state.secondsLeft.getSeconds()}</h1>)
  }
}

export default Countdown
