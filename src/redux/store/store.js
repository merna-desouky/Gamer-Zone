import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice/LoginSlice';
const store = configureStore({
    reducer: {
        isLogged: LoginSlice,
    },
});

export default store;
