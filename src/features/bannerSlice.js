import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {API_V1} from "../constants/api";

const initialState = {
    banners: [],
    loading: false,
    error: ''
}

export const getBanner = createAsyncThunk('fetchBanner', async () => {
    const result = await axios.get(`${API_V1.BANNER}`)
    return result.data
})

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBanner.pending, (state, action) => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(getBanner.fulfilled, (state, action) => {
            state.banners = action.payload
            state.loading = false
        })
        builder.addCase(getBanner.rejected, (state, action) => {
            state.loading = false
            state.error = 'Error fetching banner data'
        })
    }
})

export default bannerSlice.reducer
