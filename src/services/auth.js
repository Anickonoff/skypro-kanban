import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";
export async function signIn(formData) {
  try {
    const response = await axios.post(API_URL + "/login", formData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.user;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}

export async function signUp(formData) {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.user;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
}
