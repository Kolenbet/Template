const objectAssign = require('object-assign')

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'test':
      return objectAssign({}, state);

    default:
      return state;
  }
}