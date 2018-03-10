// src/reducers/board.js
//
// The default export for a reducer is the reducer function, that takes 2
// arguments:
//
//   - the (current) state, should default to the initial state
//   - an action Object:
//     - type : the action type
//     - payload : [optional] payload
//

const initialState = [
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ]
]

export default (state = initialState, { type, payload } = {}) => {
  return state
}
