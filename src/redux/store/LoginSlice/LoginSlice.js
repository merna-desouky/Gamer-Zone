import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
const loginSlice = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
        setLogin: (state) => {
            const encodedToken = localStorage.getItem('userToken');
            const decodedToken = jwtDecode(encodedToken);
            state = decodedToken;
            return state;
        },
        logOut: (state) => {
            localStorage.removeItem('userToken');
            state = null;
            return state;
        },
    },
});

export const { setLogin, logOut } = loginSlice.actions;

export default loginSlice.reducer;
