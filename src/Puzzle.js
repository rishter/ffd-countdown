import React from 'react'
import flatironBuilding from './flatironBuilding.jpg'


class Puzzle extends React.Component {

  renderPuzzleContent = () => {
    if (this.props.puzzle.text) {
      return (<p className="puzzle-text">{this.props.puzzle.text}</p>)
    } else if (this.props.puzzle.image) {
      if (this.props.puzzle.number == 2) {
        return (<img src={flatironBuilding} />)
      } else {
        return (<p></p>)
      }
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
