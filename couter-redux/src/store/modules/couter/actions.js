import { ADD_NUM, DISCOUNT_NUM } from "./actionTypes";

export const addNumber = payload => ({type: ADD_NUM, payload})
export const discountNumber = payload => ({type: DISCOUNT_NUM, payload})