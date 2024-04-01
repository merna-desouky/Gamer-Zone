// Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import gamesReducers from './getAllData'; // Import gamesReducers

const store = configureStore({
    reducer: { allGames: gamesReducers },
});

export default store;
