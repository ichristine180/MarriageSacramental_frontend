import {
  loginSuccess,
  setChristian,
  setPartner,
  setSuccessMessage,
  setUserApplication,
  setpartnerInvalid,
} from "../_slice/globalSlice";
import { request } from "../helper";

export const register = (body) => async (dispatch) => {
  const data = await request(dispatch, "christian/register", body);
  if (data) {
    dispatch(setSuccessMessage(data.message));
  }
};
export const login = (body, navigate) => async (dispatch) => {
  const data = await request(dispatch, "/login", body);
  if (data) {
    dispatch(loginSuccess(data));
    navigate("/");
  }
};

export const getChristian = (body) => async (dispatch) => {
  const data = await request(
    dispatch,
    "/christian/one",
    body,
    localStorage.getItem("token")
  );
  if (data) dispatch(setChristian(data));
};
export const validatePartner = (body) => async (dispatch) => {
  const data = await request(
    dispatch,
    "users/one",
    body,
    localStorage.getItem("token")
  );
  if (data && data.result) {
    dispatch(setPartner(data.result));
  } else
    dispatch(
      setpartnerInvalid(
        "Your partner is not registered!! please register him/her first"
      )
    );
};

export const apply = (body, navigate) => async (dispatch) => {
  const data = await request(
    dispatch,
    "application/apply",
    body,
    localStorage.getItem("token")
  );
  if (data) {
    dispatch(setSuccessMessage(data.message));
    navigate("/");
  }
};
export const getUserApplication = (body, navigate) => async (dispatch) => {
  const data = await request(
    dispatch,
    "application/one",
    body,
    localStorage.getItem("token")
  );
  if (data) dispatch(setUserApplication(data.result));
};
