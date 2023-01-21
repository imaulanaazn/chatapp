import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  convoOpen: '',
};

const convoOpenSlice = createSlice({
  name: 'convo',
  initialState,
  reducers: {
    setConvoOpen: (state, { payload }) => {
      state.convoOpen = payload.convoId;
    },
  },
});

export default convoOpenSlice.reducer;
export const { setConvoOpen } = convoOpenSlice.actions;
