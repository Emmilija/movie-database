import { createSlice } from "@reduxjs/toolkit";
import { saveUser, removeUser, getUser } from "../../hooks/useStorage";

const initialState = {
    user: getUser(),
    isLoggedIn: !!getUser(),
  status: 'idle',
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.user = saveUser(action.payload);
    },
    loginFailure(state) {
      state.user = null;
      removeUser();
    },
    signUpSuccess(state, action) {
      state.user = saveUser(action.payload);
    },
    signUpFailure(state) {
      state.user = null;
      removeUser()
    }
  }
  })
  


  export const {loginSuccess, loginFailure, signUpSuccess, signUpFailure} = authSlice.actions

  export default authSlice.reducer;