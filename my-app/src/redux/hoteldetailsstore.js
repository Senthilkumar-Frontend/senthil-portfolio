import { createSlice } from '@reduxjs/toolkit';

export const hotelDetailsSlice = createSlice({
    name : 'Hoteldetails',
    initialState: {
        hotelList: []
    },

    reducers: {
        setHotelList : (state, action) => {
            state.hotelList = action.payload
        }
    }
})

export const { setHotelList } = hotelDetailsSlice.actions;
export default hotelDetailsSlice.reducer;