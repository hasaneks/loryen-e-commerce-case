import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {API_V1} from "../constants/api";

const initialState = {
  products: [],
  activeCategory: 0,
  searchText: '',
  loading: false,
  error: ''
}

export const getProducts = createAsyncThunk('fetchIban', async () => {
  const result = await axios.get(`${API_V1.PRODUCT}`)
  return result.data
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productFilterByName: (state, action) => {
      state.searchText = action.payload.toLowerCase()
      state.activeCategory = action.payload.length <= 3 ?  0 : -1;
    },
    productFilterByCategory: (state, action) => {
      state.activeCategory = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      state.error = 'Error fetching products data'
    })
  }
})

export const { productFilterByName, productFilterByCategory } =
  productSlice.actions

export default productSlice.reducer
