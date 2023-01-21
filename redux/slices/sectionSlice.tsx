import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  convolist: true,
  chatContent: false,
  setting: false,
  contactInfo: false,
  newMessage: false,
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setShowedSection: (state:any, { payload }) => {
      state.convolist = true;
      state.chatContent = false;
      state.setting = false;
      state.contactInfo = false;
      state.newMessage = false;
      state[payload.section] = payload.value;
    },
  },
});

export default sectionSlice.reducer;
export const { setShowedSection } = sectionSlice.actions;
