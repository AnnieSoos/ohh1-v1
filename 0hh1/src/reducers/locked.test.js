import locked from './locked'

describe('locked reducer', () => {
  const reducer = locked
  const initialState = []

  it('sets the initial state of the locked squares to an empty array', () => {
    expect(reducer()).toEqual(initialState)
  })
})
