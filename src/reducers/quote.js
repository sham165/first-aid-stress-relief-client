import { QUOTE_FETCHED } from '../actions/quote'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case QUOTE_FETCHED:
    console.log(action.quote)
      return action.quote
    default:
      return state
  }
}