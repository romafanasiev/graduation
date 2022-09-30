import { createSlice } from "@reduxjs/toolkit";

export const MESSAGES_INITIAL_STATE = {
  messages: [],
  isLoading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState: MESSAGES_INITIAL_STATE,
  reducers: {
    getMessagesFetch: (state) => {
      state.isLoading = true;
    },
    getMessagesSuccess: (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    },
    getMessagesFailed: (state, action) => {
      const { error } = action.payload;

      state.isLoading = false;
      state.error = error;
    },
  },
});

export const { getMessagesFetch, getMessagesSuccess, getMessagesFailed } =
  messagesSlice.actions;

export default messagesSlice.reducer;
