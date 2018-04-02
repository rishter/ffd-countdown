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

        <div class="shadowfilter" style={{marginTop: "100px"}}>
          <div class="bg"></div>
        </div>

        <div class="animated fadeIn">
          <div id="countdown-text">

            <div class="column">
              //
              <div class="column-ticker">{this.days()}</div>
              <div class="border-bottom"></div>
              <div class="column-ticker-secondary">Days</div>
            </div>

            <div class="column">
              //
              <div class="column-ticker">{this.hours()}</div>
              <div class="border-bottom"></div>
              <div class="column-ticker-secondary">Hours</div>
            </div>

            <div class="column">
              //
              <div class="column-ticker">{this.minutes()}</div>
              <div class="border-bottom"></div>
              <div class="column-ticker-secondary">Minutes</div>
            </div>

            <div class="column">
              //
              <div class="column-ticker">{this.seconds()}</div>
              <div class="border-bottom"></div>
              <div class="column-ticker-secondary">Seconds</div>
            </div>

          </div>

          <div class="banner-holder">
            <h2 class="banner-content"> Get ready. </h2>
            <h2 class="hidden">/hunt</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Countdown
