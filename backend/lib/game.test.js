import { threeOrMoreInARow, numberOfValues } from './game'

describe('threeOrMoreInARow', () => {
  const row = [0,2,1,2,2,2]
  const col = [1,1,1,0,2,2]
  const col1 = [0,1,1,0,2,2]

  it('returns the indices of the wrongly placed values', () => {
    expect(threeOrMoreInARow(row)).toEqual([3,4,5])
    expect(threeOrMoreInARow(col)).toEqual([0,1,2])
    expect(threeOrMoreInARow(col1)).toEqual([1,2,3])
  })
})
// ...

describe('numberOfValues', () => {
  const row = [0,2,1,2,2,2]

  it('returns the number of values', () => {
    expect(numberOfValues(row, 2)).toEqual(4)
    expect(numberOfValues(row, 1)).toEqual(1)
  })
})
// src/lib/game.test.js
//

describe('isBoardFull', () => {
  const fullBoard = [
    [1,2,1,2],
    [1,1,2,2],
    [2,2,1,1],
    [2,1,2,1]]

  const board = [
    [1,2,1,2],
    [1,1,2,2],
    [2,0,1,1],
    [2,1,2,1]]

  it('returns true if the board is full', () => {
    expect(isBoardFull(fullBoard)).toBe(true)
  })

  it('returns false if the board is not full', () => {
    expect(isBoardFull(board)).toBe(false)
  })
})
