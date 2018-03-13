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
    return (
      <div>

        <div>
          <div class="bg">
          </div>
        </div>

          <div class="animated fadeIn">
          <div class="ui five column grid">
            <div class="column">
              <div class="column-ticker">{this.state.secondsLeft.getMonth()} </div>
              <div class="border-bottom"> </div>
              <div class="column-ticker-secondary"> Month  </div>
          </div>

            <div class="column">
              <div class="column-ticker">{this.state.secondsLeft.getDay()} </div>
              <div class="border-bottom"> </div>
              <div class="column-ticker-secondary"> Days  </div>
          </div>

            <div class="column">
              <div class="column-ticker">{this.state.secondsLeft.getHours()} </div>
              <div class="border-bottom"> </div>
              <div class="column-ticker-secondary"> Hours  </div>
          </div>

            <div class="column">
              <div class="column-ticker">{this.state.secondsLeft.getMinutes()} </div>
              <div class="border-bottom"> </div>
              <div class="column-ticker-secondary"> Minutes  </div>
          </div>

            <div class="column">
              <div class="column-ticker">{this.state.secondsLeft.getSeconds()} </div>
              <div class="border-bottom"> </div>
              <div class="column-ticker-secondary"> Seconds  </div>
          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default Countdown
