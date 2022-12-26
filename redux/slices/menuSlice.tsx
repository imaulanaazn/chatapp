import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuActive: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuStatus: (state:{isMenuActive:boolean}, { payload }) => {
      state.isMenuActive = payload.isMenuActive;
    },
  },
});

export default menuSlice.reducer;
export const { setMenuStatus } = menuSlice.actions;
