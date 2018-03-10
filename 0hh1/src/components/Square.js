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

  classNames() {
    const { value, locked, dupe, error } = this.props

    let classnames = ['Square']
    classnames.push(`fill-${value || 0}`)
    if (locked) classnames.push('locked')
    return classnames.join(' ')
  }

  render() {
  return (
    <div
      className={this.classNames()}
      onClick={this.handleClick}
    />
  )
}
}

const mapStateToProps = ({ locked }, { x, y }) => ({
  locked: locked.filter(l => l[0] === y && l[1] === x).length > 0
})

export default connect(mapStateToProps, { makeMove: move })(Square)
