import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './counter';
import reducer from './reducer';
import { increaseAction, decreaseAction } from './actions';
import './index.css';

// Store
const store = createStore(reducer);

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    value: state.count
  }
};

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  }
};

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
