import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_HOST;

export const RegistrationUser: any = async (
  email: string,
  password: string
) => {
  try {
    const { data } = await axios.post(`auth/registration`, {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    return error;
  }
};

export const LoginUser: any = async (email: string, password: string) => {
  try {
    const { data } = await axios.post(`auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const Logout: any = async () => {
  try {
    await axios.get(`auth/logout`);
  } catch (error: any) {
    return error;
  }
};

export const RefreshToken: any = async () => {
  try {
    const { data } = await axios.get(`auth/refresh`);
    return data;
  } catch (error: any) {
    return error.response.data;
  }
};
