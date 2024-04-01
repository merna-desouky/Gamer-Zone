import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const gamesAction = createAsyncThunk('/getAllGames', async () => {
    const res = await axios.get(
        'https://gamerzoneserver1.onrender.com/products'
    );
    console.log(res);
    return res.data;
});
const gamesSlice = createSlice({
    name: 'games',
    initialState: { games: [], loading: false, status: true },
    extraReducers: (build) => {
        build.addCase(gamesAction.fulfilled, (state, action) => {
            state.games = action.payload;
        });
        build.addCase(gamesAction.pending, (state) => {
            state.loading = true;
        });
        build.addCase(gamesAction.rejected, (state) => {
            state.status = false;
        });
    },
});
export default gamesSlice.reducer;
