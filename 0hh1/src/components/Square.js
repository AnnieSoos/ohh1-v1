import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { connect } from 'react-redux'
import { createGame, move } from '../actions/game'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }


  handleClick = () => {
    const { x, y, makeMove, locked } = this.props
    if (locked) return

    makeMove(y, x)
  }


  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
        onHover={this.handleClick}
        className="locked"
      )
  }

export default Square
