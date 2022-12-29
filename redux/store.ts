import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';
import sectionSlice from './slices/sectionSlice';

const store = configureStore({
  reducer: {
    menu: menuSlice,
    section: sectionSlice,
  },
});

export default store;
