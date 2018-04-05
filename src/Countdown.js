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

  months = () => Math.floor(this.state.secondsLeft / (1000 * 60 * 60 * 24 * 31))
  days = () => {
    let d = Math.floor(this.state.secondsLeft / (1000 * 60 * 60 * 24))
    return (d > 31) ? d - 31 : d
  }
  hours = () => Math.floor((this.state.secondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes = () => Math.floor((this.state.secondsLeft % (1000 * 60 * 60)) / (1000 * 60))
  seconds = () => Math.floor((this.state.secondsLeft % (1000 * 60)) / 1000)

  render() {
    return (
      <div>

        <div className="shadowfilter" style={{marginTop: "100px"}}>
          <div className="bg"></div>
        </div>

        <div className="animated fadeIn">
          <div id="countdown-text">

            <div className="column">
              { "//" }
              <div className="column-ticker">{this.days()}</div>
              <div className="border-bottom"></div>
              <div className="column-ticker-secondary">Days</div>
            </div>

            <div className="column">
              { "//" }
              <div className="column-ticker">{this.hours()}</div>
              <div className="border-bottom"></div>
              <div className="column-ticker-secondary">Hours</div>
            </div>

            <div className="column">
              { "//" }
              <div className="column-ticker">{this.minutes()}</div>
              <div className="border-bottom"></div>
              <div className="column-ticker-secondary">Minutes</div>
            </div>

            <div className="column">
              { "//" }
              <div className="column-ticker">{this.seconds()}</div>
              <div className="border-bottom"></div>
              <div className="column-ticker-secondary">Seconds</div>
            </div>

          </div>

          <div className="banner-holder">
            <h2 className="banner-content"> Get ready. </h2>
            <h2 className="hidden">/hunt</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown
