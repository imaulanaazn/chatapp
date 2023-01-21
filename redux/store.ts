import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './slices/menuSlice';
import sectionSlice from './slices/sectionSlice';
import convoOpenSlice from './slices/convoOpen';

const store = configureStore({
  reducer: {
    menu: menuSlice,
    section: sectionSlice,
    convo: convoOpenSlice,
  },
});

export default store;
