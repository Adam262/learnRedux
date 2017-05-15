import React, { Component, PropTypes } from 'react'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={ onIncreaseClick }> Increase </button>
        <button onClick={ onDecreaseClick }> Decrease </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
}

export default Counter;
