import { configureStore } from '@reduxjs/toolkit';

import HotelDetailsStore from './hoteldetailsstore';

export const store = configureStore({
    reducer: {
        hotelDetails: HotelDetailsStore
    }
})