import React from 'react'

class Puzzle extends React.Component {

  renderPuzzleContent = () => {
    if (this.props.puzzle.text) {
      return (<p className="puzzle-text">{this.props.puzzle.text}</p>)
    } else if (this.props.puzzle.image) {
      return (<img src={this.props.puzzle.image} />)
    } else {
      return (<p></p>)
    }
  }


  render() {
    return (
      <div>
        <div className="banner-holder">
          <h2 className="banner-content"> Welcome to Puzzle {this.props.puzzle.number} </h2>
        </div>

        <div className="animated fadeIn">
          { this.renderPuzzleContent() }
        </div>
      </div>
    )
  }
}

export default Puzzle
