import { ADD_NUM, DISCOUNT_NUM } from "./actionTypes"

export const reducerCounter = (state = 0, { type, payload }) => {
  switch (type) {
    case ADD_NUM:
        return state+payload
    case DISCOUNT_NUM:
        return state > 0 ? state-payload : state
    default:
        return state
  }
}
