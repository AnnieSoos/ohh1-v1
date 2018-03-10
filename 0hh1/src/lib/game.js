
export const threeOrMoreInARow = (rowOrCol) => {
  const counts = rowOrCol
    .join('')
    .match(/([1-2]|0)\1*/g) || []

  const matches = []
    .concat
    .apply([], counts.map((m, i) =>
      new Array(m.length).fill(m.match(/0/) ? null : m.length)
    ))
    .map((l, i) => (l > 2 ? i : null))
    .filter((l) => (l !== null))

  return matches
}


  export const numberOfValues = (rowOrCol, value) => {
    return rowOrCol
      .filter(v => v === value)
      .length
  }

  export const areIdentical = (rowOrCol1, rowOrCol2) => {
  if (numberOfValues(rowOrCol1, 0) > 0) return false
  if (numberOfValues(rowOrCol2, 0) > 0) return false

  return rowOrCol1
    .filter((v,i) => v === rowOrCol2[i])
    .length === rowOrCol1.length
}

export const isBoardFull = (board) => {
  return board
    .reduce((sum, row) => sum + numberOfValues(row, 0), 0) === 0
}


export const valueAllowed = (rowOrCol, value) => {
  return numberOfValues(rowOrCol, value) < (rowOrCol.length / 2)
}


export const rows = (board) => {
  return board
}


export const cols = (board) => {
  return board
    .map((row, y) => row.map((v, x) => board[x][y]))
}


export const duplicateRows = (board) => {
  return board.map((row, index) => (
    board
    .filter((row2, index2) => (index !== index2 && areIdentical(row, row2)))
    .length > 0 ? index : null
  )).filter(v => v !== null)
}


export const duplicateCols = (board) => {
  return cols(board).map((col, index) => (
    cols(board)
    .filter((col2, index2) => (index !== index2 && areIdentical(col, col2)))
    .length > 0 ? index : null
  )).filter(v => v !== null)
}

export const isPossibleMove = (board, rowIndex, columnIndex, value) => {
  const row = rows(board)[rowIndex]
  const col = cols(board)[columnIndex]

  if (!valueAllowed(row, value) || !valueAllowed(col, value)) return false


  const originalValue = board[rowIndex][columnIndex]
  board[rowIndex][columnIndex] = value

  if (threeOrMoreInARow(rows(board)[rowIndex]).length > 0 ||
    threeOrMoreInARow(cols(board)[columnIndex]).length > 0) {
      board[rowIndex][columnIndex] = originalValue // reset!
      return false
  }

  if (duplicateRows(board).length > 0 ||
    duplicateCols(board) > 0) {
      board[rowIndex][columnIndex] = originalValue
      return false
  }
  board[rowIndex][columnIndex] = originalValue

  return true
}

export const boardHasErrors = (board) => {
  if (duplicateCols(board).length > 0) return true
  if (duplicateRows(board).length > 0) return true

  const rows = board
  const columns = cols(board)

\
  if (rows.filter(row =>
    (numberOfValues(row, 1) > row.length / 2 ||
      numberOfValues(row, 2) > row.length / 2)
  ).length > 0) return true


  if (columns.filter(column =>
    (numberOfValues(column, 1) > column.length / 2 ||
      numberOfValues(column, 2) > column.length / 2)
  ).length > 0) return true


  if (rows.map(threeOrMoreInARow).filter(e => (e.length > 0)).length > 0) return true
  if (columns.map(threeOrMoreInARow).filter(e => (e.length > 0)).length > 0) return true

  return false
}

export const gameFinished = (board) => {
  return !boardHasErrors(board) &&
    (numSquaresFilled(board) === board.length * board.length)
}

export const numSquaresFilled = (board, correctOnly = false) => {
  const boardSize = board.length

  let filled = board
    .reduce((sum, row) => {
      return sum + boardSize - numberOfValues(row, 0)
    }, 0)

  if (!correctOnly || !boardHasErrors(board)) return filled

  const dupeCols = duplicateCols(board).length
  const dupeRows = duplicateRows(board).length

  return filled - (dupeCols / 2 * boardSize)
    - (dupeRows / 2 * boardSize)
    - board.map(row => threeOrMoreInARow(row)).reduce((sum, dupes) => (sum + dupes.length), 0)
    - cols(board).map(col => threeOrMoreInARow(col)).reduce((sum, dupes) => (sum + dupes.length), 0)
}

export const percentageFilled = (board) => {
  const boardSize = board.length
  return numSquaresFilled(board, true) / (boardSize * boardSize) * 100
}

export const filledPositions = (board) => {
  const pos = board.map((row, rowIndex) => {
    return row
      .map((col, colIndex) => (col === 0 ? null : [rowIndex, colIndex]))
      .filter(pos => pos !== null)
  })
  return [].concat.apply([], pos)
}

export const removeRandomValuesFromBoard = (board, goalPercentage = 25) => {
  while (percentageFilled(board) > goalPercentage) {
    const positions = filledPositions(board)
    const [row, col] = positions[Math.floor(Math.random() * positions.length)]
    board[row][col] = 0
  }

  return board
}

export const fillBoard = (n = 6, solve = false) => {
  const boardSize = n * n
  let board = new Array(n).fill(0)
    .map(() => new Array(n).fill(0))

  let tries = 0

  while (Math.round(percentageFilled(board)) < 100) {
    if (tries > boardSize * 50) {
      return fillBoard(n, solve)
    }

    const row = Math.floor(Math.random() * n)
    const col = Math.floor(Math.random() * n)

    const ones = numberOfValues(cols(board)[col], 1) +
      numberOfValues(rows(board)[row], 1)
      const twos = numberOfValues(cols(board)[col], 2) +
        numberOfValues(rows(board)[row], 2)
    const value = ones > twos ? 2 : 1

    if (isPossibleMove(board, row, col, value)) {
      board[row][col] = value
    }

    tries++
  }

  if (!solve) { removeRandomValuesFromBoard(board, 25) }

  return [board, filledPositions(board)]
}

export const playerProgress = (board, locked) => {
  const totalSquares = board.length * board.length
  const lockedSquares = locked.length
  const filledSquares = numSquaresFilled(board)
  return (filledSquares - lockedSquares) / (totalSquares - lockedSquares)
}

const mapStateToProps = ({ board, locked }) => {
  return {
    progress: Math.floor(playerProgress(board, locked) * 100)
  }
}
