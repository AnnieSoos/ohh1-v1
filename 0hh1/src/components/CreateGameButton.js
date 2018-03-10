import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CreateGameButton.css'

export class CreateGameButton extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createGame(6)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="CreateGameButton"
      >
        New Game
      </button>
    )
  }
}

export default CreateGameButton
