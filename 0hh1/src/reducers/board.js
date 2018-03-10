import { CREATE_GAME } from '../actions/types'

const emptyBoard = [
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ],
  [ 0,0,0,0,0,0 ]
]

export default (state = emptyBoard, { type, payload } = {}) => {
  switch (type) {
    case CREATE_GAME :
      return [].concat(payload.board)

    default :
      return state
  }
}
