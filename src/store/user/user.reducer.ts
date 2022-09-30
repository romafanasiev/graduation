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
  isAuthenticated: boolean;
  avatar: null | string;
  whiteThemeColor: boolean;
}

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  avatar: null,
  whiteThemeColor: true,
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
      return {
        user: userSnapshot.data() as UserData,
        avatar: user.photoURL,
      };
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
  reducers: {
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setTheme: (state) => {
      state.whiteThemeColor = !state.whiteThemeColor;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload) {
          state.avatar = action.payload.avatar;
          state.currentUser = action.payload.user;
        }
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;
      })

      .addCase(signIn.rejected, (state, action) => {
        state.currentUser = null;
        state.isLoading = "failed";
        state.error = action.error as Error;
        state.avatar = null;
      })

      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(signOut.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoading = true;
        state.error = null;
        state.isAuthenticated = false;
      })

      .addCase(signOut.rejected, (state, action) => {
        state.currentUser = null;
        state.isLoading = "failed";
        state.error = action.error as Error;
      });
  },
});

export const { setAvatar, setTheme } = userSlice.actions;

export default userSlice.reducer;
