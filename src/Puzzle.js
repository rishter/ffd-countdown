import React from 'react'

class Puzzle extends React.Component {


  render() {
    return (
      <div>
        <div class="banner-holder">
          <h2 class="banner-content"> Welcome to Puzzle 1 </h2>
        </div>

        <div class="animated fadeIn">
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Puzzle
