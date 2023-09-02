import {
  loginSuccess,
  setChristian,
  setPartner,
  setSuccessMessage,
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
const BASE_URL = process.env.REACT_APP_API_URL;
export const saveImage = async (imageFile, url, dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile, imageFile.name);
    dispatch(setIsLoading(true));
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      body: formData,
    });
    dispatch(setIsLoading(false));
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const data = await response.json();
    const imageUrl = data.result.imageUrl;
    return imageUrl;
  } catch (error) {
    dispatch(setIsLoading(false));
    console.log(error);
  }
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
