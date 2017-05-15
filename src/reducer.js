const reducer = (state = { count: 0 }, action) => {
  const count = state.count;

  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case 'decrease':
      return state.count > 0 ? { count: count - 1 } : { count: 0 };
    default:
      return state;
  }
};

export default reducer
