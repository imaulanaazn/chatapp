import { createSlice } from '@reduxjs/toolkit';
import { MESSAGE } from '../constant';
import { menuStateProps } from '../../services/data-types';

const initialState = {
  isSidebarActive: false,
  activeMenu: MESSAGE,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuStatus: (state:menuStateProps, { payload }) => {
      state.isSidebarActive = payload.isSidebarActive;
    },
    setActiveMenu: (state:menuStateProps, { payload }) => {
      state.isSidebarActive = payload.isSidebarActive;
      state.activeMenu = payload.activeMenu;
    },
  },
});

export default menuSlice.reducer;
export const { setMenuStatus, setActiveMenu } = menuSlice.actions;
