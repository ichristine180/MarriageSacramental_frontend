import { setIsLoading, setErrorMessage } from "../app/_slice/globalSlice";

const BASE_URL = process.env.REACT_APP_API_URL;
const handleResponse = async (response, dispatch) => {
  try {
    const data = await response.json();
    if (response.ok) {
      if (!data.isSuccessfull) throw new Error(data.message);
      return data;
    } else throw new Error(data.message);
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const request = async (
  dispatch,
  endpoint,
  body,
  token,
  disableLoading
) => {
  try {
    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) requestOptions.body = JSON.stringify(body);
    if (token) requestOptions.headers["authtoken"] = `Bearer ${token}`;
    !disableLoading && dispatch(setIsLoading(true));
    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);
    dispatch(setIsLoading(false));
    const result = await handleResponse(response, dispatch);
    if (!result) throw new Error("error");
    dispatch(setErrorMessage(""));
    return result;
  } catch (error) {
    dispatch(setIsLoading(false));
  }
};

export const saveImage = async (imageFile) => {
  try {
    const formData = new FormData();
    dispatch(setIsLoading(true));
    formData.append("file", imageFile, imageFile.name);
    const response = await fetch(`${BASE_URL}api/user/upload`, {
      method: "POST",
      body: formData,
    });
    dispatch(setIsLoading(false));
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    const imageUrl = data.data.imageUrl;
    return imageUrl;
  } catch (error) {
    dispatch(setIsLoading(false));
    throw new Error("Error occurred during image upload");
  }
};
