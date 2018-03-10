import { CREATE_GAME } from '../actions/types'

const initialState = [
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ]
]

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return [].concat(payload.board)

    default :
      return state
  }
}
