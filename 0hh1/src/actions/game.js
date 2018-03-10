import { CREATE_GAME } from './types'
import { fillBoard } from '../lib/game'
////////
import { MOVE } from './types'

export const createGame = (rows = 6) => {
  const [board, locked] = fillBoard(rows)
  return {
    type: CREATE_GAME,
    payload: {
      board,
      locked
    }
  }
}


export const move = (row, col) => {
  return {
    type: MOVE,
    payload: {
     row,
     col
    }
  }
}
