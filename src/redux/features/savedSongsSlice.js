import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedSongs: [],
};

const savedSongsSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
      addSong: (state, action) => {
        state.savedSongs = [ ...state.savedSongs , action.payload]
      },

      removeSong: (state, action) => {
        state.savedSongs = state.savedSongs.filter(item => item.key !== action.payload.key);
      },
    },
  });

export const { addSong , removeSong } = savedSongsSlice.actions;

export default savedSongsSlice.reducer;