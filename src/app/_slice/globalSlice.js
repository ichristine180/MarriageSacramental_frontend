import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  user: null,
  christian: null,
  partner: null,
  partnerInvalid: null,
  userApplication: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      const token = action.payload.result.token;
      const user = action.payload.result.user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      state.isAuthenticated = true;
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    logout(state) {
      localStorage.clear();
      state.isAuthenticated = false;
    },
    clear(state) {
      state.errorMessage = null;
      state.successMessage = null;
      state.christian = null;
    },
    clearMessage(state) {
      state.errorMessage = null;
      state.successMessage = null;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setChristian(state, action) {
      state.christian = action.payload.result;
    },
    setPartner(state, action) {
      state.partner = action.payload;
    },
    setpartnerInvalid(state, action) {
      state.partnerInvalid = action.payload;
    },
    clearPartner(state, action) {
      state.partner = null;
      state.partnerInvalid = null;
    },
    setUserApplication(state, action) {
      state.userApplication = action.payload;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  setIsLoading,
  setSuccessMessage,
  setErrorMessage,
  clear,
  clearMessage,
  setChristian,
  setPartner,
  setpartnerInvalid,
  clearPartner,
  setUserApplication
} = globalSlice.actions;

export default globalSlice.reducer;
