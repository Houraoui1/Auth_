import axios, { AxiosResponse } from "axios";

export interface LoginData {
  data: any;
  email: string;
  password: string;
}
export function Request(data: LoginData): Promise<AxiosResponse<any>> {
 return axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
