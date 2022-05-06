import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
  totalAmount: 0,
  loading: false,
  error: ''
}

const calculateTotalPrice = (basket) => {
  let totalAmount = 0
  basket?.map((product) => (totalAmount += product.quantity * product.price))
  return totalAmount
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const findIndexById = state.basket.findIndex(
        (product) => product.id === action.payload.id
      )
      const findProductById = {
        ...state.basket.find((product) => product.id === action.payload.id)
      }

      if (findIndexById !== -1) {
        state.basket[findIndexById] = {
          ...findProductById,
          quantity: findProductById.quantity + 1
        }
      } else {
        const product = { ...action.payload, quantity: 1 }
        state.basket = [...state.basket, product]
      }
      state.totalAmount = calculateTotalPrice(state.basket)
    },
    removeBasket: (state, action) => {
      const findIndexById = state.basket.findIndex(
          (product) => product.id === action.payload.id
      )

      const findProductById = {
        ...state.basket.find((product) => product.id === action.payload.id)
      }

      if (findIndexById !== -1 && findProductById.quantity !== 1) {
        state.basket[findIndexById] = {
          ...findProductById,
          quantity: findProductById.quantity-1
        }
      } else {
        state.basket.splice(findIndexById, 1)
      }

      state.totalAmount = calculateTotalPrice(state.basket)
    }
  }
})

export const { addBasket, removeBasket } = basketSlice.actions

export default basketSlice.reducer
