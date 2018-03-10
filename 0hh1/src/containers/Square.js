import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export class Square extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(this.renderSquare(index))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    return (
      <Square key={index} value={value} />
    )
  }

  render() {
    return (
      <div className="Square">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}

export default Square
