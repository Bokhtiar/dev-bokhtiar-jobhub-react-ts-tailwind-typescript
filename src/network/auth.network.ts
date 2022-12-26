import { publicRequest } from "config/axios.config";

/* Login request */
type LoginDataType = {
  employee_id: string;
  password: string;
};
export const login = async (data: LoginDataType) => {
  return await publicRequest.post(`/auth/api/v1/admin/auth/login`, data);
};

/* Reset request */
export const reset = async () => {
  return await publicRequest.post(`/auth/api/v1/admin/auth/reset`);
};
