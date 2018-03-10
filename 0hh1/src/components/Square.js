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

  render() {
    return (
      <div className={`Square fill -${this.props.value || 0}`} />


    )
  }
}

export default Square
