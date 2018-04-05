import React from 'react'

class Puzzle extends React.Component {


  render() {
    return (
      <div>
        <div className="banner-holder">
          <h2 className="banner-content"> Welcome to Puzzle {this.props.puzzle.number} </h2>
        </div>

        <div className="animated fadeIn">
          <p className="puzzle-text">{this.props.puzzle.text}</p>
        </div>
      </div>
    )
  }
}

export default Puzzle
