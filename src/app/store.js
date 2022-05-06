import { configureStore } from '@reduxjs/toolkit'

import basketReducer from '../features/basketSlice'
import productReducer from '../features/productSlice'
import bannerReducer from '../features/bannerSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
    banner: bannerReducer
  }
})
