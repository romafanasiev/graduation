import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { QueryDocumentSnapshot } from "firebase/firestore";

import {
  signInAuthUserWithEmailAndPassword,
  UserData,
  createUserDocumentFromAuth,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import USER_ACTION_TYPES from "./user.types";

interface UserState {
  currentUser: UserData | null;
  isLoading: boolean | string;
  error: null | Error;
}

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
} as UserState;

interface SignInType {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  USER_ACTION_TYPES.SIGN_IN,
  async (data: SignInType) => {
    const { email, password } = data;
    const userCredential = await signInAuthUserWithEmailAndPassword(
      email,
      password,
    );

    const user = userCredential?.user;

    if (user) {
      const userSnapshot = (await createUserDocumentFromAuth(
        user,
      )) as QueryDocumentSnapshot;
      return userSnapshot.data() as UserData;
    }

    return null;
  },
);

export const signOut = createAsyncThunk(
  USER_ACTION_TYPES.SIGN_OUT,
  async () => {
    await signOutUser();
    return null;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: USER_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(signIn.rejected, (state, action) => {
        const { error }: { error: any } = action;
        state.currentUser = null;
        state.isLoading = "failed";
        state.error = error;
      })

      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signOut.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signOut.rejected, (state, action) => {
        const { error }: { error: any } = action;
        state.currentUser = null;
        state.isLoading = "failed";
        state.error = error;
      });
  },
});

export default userSlice.reducer;